import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { SessionDTO } from 'src/auth';
import { FileService } from 'src/file/file.service';
import { OrgUser } from 'src/orgUser/orgUser.constants';
import { OrgUserService } from 'src/orgUser/orgUser.service';
import { PaymentService } from 'src/payment/payment.service';
import { TicketStatus } from 'src/ticket/ticket.constants';
import { TicketService } from 'src/ticket/ticket.service';
import { CreateTicketOrderDTO, GetTicketOrderQuery, TicketDetailDTO, TicketOrderDTO } from './dto';
import { ITicketOrder } from './interface';
import { TikcetOrderStatus } from './ticketOrder.constants';
import { TicketOrderModel } from './ticketOrder.model';
import { TicketOrderSanitizer } from './ticketOrder.sanitizer';
import { RsvpStatus } from 'src/rsvp/rsvp.constants';
import { RsvpService } from 'src/rsvp/rsvp.service';
import { TicketDTO } from 'src/ticket/dto';
import { randomUUID } from 'crypto';
import { ConverterService } from 'src/converter/converter.service';
import { EventService } from 'src/event/event.service';
import { MailerService } from 'src/components/mailer/mailer.service';
import { IEvent } from 'src/event';
import { DOMAIN_NAME } from 'src/util';

@Injectable()
export class TicketOrderService {
  constructor(
    private readonly sanitizer: TicketOrderSanitizer,
    private readonly purchaseService: PaymentService,
    private readonly ticketService: TicketService,
    private readonly fileService: FileService,
    private readonly orgUserService: OrgUserService,
    private readonly rsvpService: RsvpService,
    private readonly converterService: ConverterService,
    private readonly eventService: EventService,
    private readonly mailerService: MailerService,
  ) {
    this.model = TicketOrderModel;
  }
  private model: Model<ITicketOrder>;

  /** create ticket order */
  async create(dto: CreateTicketOrderDTO): Promise<TicketOrderDTO[]> {
    if (!dto.user && !dto.email) {
      throw new HttpException('Email should not be empty', HttpStatus.BAD_REQUEST);
    }
    const event = await this.eventService.getRaw(dto.eventId);
    await this.eventService.enforceEventAccess(event.org, dto.user?.id, event.access);

    const orderId = randomUUID();
    const allticketOrders = [];
    const tasks = [];
    const ticketLinks = [];
    for (let i = 0; i < dto.tickets.length; i++) {
      tasks.push(this.buyTicket(event, dto.tickets[i], orderId, dto.user, dto.email));
    }
    const orders: ITicketOrder[][] = await Promise.all(tasks);
    let totalPrice = 0;
    for (let i = 0; i < orders.length; i++) {
      for (let j = 0; j < orders[i].length; j++) {
        const ticketOrder = orders[i][j];
        totalPrice += ticketOrder.price;
        allticketOrders.push(ticketOrder);
        ticketLinks.push(ticketOrder.ticketPDF)
      }
    }

    const payment = await this.purchaseService.pay({ orderId, amount: totalPrice, pmtMethod: dto.paymentMethod, email: dto.email, user: dto.user });
    await this.mailerService.sendOrderDetail(allticketOrders.length, this.groupOrders(allticketOrders), event, payment.amount, orderId, ticketLinks, dto.user ? dto.user.email : dto.email)
    return this.sanitizer.sanitizeMany(allticketOrders);
  }

  async buyTicket(
    event: IEvent,
    ticketDetails: TicketDetailDTO,
    orderId: string,
    user: SessionDTO,
    email?: string,
  ): Promise<ITicketOrder[]> {
    const ticket = await this.ticketService.findOne(ticketDetails.ticketId, user);
    await this.ticketService.enforceTicketAccess(ticket.org, user?.id, ticket.access);
    this.validationTicket(ticket, ticketDetails.count);
    const ticketOrders = await this.createOrders(event, ticket, ticketDetails.count, ticket.displayId, orderId, email, user?.id);
    if (user) await this.rsvpService.setStatus(ticket.eventId, RsvpStatus.GOING, user.id);
    return ticketOrders;
  }

  /** find all ticket order */
  /** develop we need query like event start and endDate range */
  async findAll(dto: GetTicketOrderQuery, user: SessionDTO): Promise<TicketOrderDTO[]> {
    const query: FilterQuery<ITicketOrder> = {
      memberId: user.id,
    };
    const filterQuery: FilterQuery<ITicketOrder> = {};
    if (dto.orderId) query.orderId = dto.orderId;
    if (dto.startDate) {
      filterQuery['createdAt'] = { $gte: dto.startDate };
    }
    if (dto.endDate) {
      if (dto.startDate) {
        filterQuery['createdAt']['$lte'] = dto.endDate;
      } else {
        filterQuery['createdAt'] = { $lte: dto.endDate };
      }
    }
    if (dto.status) query.status = dto.status;
    const ticketOrders = await this.model.find(query).populate({
      path: 'ticketId',
      populate: { path: 'eventId', match: filterQuery },
    });

    return this.sanitizer.sanitizeMany(ticketOrders);
  }

  /** find all ticket orders with admin */
  async findAllByAdmin(ticketId: string, dto: GetTicketOrderQuery, user: SessionDTO): Promise<TicketOrderDTO[]> {
    const query: FilterQuery<ITicketOrder> = { ticketId: ticketId };
    if (dto.status) query.status = dto.status;
    const orgUser = await this.orgUserService.getMember(user.id, null);
    if (!orgUser) {
      throw new HttpException('OrgUser with this information was not found', HttpStatus.NOT_FOUND);
    }
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, orgUser.userType);
    const ticketOrders = await this.model.find(query).populate('ticketId').populate('memberId');
    return this.sanitizer.sanitizeMany(ticketOrders);
  }

  /** find one by id */
  async findOne(_id: string, user: SessionDTO): Promise<TicketOrderDTO> {
    const ticketOrder = await this.model.findOne({ _id }).populate({
      path: 'ticketId',
      populate: { path: 'eventId' },
    });
    this.checkTicketOrder(ticketOrder);
    return this.sanitizer.sanitize(ticketOrder);
  }

  /** cancel ticket order */
  async cancel(_id: string, user: SessionDTO): Promise<string> {
    const ticketOrder = await this.model.findOne({ _id, memberId: user.id });
    this.checkTicketOrder(ticketOrder);
    ticketOrder.cancelDate = new Date();
    await Promise.all([
      ticketOrder.deleteOne(),
      this.purchaseService.cancel(ticketOrder._id),
      this.ticketService.decrementSoldOut(ticketOrder.ticketId, ticketOrder.ticketCount),
    ]);
    return ticketOrder._id;
  }

  /** set status checked */
  async checkIn(_id: string, user: SessionDTO): Promise<TicketOrderDTO> {
    const ticketOrder = await this.model.findById(_id);
    this.checkTicketOrder(ticketOrder);
    if (ticketOrder.status === TikcetOrderStatus.CHECKED) {
      throw new HttpException('Ticket order was checked', HttpStatus.BAD_REQUEST);
    }
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, ticketOrder.org);
    ticketOrder.status = TikcetOrderStatus.CHECKED;
    await ticketOrder.save();
    return this.sanitizer.sanitize(ticketOrder);
  }

  /** validate the ticket */
  private validationTicket(ticket: TicketDTO, count: number) {
    if (ticket.status !== TicketStatus.ACTIVE) {
      throw new HttpException('Ticket must be active', HttpStatus.BAD_REQUEST);
    }
    if (count > ticket.maxOrder || count > ticket.capacity) {
      throw new HttpException(
        'The count must be less than or equal to the capacity or maximum order.',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (ticket.soldOut + count > ticket.capacity) {
      throw new HttpException('The count less than or equal to the capacity.', HttpStatus.BAD_REQUEST);
    }
  }

  /** create the orders */
  private async createOrders(
    event: IEvent,
    ticket: TicketDTO,
    count: number,
    displayId: string,
    orderId: string,
    email: string,
    userId: string,
  ): Promise<ITicketOrder[]> {
    const ticketOrders: ITicketOrder[] = [];
    const tasks = [];
    for (let i = 0; i < count; i++) {
      const ticketOrder = new this.model({
        orderId: orderId,
        ticketId: ticket.id,
        org: ticket.org,
        memberId: userId,
        email,
        price: ticket.price,
      });
      const accessLink = `${DOMAIN_NAME}/dashboard/ticket?ticketId=${ticket.id}&ticketOrderId=${ticketOrder._id}`;
      const newQr = await this.fileService.generateQRCode(userId, accessLink);
      ticketOrder.qr = newQr;
      const htmlContent = await this.converterService.ticketOrderData(event, ticket.name, displayId, newQr.url);
      const pdfBuffer = await this.converterService.createPdf(htmlContent);
      const ticketDetail = await this.fileService.create({
        mimetype: 'application/pdf',
        buffer: pdfBuffer,
        originalname: 'ticketOrder',
      }, userId);
      ticketOrder.ticketPDF = ticketDetail.url;
      (await ticketOrder.save()).populate('ticketId', 'name')
      // tasks.push(ticketOrder.save().populate('ticketId').execPopulate());
      ticketOrders.push(ticketOrder);
    }
    tasks.push(this.ticketService.incrementSoldOut(ticket.id, count));
    await Promise.all([tasks]);
    return ticketOrders;
  }

  /** group the orders */
  private groupOrders(allticketOrders) {
    const groupedOrdersData = allticketOrders.reduce((acc, item) => {
      if (!acc[item.ticketId]) {
        acc[item.ticketId] = [];
      }
      acc[item.ticketId].push(item);
      return acc;
    }, {});
    const orders = Object.values(groupedOrdersData);
    const groupOrder = [];
    let totalTicketPrice = 0;
    let totalTicketCount = 0;
    let ticketName;
    for (let i = 0; i < orders.length; i++) {
      const order: any = orders[i];
      for (let j = 0; j < order.length; j++) {
        totalTicketPrice += order[j].price;
        totalTicketCount++;
        ticketName = order[j].ticketId.name;
      }
      groupOrder.push({ ticketName, totalTicketCount, totalTicketPrice });
      totalTicketPrice = 0;
      totalTicketCount = 0;
    }
    return groupOrder;
  }

  /** Private Methods */
  /** checks if the ticket order is valid or throws a not found exception */
  private checkTicketOrder(ticketOrder: ITicketOrder) {
    if (!ticketOrder) {
      throw new HttpException('Ticket order was not found', HttpStatus.NOT_FOUND);
    }
  }
}

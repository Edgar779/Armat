import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { SessionDTO } from 'src/auth';
import { EventAccess } from 'src/event/constants';
import { EventService } from 'src/event/event.service';
import { DisplayIdType, IDisplayId } from 'src/globals/displayId';
import { DisplayIdService } from 'src/globals/displayId/displayId.service';
import { OrgService } from 'src/org/org.service';
import { OrgUser } from 'src/orgUser/orgUser.constants';
import { OrgUserService } from 'src/orgUser/orgUser.service';
import { TicketDTO, CreateTicketDTO, EditTicketDTO, TicketListDTO, GetTicketQuery } from './dto';
import { ITicket, ITicketAccess } from './interface';
import { TicketAccess } from './ticket.constants';
import { TicketModel } from './ticket.model';
import { TicketSanitizer } from './ticket.sanitizer';

@Injectable()
export class TicketService {
  constructor(
    private readonly sanitizer: TicketSanitizer,
    private readonly orgUserService: OrgUserService,
    private readonly orgService: OrgService,
    private readonly eventService: EventService,
    protected readonly idGenerator: DisplayIdService,
  ) {
    this.model = TicketModel;
  }
  private model: Model<ITicket>;

  /** create ticket */
  async create(dto: CreateTicketDTO): Promise<TicketDTO> {
    if (dto.accessStatus === EventAccess.LISTS && !dto.listIds) {
      throw new HttpException('listIds should not be empty', HttpStatus.BAD_REQUEST);
    }
    if (dto.listIds?.length && dto.accessStatus !== EventAccess.LISTS) {
      throw new HttpException('select status LISTS', HttpStatus.BAD_REQUEST);
    }
    this.validateOrder(dto.capacity, dto.minOrder, dto.maxOrder);
    const event = await this.eventService.getRaw(dto.eventId);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, null, event.org);

    const ticket: ITicket = new this.model({
      eventId: dto.eventId,
      name: dto.name,
      capacity: dto.capacity,
      price: dto.price,
      startDate: dto.startDate,
      endDate: dto.endDate,
      startTime: dto.startTime,
      endTime: dto.endTime,
      minOrder: dto.minOrder,
      maxOrder: dto.maxOrder,
      description: dto.description,
      org: event.org,
      status: dto.status,
      access: { listIds: dto.listIds, status: dto.accessStatus },
      displayId: await this.generateId(),
    });

    await ticket.save();
    return this.sanitizer.sanitize(ticket);
  }

  /** get all tickets */
  async findAll(dto: GetTicketQuery, user?: SessionDTO): Promise<TicketListDTO> {
    const orgUser = await this.orgUserService.getMember(user?.id);
    const query: FilterQuery<ITicket> = {};
    const getLists = await this.orgService.findMemberLists(orgUser?._id, orgUser?.org);
    if (dto.eventId) query.eventId = dto.eventId;
    if (dto.org) query.org = dto.org;
    if (dto.status) query.status = dto.status;
    if (dto.access && dto.access === TicketAccess.MEMBERS) {
      query.$or = [{ 'access.status': TicketAccess.MEMBERS, org: orgUser?.org }];
    } else if (dto.access && dto.access === TicketAccess.LISTS) {
      query.$or = [{ 'access.status': TicketAccess.LISTS, 'access.listIds': { $in: getLists } }];
    } else if (!dto.access || dto.access === TicketAccess.PUBLIC) {
      query.$or = [
        { 'access.status': TicketAccess.PUBLIC },
        { 'access.status': TicketAccess.MEMBERS, org: orgUser?.org },
        { 'access.status': TicketAccess.LISTS, 'access.listIds': { $in: getLists } },
      ];
    }
    const [tickets, count] = await Promise.all([
      this.model.find(query).skip(dto.skip).limit(dto.limit).populate('eventId'),
      this.model.countDocuments(query),
    ]);
    return { tickets: this.sanitizer.sanitizeMany(tickets), count };
  }

  /** get ticket by id (ticket, ticket-order) */
  async findOne(_id: string, user?: SessionDTO): Promise<TicketDTO> {
    const ticket = await this.model.findById(_id);
    this.checkTicket(ticket);
    await this.enforceTicketAccess(ticket.org, user?.id, ticket.access);
    return this.sanitizer.sanitize(ticket);
  }

  /** update the ticket */
  async update(_id: string, dto: EditTicketDTO): Promise<TicketDTO> {
    const ticket = await this.model.findById(_id);
    this.checkTicket(ticket);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, null, ticket.org);
    if (dto.name) ticket.name = dto.name;
    if (dto.capacity) ticket.capacity = dto.capacity;
    if (dto.price) ticket.price = dto.price;
    if (dto.startDate) ticket.startDate = dto.startDate;
    if (dto.endDate) ticket.endDate = dto.endDate;
    if (dto.startTime) ticket.startTime = dto.startTime;
    if (dto.endTime) ticket.endTime = dto.endTime;
    if (dto.minOrder) ticket.minOrder = dto.minOrder;
    if (dto.maxOrder) ticket.maxOrder = dto.maxOrder;
    if (dto.description) ticket.description = dto.description;
    await ticket.save();
    return this.sanitizer.sanitize(ticket);
  }

  /** remove the ticket */
  async remove(_id: string, user: SessionDTO): Promise<string> {
    const ticket = await this.model.findById(_id);
    this.checkTicket(ticket);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, ticket.org);
    await ticket.deleteOne();
    return _id;
  }

  /** set ticket status */
  async setStatus(_id: string, status: string, user: SessionDTO): Promise<TicketDTO> {
    const ticket = await this.model.findById(_id);
    this.checkTicket(ticket);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, ticket.org);
    ticket.status = status;
    await ticket.save();
    return this.sanitizer.sanitize(ticket);
  }

  /** increment sold out count (ticket order) */
  async incrementSoldOut(_id: string, count: number): Promise<number> {
    const ticket = await this.model.findById(_id);
    this.checkTicket(ticket);
    ticket.soldOut += count;
    await ticket.save();
    return ticket.soldOut;
  }

  /** decrement sold out count (ticket order) */
  async decrementSoldOut(_id: string, count: number): Promise<number> {
    const ticket = await this.model.findById(_id);
    this.checkTicket(ticket);
    ticket.soldOut -= count;
    await ticket.save();
    return ticket.soldOut;
  }

  /** Private Methods */
  /** checks if the ticket is valid or throws a not found exception */
  private checkTicket(ticket: ITicket) {
    if (!ticket) {
      throw new HttpException('Ticket was not found', HttpStatus.NOT_FOUND);
    }
  }

  /** validate min max orders */
  private validateOrder(capacity: number, minOrder: number, maxOrder: number) {
    if (minOrder && minOrder > capacity) {
      throw new HttpException('The minimum order must be less than or equal to the capacity.', HttpStatus.BAD_REQUEST);
    }
    if (maxOrder && maxOrder > capacity) {
      throw new HttpException('The maximum order must be less than or equal to the capacity.', HttpStatus.BAD_REQUEST);
    }
    if (minOrder && maxOrder && minOrder > maxOrder) {
      throw new HttpException(
        'The minimum order must be less than or equal to the maximum order.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /** set ticket access status */
  async setAccessStatus(_id: string, status: TicketAccess, user: SessionDTO): Promise<TicketDTO> {
    const ticket = await this.model.findById(_id);
    this.checkTicket(ticket);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, ticket.org);
    if (status === TicketAccess.LISTS && !ticket.access.listIds.length) {
      throw new HttpException('First add listIds', HttpStatus.BAD_REQUEST);
    }
    ticket.access.status = status;
    await ticket.save();
    return this.sanitizer.sanitize(ticket);
  }

  /** Generate order displayID */
  private async generateId(): Promise<IDisplayId> {
    const lastOrder = await this.model.findOne().sort('-createdAt');
    return this.idGenerator.generateDisplayIdWithDate(
      DisplayIdType.ORDER,
      lastOrder ? lastOrder.displayId.month : 0,
      lastOrder ? lastOrder.displayId.suffix : 0,
    );
  }

  /** has event access */
  async hasTicketAccess(orgId: string, userId: string, access: ITicketAccess): Promise<boolean> {
    let member;
    if (!userId && access.status !== TicketAccess.PUBLIC) return false;
    if (access.status === TicketAccess.PUBLIC) return true;
    else if (access.status === TicketAccess.MEMBERS) {
      member = await this.orgUserService.getMember(userId, orgId);
      if (!member) return false;
    } else if (access.status === TicketAccess.LISTS) {
      const listIds = [];
      if (access.listIds[0]?.name) {
        access.listIds.forEach((list) => listIds.push(list._id));
      }
      member = await this.orgUserService.getMember(userId, orgId);
      const exist = await this.orgService.getListByMember(orgId, listIds.length ? listIds : access.listIds, member._id);
      if (!exist) return false;
    }
    return true;
  }

  /** enforce event access */
  async enforceTicketAccess(orgId: string, userId: string, access: ITicketAccess): Promise<boolean> {
    const eventAccess = await this.hasTicketAccess(orgId, userId, access);
    if (!eventAccess) {
      throw new HttpException('User does not have permission to access resource', HttpStatus.UNAUTHORIZED);
    }
    return true;
  }
}

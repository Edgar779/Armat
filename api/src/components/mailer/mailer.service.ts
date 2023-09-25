import { SESClient, SendEmailCommand, SendRawEmailCommand } from '@aws-sdk/client-ses';
import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IEvent } from 'src/event';
import { IUser } from 'src/user';
import { UserService } from '../../user/user.service';
import { NotificationType } from '../../util/constants';
import { ContactDTO } from './dto';
import { SendMailDTO } from './dto/sendMail.dto';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, SES_REGION } from './mailer.contants';
import { AuthTemplate, ContactTemplate, EventTemplate, InvoiceTemplate } from './templates';
import { TicketTemplate } from './templates/ticket.template';

@Injectable()
export class MailerService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly authTemplate: AuthTemplate,
    private readonly contactTemplate: ContactTemplate,
    private readonly ticketTemplate: TicketTemplate,
    private readonly eventTemplate: EventTemplate,
    private readonly invoiceTemplate: InvoiceTemplate,
  ) {
    this.mailer = new SESClient({
      region: SES_REGION,
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });
  }
  private mailer: SESClient;

  //TestMail
  sendTestMail = async () => {
    const mailOptions = this.authTemplate.generateTestEmail();
    return await this.mailer.send(new SendEmailCommand(mailOptions));
  };

  sendMail = async (dto: SendMailDTO) => {
    let user: IUser;
    if (dto.userId) {
      user = await this.userService.getRaw(dto.userId);
      this.checkUserPreferences(user);
    }
    let options;
    switch (dto.type) {
      case NotificationType.UPGRADE_ORGANIZATION_ADMIN:
        options = this.authTemplate.adminUpgrade(dto.email);
        break;
      case NotificationType.UPGRADE_ORGANIZATION_MANAGER:
        options = this.authTemplate.managerdUpgrade(dto.email);
        break;
      case NotificationType.UPGRADE_ORGANIZATION_MEMBER:
        options = this.authTemplate.memberUpgrade(dto.email);
        break;
      case NotificationType.DOWNGRADE_ORGANIZATION_MANAGER:
        options = this.authTemplate.managerDowngrade(dto.email);
        break;
      case NotificationType.DOWNGRADE_ORGANIZATION_MEMBER:
        options = this.authTemplate.memberDowngrade(dto.email);
        break;
      case NotificationType.INVITE:
        options = this.authTemplate.invite(dto.email);
        break;
      case NotificationType.DELETEMEMBER:
        options = this.authTemplate.delete(dto.email);
        break;
      case NotificationType.FORGOT_PASSWORD:
        options = this.authTemplate.getForgetPassword(dto.resetToken, dto.email);
        break;
      case NotificationType.EVENT_CREATED:
        if (user) {
          options = this.eventTemplate.eventCreated(user.email, dto.orgName);
        }
        break;
      default:
        break;
    }
    return await this.mailer.send(new SendEmailCommand(options));
  };

  sendContactMail = async (contactDTO: ContactDTO) => {
    const mailOptions = this.contactTemplate.getContact(contactDTO.name, contactDTO.email, contactDTO.message);
    return await this.mailer.send(new SendEmailCommand(mailOptions));
  };

  sendOrderDetail = async (allticketOrders: number, groupOrders, event: IEvent, amount: number, orderId: string, ticketLinks: string[], email: string) => {
    let sendRawEmailPromise;
    const date = new Date();
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    const mailOptions = this.ticketTemplate.send(dayName, day, year, allticketOrders, groupOrders, event, amount, orderId, ticketLinks, email);
    return new Promise((resolve, reject) => {
      mailOptions.compile().build((err, message) => {
        if (err) {
          reject(`Error sending invoice pdf email: ${err}`);
        }
        sendRawEmailPromise = this.mailer.send(new SendRawEmailCommand({ RawMessage: { Data: message } }));
      });
      resolve(sendRawEmailPromise);
      reject(new Error("Operation failed."));
    });
  };
  /** Send many mail */
  async sentMailMany(dtos: SendMailDTO[]) {
    if (!dtos || dtos.length < 1) return;
    const promises = [];
    for (let i = 0; i < dtos.length; i++) {
      promises.push(() => this.sendMail(dtos[i]));
    }
    await Promise.all(promises);
  }

  /** send invoice pdf */
  sendInvoice = async (email: string, link: string) => {
    let sendRawEmailPromise;
    const mailOptions = this.invoiceTemplate.sendInvoice(email, link);
    return new Promise((resolve, reject) => {
      mailOptions.compile().build((err, message) => {
        if (err) {
          reject(`Error sending invoice pdf email: ${err}`);
        }
        sendRawEmailPromise = this.mailer.send(new SendRawEmailCommand({ RawMessage: { Data: message } }));
      });
      resolve(sendRawEmailPromise);
    });
  };

  /** Generates an email informing the customer to make a payment to avoid account locking  */
  async sendInactivation(email: string, endDate: Date) {
    const mailOptions = this.invoiceTemplate.generateInactiveNotice(email, endDate);
    return await this.mailer.send(new SendEmailCommand(mailOptions));
  }
  //Private menthods
  private async checkUserPreferences(user: IUser) {
    if (!user) {
      throw new HttpException('Could not find user to check email preferences', HttpStatus.UNAUTHORIZED);
    }
    if (user.settings?.notificationSettings?.allowEmail) {
      return true;
    } else {
      return false;
    }
  }
}

import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserService } from '../user/user.service';
import { CreateNotificationDTO, NotificationDTO, SMSDTO } from './dto';
import { NotificationSanitizer } from './notification.sanitizer';
import { INotification } from './interfaces';
import { NotificationStatus, PHONE_FROM, TWILIO_AUTH_TOKEN, TWILIO_SID } from './notification.constants';
import { NotificationModel } from './notification.model';
import * as twilioSetup from 'twilio';
import { MessageStatus } from 'twilio/lib/rest/api/v2010/account/message';
import { NotificationType } from '../util/constants';

@Injectable()
export class NotificationService {
  constructor(
    private readonly sanitizer: NotificationSanitizer,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {
    this.model = NotificationModel;
    this.twilio = twilioSetup(TWILIO_SID, TWILIO_AUTH_TOKEN);
  }
  private model: Model<INotification>;
  private twilio;
  /** Publis API */
  async create(dto: CreateNotificationDTO) {
    const user = await this.userService.getRaw(dto.userId);
    const settings = user?.settings?.notificationSettings;
    if (settings && settings.allowInApp) {
      const notification = new this.model({
        user: user._id,
        type: dto.type,
        status: NotificationStatus.UNREAD,
        inviter: dto.inviter,
        event: dto.event,
        org: dto.org,
      });
      await notification.save();
    }
  }

  /** Deletes a notification with a specific user */
  async delete(userId: string, notificationId: string): Promise<string> {
    await this.model.deleteOne({
      user: userId,
      _id: notificationId,
    });
    return notificationId;
  }

  /** Deletes all notifications for a user
   * @returns the number deleted
   */
  async deleteAll(userId: string): Promise<number> {
    const deleteResponse = await this.model.deleteMany({
      user: userId,
    });
    return deleteResponse.deletedCount;
  }

  /** Marks a notificaiton read */
  async markRead(userId: string, notificationId: string) {
    const notification = await this.model.findOneAndUpdate(
      { user: userId, _id: notificationId },
      { $set: { status: NotificationStatus.READ } },
    );
    return this.sanitizer.sanitize(notification);
  }

  /** Marks all notification read by userId
   * @returns number of documents modified
   */
  async markAllRead(userId: string) {
    const updateResponse = await this.model.updateMany({ user: userId }, { $set: { status: NotificationStatus.READ } });
    return updateResponse.modifiedCount;
  }

  /** Finds all notifications for the user (uses pagination) */
  async getNotifications(pageSize: number, page: number, userId: string): Promise<NotificationDTO[]> {
    const notifications = await this.model
      .find({ user: userId })
      .sort({ timestamp: -1 })
      .populate('event')
      .populate('inviter')
      .populate('org')
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    return this.sanitizer.sanitizeMany(notifications);
  }

  /** Send an SMS Message */
  async sendSMS(dto: SMSDTO): Promise<MessageStatus> {
    try {
      const user = await this.userService.getRaw(dto.userId);
      const settings = user?.settings?.notificationSettings;
      if (settings && settings.allowText && user.phoneNumber) {
        const sms = await this.twilio.messages.create({
          body: this.getSMSMessage(dto),
          from: PHONE_FROM,
          to: user.phoneNumber,
        });
        return sms.status;
      }
    } catch (err) {
      console.log(err);
    }
  }

  //Sends a Test sms message
  async sendSMSTest({ body, to }): Promise<MessageStatus> {
    const message = await this.twilio.messages.create({
      body: body,
      from: PHONE_FROM,
      to: to,
    });
    console.log(message);
    return message.status;
  }

  /** Sends many SMS notifications */
  async sendManySMS(dtos: SMSDTO[]): Promise<MessageStatus[]> {
    if (!dtos || dtos.length < 1) return;
    const promises = [];
    for (let i = 0; i < dtos.length; i++) {
      promises.push(() => this.sendSMS(dtos[i]));
    }
    const results = await Promise.all(promises);
    return results;
  }

  /** Create many notification */
  async createMany(dtos: CreateNotificationDTO[]): Promise<NotificationDTO[]> {
    if (!dtos || dtos.length < 1) return;
    const promises = [];
    for (let i = 0; i < dtos.length; i++) {
      promises.push(() => this.create(dtos[i]));
    }
    const results = await Promise.all(promises);
    return results;
  }

  /** Private API */

  /** generates the message to be sent to the user based on the notifiction type */
  private getSMSMessage(dto: SMSDTO): string {
    switch (dto.type) {
      case NotificationType.DOWNGRADE_ORGANIZATION_MEMBER:
        return 'Your account has been downgraded to Member';
        break;
      case NotificationType.DOWNGRADE_ORGANIZATION_MANAGER:
        return 'Your account has been downgraded to organization Member';
        break;
      case NotificationType.UPGRADE_ORGANIZATION_MEMBER:
        return 'Your account has been upgraded to Verified Member';
        break;
      case NotificationType.UPGRADE_ORGANIZATION_MANAGER:
        return 'Your account has been upgraded to Organizer';
        break;
      case NotificationType.UPGRADE_ORGANIZATION_ADMIN:
        return 'Your account has been upgraded to Organizer';
        break;
      case NotificationType.DELETEMEMBER:
        return 'You are not organization member now';
        break;
      case NotificationType.EVENT_CREATED:
        return `${dto.orgName ? dto.orgName : 'An organization you follow '} just created an event.`;
        break;
      case NotificationType.EVENT_APPROVED:
        return 'Your event has been approved and published';
        break;
      case NotificationType.EVENT_DISAPPROVED:
        return 'Your event has been rejected, login to check why';
        break;
      case NotificationType.SUBSCRIPTION_REMINDER:
        return "Your have a subscripton for an event that is coming up. Go to Armat.org to check your event's status";
        break;
      case NotificationType.CLAIM_APPROVED:
        return 'Congratulations!!! Your claim has been approved. You are not the manager of an organization.';
        break;
      case NotificationType.CLAIM_REJECTED:
        return 'Your claim to manage an organization has been rejected by the Armat team';
        break;
      default:
        return null;
    }
  }
}

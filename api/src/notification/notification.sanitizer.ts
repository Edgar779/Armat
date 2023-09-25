import { Injectable } from '@nestjs/common';
import { IOrg } from '../org';
import { IEvent } from '../event';
import { IUser } from '../user';
import { ISanitize } from '../util';
import { NotificationDTO, NotificationEventDTO, OrgNotificationDTO } from './dto';
import { INotification } from './interfaces';

@Injectable()
export class NotificationSanitizer implements ISanitize {
  /** Receives a notfication and sanitizes them */
  sanitize(notification: INotification): NotificationDTO {
    const sanitized: NotificationDTO = {
      id: notification._id,
      type: notification.type,
      status: notification.status,
      createdAt: notification.createdAt,
      event: this.getEvent(notification),
      inviter: this.getInviter(notification),
      org: this.getOrg(notification),
    };
    return sanitized;
  }

  /** Receives a list of notifications and sanitizes them */
  sanitizeMany(notifications: INotification[]): NotificationDTO[] {
    const sanitizedNotifications: NotificationDTO[] = [];
    for (let i = 0; i < notifications.length; i++) {
      sanitizedNotifications.push(this.sanitize(notifications[i]));
    }
    return sanitizedNotifications;
  }

  /** Get Event  */
  getEvent(notification: INotification): NotificationEventDTO {
    let event: NotificationEventDTO;
    const notificationEvent: IEvent = notification.event as IEvent;
    // checking if the event is populated
    if (notificationEvent && notificationEvent.title) {
      event = {
        eventId: notificationEvent._id,
        eventName: notificationEvent.title,
        eventEndDate: notificationEvent.endDate,
      };
      return event;
    }
    return undefined;
  }
  /** Get user  */
  getInviter(notification: INotification): string {
    const inviter = notification.inviter as IUser;
    if (inviter && inviter.fullName) {
      if (inviter?.fullName) return inviter.fullName;
    }
    return undefined;
  }
  /** get the organizer */
  getOrg(notification: INotification): OrgNotificationDTO {
    const org = notification.org as IOrg;
    if (org && org.name) {
      return {
        id: org._id,
        name: org.name,
      };
    }
    return undefined;
  }
}

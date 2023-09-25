import { Injectable } from '@nestjs/common';
import { IOrg, OrgDTO } from '../org';
import { IAuth } from '../auth';
import { AddressSanitizer } from '../components/address/address.sanitizer';
import { IUser } from '../user';
import { ISanitize } from '../util';
import { EventStatus } from './constants';
import { CreatorDTO, EventDTO } from './dto';
import { IEvent } from './interfaces';
import { OrgSanitizer } from '../org/org.sanitizer';

@Injectable()
export class EventSanitizer implements ISanitize {
  constructor(private readonly addressSanitizer: AddressSanitizer, private readonly orgSanitizer: OrgSanitizer) {}

  sanitize(event: IEvent): EventDTO {
    const sanitizedEvent: EventDTO = {
      creator: this.getCreator(event.creator),
      access: event.access?.listIds[0]?.name
        ? {
            status: event.access.status,
            listIds: this.orgSanitizer.sanitizeLists(event.access.listIds),
          }
        : event.access,
      rsvpCount: event.rsvpCount,
      createdAt: event.createdAt,
      eventId: event.id,
      title: event.title,
      description: event.description,
      startDate: event.startDate,
      endDate: event.endDate,
      startTime: event.startTime,
      endTime: event.endTime,
      timezoneOffset: event.timezoneOffset,
      locationType: event.locationType,
      status: event.status,
      address: this.addressSanitizer.sanitize(event.address),
      eventImage: event.eventImage,
      images: event.images.length > 0 ? event.images : undefined,
      cta: event.cta,
      org: this.getOrg(event.org),
      allDay: event.allDay,
      tbd: event.tbd,
      isPast: event.isPast,
    };
    if (event.tags && event.tags.length > 0) sanitizedEvent.tags = event.tags;
    if (event.categories && event.categories.length > 0) {
      sanitizedEvent.categories = event.categories;
    }
    if (event.status === EventStatus.REJECTED && event.comment) {
      sanitizedEvent.comment = event.comment;
    }
    return sanitizedEvent;
  }

  /** Sanitizes an array of events */
  sanitizeMany(events: IEvent[]): EventDTO[] {
    const sanitizedEvents: EventDTO[] = [];
    events.map((event) => sanitizedEvents.push(this.sanitize(event)));
    return sanitizedEvents;
  }

  /** Private Methods */
  private getCreator(creator: IUser | string): CreatorDTO {
    if (!creator) return null;
    const user = creator as IUser;
    if (user.fullName) {
      const auth = user.auth as IAuth;
      return {
        fullName: user.fullName,
        id: user._id,
        type: auth.role ? auth.role : undefined,
        avatar: user.avatar,
      };
    }
    return undefined;
  }

  //** Sanitize the organization  */
  private getOrg(org: IOrg | string): OrgDTO {
    if (!org) return undefined;
    const organization = org as IOrg;
    if (organization.name) {
      return this.orgSanitizer.sanitize(organization);
    }
    return undefined;
  }
}

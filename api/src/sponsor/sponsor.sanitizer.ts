import { Injectable } from '@nestjs/common';
import { IEvent } from '../event';
import { IOrg } from '../org';
import { IUser } from '../user';
import { ISanitize } from '../util';
import { SponsorDTO } from './dto';
import { ISponsor } from './interface';

@Injectable()
export class SponsorSanitizer implements ISanitize {
  sanitize(sponsor: ISponsor): SponsorDTO {
    const org = this.getOrg(sponsor.org);
    const event = this.getEvent(sponsor.event);
    const user = this.getUser(sponsor.requester);
    const sanitized: SponsorDTO = {
      eventId: event?.id ? event.id : event,
      eventTitle: event?.title ? event.title : undefined,
      orgId: org?.id ? org.id : org,
      orgName: org?.name ? org.name : undefined,
      requesterId: user?.id ? user.id : user,
      requesterName: user?.fullName ? user.fullName : undefined,
      note: sponsor.note,
      status: sponsor.status,
      createdAt: sponsor.createdAt,
    };
    return sanitized;
  }

  sanitizeMany(sponsors: ISponsor[]): SponsorDTO[] {
    const sanitized: SponsorDTO[] = [];
    for (let i = 0; i < sponsors.length; i++) {
      sanitized.push(this.sanitize(sponsors[i]));
    }
    return sanitized;
  }

  /** Private Methods */
  private getOrg(doc: IOrg | string): any {
    const org = doc as IOrg;
    if (org) {
      if (org.name) {
        return {
          id: org._id,
          name: org.name,
        };
      } else {
        return doc.toString();
      }
    }
    return undefined;
  }

  private getEvent(doc: IEvent | string): any {
    const event = doc as IEvent;
    if (event) {
      if (event.title) {
        return {
          id: event._id,
          title: event.title,
        };
      } else {
        return doc.toString();
      }
    }
    return undefined;
  }

  private getUser(doc: IUser | string): any {
    const user = doc as IUser;
    if (user) {
      if (user.fullName) {
        return {
          id: user._id,
          fullName: user.fullName,
        };
      } else {
        return doc.toString();
      }
    }
    return undefined;
  }
}

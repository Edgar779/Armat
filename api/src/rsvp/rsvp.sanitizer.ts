import { Injectable } from '@nestjs/common';
import { UserOrgSanitizer } from 'src/orgUser/orgUser.sanitizer';
import { ISanitize } from '../util';
import { RsvpDTO } from './dto';
import { IRsvp } from './interface';

@Injectable()
export class RsvpSanitizer implements ISanitize {
  constructor(private readonly userOrgSanitizer: UserOrgSanitizer) {}
  sanitize(rsvp: IRsvp): RsvpDTO {
    const sanitized: RsvpDTO = {
      id: rsvp.id,
      eventId: rsvp.eventId,
      memberId: rsvp.memberId?.email ? this.userOrgSanitizer.sanitizeMember(rsvp.memberId) : rsvp.memberId,
      status: rsvp.status,
    };
    return sanitized;
  }

  sanitizeMany(rsvps: IRsvp[]): RsvpDTO[] {
    const sanitized: RsvpDTO[] = [];
    for (let i = 0; i < rsvps.length; i++) {
      sanitized.push(this.sanitize(rsvps[i]));
    }
    return sanitized;
  }
}

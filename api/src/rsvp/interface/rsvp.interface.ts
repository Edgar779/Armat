import { Document } from 'mongoose';
import { IEvent } from 'src/event';
import { IOrgUser } from 'src/orgUser/interface';
import { RsvpStatus } from '../rsvp.constants';

export interface IRsvp extends Document {
  eventId: IEvent['_id'];
  memberId: IOrgUser['_id'];
  status: RsvpStatus;
}

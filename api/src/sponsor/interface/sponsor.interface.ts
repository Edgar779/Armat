import { Document } from 'mongoose';
import { SponsorStatus } from '../sponsor.constants';

export interface ISponsor extends Document {
  uniqueId: string;
  event: string;
  requester: string;
  org: string;
  createdAt: Date;
  note?: string;
  status: SponsorStatus;
}

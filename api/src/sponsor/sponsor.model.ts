import { Types, Schema, model } from 'mongoose';
import { ISponsor } from './interface/sponsor.interface';
import { SponsorStatus } from './sponsor.constants';

const sponsorSchema = new Schema(
  {
    uniqueId: { type: String, required: true, unique: true },
    event: { type: Types.ObjectId, required: true, ref: 'event' },
    requester: { type: Types.ObjectId, required: true, ref: 'user' },
    org: { type: Types.ObjectId, required: true, ref: 'org' },
    note: String,
    createdAt: Date,
    status: { type: String, enum: SponsorStatus, required: true },
  },
  { timestamps: true },
);

export const SponsorModel = model<ISponsor>('sponsor', sponsorSchema);

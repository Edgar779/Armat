import { model, Schema, Types } from 'mongoose';
import { FileSchema } from '../file';
import { addressSchema } from '../components/address';
import { IEvent } from './interfaces';
import { EventAccess, EventLocation, EventStatus } from './constants';

const AccessSchema = new Schema({
  status: { type: String, enum: EventAccess },
  listIds: [{ type: Types.ObjectId, ref: 'userList' }],
});

const eventSchema = new Schema(
  {
    creator: { type: Types.ObjectId, required: true, ref: 'user' },
    access: AccessSchema,
    rsvpCount: { type: Number, default: 0 },
    org: { type: Types.ObjectId, ref: 'org' },
    title: { type: String, required: true },
    locationType: { type: String, enum: EventLocation, required: true },
    categories: { type: [String] },
    tags: { type: [String] },
    description: { type: String },
    eventImage: Number,
    images: [FileSchema],
    address: addressSchema,
    startDate: { type: Date, required: true },
    startTime: { type: String },
    endDate: { type: Date, required: true },
    endTime: { type: String },
    allDay: Boolean,
    tbd: Boolean,
    timezoneOffset: { type: Number, required: true },
    status: { type: String, enum: EventStatus, required: true },
    comment: String,
    cta: {
      donate: String,
      contactUs: String,
      bookNow: String,
      emailUs: String,
      buyTickets: String,
      register: String,
      moreInfo: String,
    },
    isPast: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const EventModel = model<IEvent>('event', eventSchema);
export const PastEventModel = model<IEvent>('pastEvent', eventSchema);

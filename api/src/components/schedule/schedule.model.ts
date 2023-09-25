import { Schema } from 'mongoose';

export const WeekSchema = new Schema(
  {
    monday: [{ from: { type: String }, to: { type: String }, available: { type: Boolean } }],
    tuesday: [{ from: { type: String }, to: { type: String }, available: { type: Boolean } }],
    wednesday: [{ from: { type: String }, to: { type: String }, available: { type: Boolean } }],
    thursday: [{ from: { type: String }, to: { type: String }, available: { type: Boolean } }],
    friday: [{ from: { type: String }, to: { type: String }, available: { type: Boolean } }],
    saturday: [{ from: { type: String }, to: { type: String }, available: { type: Boolean } }],
    sunday: [{ from: { type: String }, to: { type: String }, available: { type: Boolean } }],
  },
  { _id: false },
);

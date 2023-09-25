import { model, Schema, Types } from 'mongoose';
import { WeekSchema } from 'src/components/schedule/schedule.model';
import { addressSchema } from '../components/address';
import { FileSchema } from '../file';
import { IOrg, IOrgClaim, IOrgEdit } from './interface';
import { OrgStatus, OrgType } from './org.constants';

const socialsSchema = new Schema(
  {
    google: String,
    facebook: String,
    instagram: String,
    youtube: String,
    yelp: String,
    twitter: String,
  },
  { _id: false },
);

const reviewsSchema = new Schema({
  googlePlaceId: String,
  yelpBusinessId: String,
});

const orgClaimSchema = new Schema(
  {
    org: { type: Types.ObjectId, ref: 'org' },
    user: { type: Types.ObjectId, ref: 'user' },
    email: { type: String },
  },
  { timestamps: true },
);

const orgEditSchema = new Schema(
  {
    org: { type: Types.ObjectId, ref: 'org', required: true },
    editor: { type: Types.ObjectId, ref: 'user', required: true },
    name: { type: String },
    phoneNumber: { type: String },
    email: { type: String },
    address: String,
    categories: {
      type: [{ type: Types.ObjectId, ref: 'orgCategory' }],
      required: false,
      default: undefined,
    },
    description: String,
    hours: WeekSchema,
  },
  { timestamps: true },
);

const orgSchema = new Schema(
  {
    userList: [{ type: Types.ObjectId, ref: 'userList' }],
    name: { type: String, required: true },
    type: { type: String, enum: OrgType, required: true },
    phoneNumber: { type: String },
    email: { type: String },
    address: { type: addressSchema },
    categories: [{ type: Types.ObjectId, ref: 'orgCategory' }],
    status: { type: String, enum: OrgStatus, required: true },
    creator: { type: Types.ObjectId, ref: 'user' },
    comment: { type: String },
    mainImage: Number,
    images: [FileSchema],
    numEdits: Number,
    description: String,
    website: String,
    hours: WeekSchema,
    avatar: FileSchema,
    socials: socialsSchema,
    reviews: reviewsSchema,
  },
  { timestamps: true },
);

export const OrgModel = model<IOrg>('org', orgSchema);
export const OrgEditModel = model<IOrgEdit>('orgEdit', orgEditSchema);
export const OrgClaimModel = model<IOrgClaim>('orgclaim', orgClaimSchema);

import { model, Schema, Types } from 'mongoose';
import { OrgUser } from 'src/orgUser/orgUser.constants';
import { FileSchema } from '../file';
import { IUser } from './interface';

const OrganizerSchema = new Schema(
  {
    contactName: String,
    contactPhone: String,
    contactEmail: String,
  },
  { _id: false },
);

const notificationSettingsSchema = new Schema(
  {
    allowText: Boolean,
    allowInApp: Boolean,
    allowEmail: Boolean,
  },
  { _id: false },
);

const settingsSchema = new Schema({ notificationSettings: notificationSettingsSchema }, { _id: false });

const UserSchema = new Schema({
  auth: { type: Types.ObjectId, required: true, ref: 'auth' },
  orgs: [
    {
      userType: {
        type: String,
        enum: OrgUser,
      },
      org: {
        type: Types.ObjectId,
        ref: 'org',
      },
    },
  ],
  email: { type: String, required: true, unique: true },
  fullName: { type: String },
  phoneNumber: { type: String },
  avatar: FileSchema,
  organizerInfo: { type: OrganizerSchema },
  settings: { type: settingsSchema },
  socialAvatar: { type: String },
});

export const UserModel = model<IUser>('user', UserSchema);

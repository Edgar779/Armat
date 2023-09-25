import { model, Schema, Types } from 'mongoose';
import { INotification } from './interfaces';
import { NotificationStatus } from './notification.constants';
import { NotificationType } from '../util/constants';

const notificationSchema = new Schema(
  {
    user: { type: Types.ObjectId, required: true, ref: 'user' },
    type: { type: String, enum: NotificationType, requires: true },
    status: { type: String, enum: NotificationStatus, required: true },
    event: { type: Types.ObjectId, ref: 'event' },
    inviter: { type: Types.ObjectId, ref: 'user' },
    org: { type: Types.ObjectId, ref: 'org' },
  },
  {
    timestamps: true,
  },
);

export const NotificationModel = model<INotification>('notification', notificationSchema);

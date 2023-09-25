import { Document, Types } from 'mongoose';
import { IEvent } from '../../event';
import { IUser } from '../../user';
import { NotificationStatus } from '../notification.constants';
import { NotificationType } from '../../util/constants';
import { IOrg } from '../../org';

export interface INotification extends Document {
  user: Types.ObjectId;
  type: NotificationType;
  status: NotificationStatus;
  event?: string | IEvent;
  inviter?: string | IUser;
  org: string | IOrg;
  createdAt: number;
}

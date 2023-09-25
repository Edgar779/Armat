import { Document } from 'mongoose';
import { FileDTO } from '../../file';
import { IAddress } from '../../components/address';
import { EventAccess, EventLocation, EventStatus } from '../constants';
import { IUserList } from 'src/userList/interface';

export interface IEventAccess {
  status: EventAccess;
  listIds: IUserList['_id'];
}

export interface IEvent extends Document {
  creator: string;
  access: IEventAccess;
  rsvpCount: number;
  title: string;
  locationType: EventLocation;
  categories?: string[];
  tags?: string[];
  description: string;
  eventImage?: number;
  images: FileDTO[];
  address?: IAddress;
  createdAt: Date;
  startDate: string;
  endDate: string;
  startTime?: string;
  endTime?: string;
  allDay: boolean;
  tbd: boolean;
  timezoneOffset: number;
  status: EventStatus;
  comment?: string;
  cta: {
    donate?: string;
    contactUs?: string;
    bookNow?: string;
    emailUs?: string;
    buyTickets?: string;
    register?: string;
    moreInfo?: string;
  };
  org?: string;
  isPast: boolean;
}

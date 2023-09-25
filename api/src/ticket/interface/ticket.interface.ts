import { Document } from 'mongoose';
import { IEvent } from 'src/event';
import { IDisplayId } from 'src/globals/displayId';
import { IUser } from 'src/user';
import { TicketAccess } from '../ticket.constants';
import { IUserList } from 'src/userList/interface';

export interface ITicketAccess {
  status: TicketAccess;
  listIds: IUserList['_id'];
  members: IUser['_id'];
}

export interface ITicket extends Document {
  name: string;
  access: ITicketAccess;
  eventId: IEvent['_id'];
  capacity: number;
  soldOut: number;
  description: string;
  price: number;
  startDate: Date;
  startTime: string;
  endDate: Date;
  endTime: string;
  minOrder: number;
  maxOrder: number;
  status: string;
  org?: string;
  displayId: IDisplayId;
}

import { Document } from 'mongoose';
import { FileDTO } from '../../file';
import { IAddress } from '../../components/address';
import { IUser } from '../../user';
import { OrgStatus, OrgType } from '../org.constants';
import { IWeek } from '../../components/schedule';
import { IUserList } from 'src/userList/interface';

export interface IOrg extends Document {
  id: string;

  name: string;

  type: OrgType;

  phoneNumber?: string;

  userList: IUserList[];

  email?: string;

  address?: IAddress;

  categories?: any[];

  status: OrgStatus;

  creator: IUser['id'];

  createdAt: Date;

  updatedAt?: Date;

  comment?: string;

  mainImage?: number;

  images?: FileDTO[];

  numEdits: number;

  description?: string;

  hours?: IWeek;

  website?: string;

  avatar?: FileDTO;

  socials: {
    google?: string;
    facebook?: string;
    youtube?: string;
    yelp?: string;
    twitter?: string;
    instagram?: string;
  };
  reviews: {
    googlePlaceId?: string;
    yelpBusinessId?: string;
  };
}
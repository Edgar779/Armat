import { IAddress } from 'src/components/address';
import { FileDTO } from 'src/file';
import { ResultType } from '../algolia.constants';

export interface IResult {
  objectID: string;
  name: string;
  description?: string;
  address?: IAddress;
  type: ResultType;
  image?: FileDTO;
  _geoloc?: { lat: number; lng: number };
  isActive: boolean;
  categories?: string[];
}

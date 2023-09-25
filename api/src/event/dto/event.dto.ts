import { ApiProperty } from '@nestjs/swagger';
import { FileDTO } from '../../file';
import { CtaButtonsDTO } from '.';
import { AddressDTO } from '../../components/address';
import { EventStatus, EventLocation, EventAccess } from '../constants';
import { CreatorDTO } from './creator.dto';
import { OrgDTO } from '../../org';
import { IUserList } from 'src/userList/interface';

class AccessDTO {
  status: EventAccess;
  listIds: IUserList['_id'];
}

export class EventDTO {
  @ApiProperty()
  eventId: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty({ type: CreatorDTO })
  creator: CreatorDTO;
  @ApiProperty()
  access: AccessDTO;
  @ApiProperty()
  rsvpCount: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty({ required: false })
  tags?: string[];
  @ApiProperty({ required: false })
  categories?: string[];
  @ApiProperty()
  startDate: string;
  @ApiProperty({ required: true })
  startTime?: string;
  @ApiProperty({ required: true })
  endDate?: string;
  @ApiProperty({ required: true })
  endTime?: string;
  @ApiProperty()
  timezoneOffset: number;
  @ApiProperty({ required: false })
  allDay?: boolean;
  @ApiProperty({ required: false })
  tbd?: boolean;
  @ApiProperty({ required: false, type: AddressDTO })
  address?: AddressDTO;
  @ApiProperty()
  locationType: EventLocation;
  @ApiProperty()
  status: EventStatus;
  @ApiProperty({ required: false })
  eventImage?: number;
  @ApiProperty({ type: [FileDTO], required: false })
  images?: FileDTO[];
  @ApiProperty({ required: false })
  comment?: string;
  @ApiProperty({ type: () => CtaButtonsDTO })
  cta?: CtaButtonsDTO;
  @ApiProperty({ required: false })
  org?: OrgDTO;
  @ApiProperty()
  isPast: boolean;
}

export class EventListDTO {
  @ApiProperty({ type: [EventDTO] })
  events: EventDTO[];
  count: number;
}

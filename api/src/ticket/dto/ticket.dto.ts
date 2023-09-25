import { ApiProperty } from '@nestjs/swagger';
import { EventDTO } from 'src/event';
import { IUser } from 'src/user';
import { TicketAccess, TicketStatus } from '../ticket.constants';
import { IUserList } from 'src/userList/interface';

class AccessDTO {
  status: TicketAccess;
  members: IUser['_id'];
  listIds: IUserList['_id'];
}

export class TicketDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  eventId: string;
  @ApiProperty()
  capacity: number;
  @ApiProperty()
  soldOut: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  startDate: Date;
  @ApiProperty()
  startTime: string;
  @ApiProperty()
  endDate: Date;
  @ApiProperty()
  endTime: string;
  @ApiProperty()
  minOrder: number;
  @ApiProperty()
  maxOrder: number;
  @ApiProperty({ enum: AccessDTO })
  access: AccessDTO;
  @ApiProperty({ enum: TicketStatus })
  status: string;
  @ApiProperty()
  org: string;
  @ApiProperty()
  displayId: string;
}

export class TicketListDTO {
  @ApiProperty({ type: [TicketDTO] })
  tickets: TicketDTO[];
  count: number;
}

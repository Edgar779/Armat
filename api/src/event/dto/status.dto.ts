import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { SessionDTO } from '../../auth';
import { EventStatus } from '../constants';

export class EventStatusDTO {
  @ApiProperty({ enum: EventStatus })
  @IsEnum(EventStatus)
  status: EventStatus;
  @ApiProperty()
  comment?: string;

  /** Set by the system */
  user?: SessionDTO;
}

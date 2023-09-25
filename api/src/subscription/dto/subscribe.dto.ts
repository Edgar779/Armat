import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { SessionDTO } from '../../auth';

export class SubscriptionDTO {
  @ApiProperty()
  @IsNotEmpty()
  eventId: string;

  /** Set by the system */
  user?: SessionDTO;
}

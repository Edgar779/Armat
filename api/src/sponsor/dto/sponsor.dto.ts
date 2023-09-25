import { ApiProperty } from '@nestjs/swagger';
import { SponsorStatus } from '../sponsor.constants';

export class SponsorDTO {
  @ApiProperty()
  eventId: string;
  @ApiProperty({ required: false })
  eventTitle?: string;
  @ApiProperty()
  orgId: string;
  @ApiProperty({ required: false })
  orgName?: string;
  @ApiProperty()
  requesterId: string;
  @ApiProperty({ required: false })
  requesterName?: string;
  @ApiProperty()
  note?: string;
  @ApiProperty({ enum: SponsorStatus })
  status: SponsorStatus;
  @ApiProperty({ required: false })
  createdAt?: Date;
}

import { ApiProperty } from '@nestjs/swagger';
import { MemberDTO } from 'src/orgUser/dto';
import { RsvpStatus } from '../rsvp.constants';

export class RsvpDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  eventId: string;
  @ApiProperty()
  memberId: MemberDTO;
  @ApiProperty({ enum: RsvpStatus })
  status: RsvpStatus;
}

export class RsvpListDTO {
  @ApiProperty({ type: [RsvpDTO] })
  rsvp: RsvpDTO[];
  count: number;
}

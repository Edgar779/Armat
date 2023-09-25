import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsMongoId } from 'class-validator';
import { DTO } from 'src/util';
import { RsvpStatus } from '../rsvp.constants';

export class CreateRsvpDTO extends DTO {
  @ApiProperty()
  @IsMongoId()
  eventId: string;
  @ApiProperty({ enum: RsvpStatus })
  @IsEnum(RsvpStatus)
  status: RsvpStatus;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { DTO } from 'src/util';
import { RsvpStatus } from '../rsvp.constants';

export class EditRsvpDTO extends DTO {
  @ApiProperty({ enum: RsvpStatus })
  @IsEnum(RsvpStatus)
  status: RsvpStatus;
}

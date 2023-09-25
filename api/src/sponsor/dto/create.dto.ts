import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';
import { DTO } from 'src/util';

export class CreateSponsorDTO extends DTO {
  @ApiProperty()
  @IsMongoId()
  org: string;

  @ApiProperty({ required: false })
  note?: string;

  /** Set by the system */
  event?: string;
  requester?: string;
}

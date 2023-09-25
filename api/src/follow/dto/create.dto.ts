import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';
import { SessionDTO } from '../../auth';

export class CreateFollowDTO {
  @ApiProperty()
  @IsMongoId()
  org: string;

  /** Set by the system */
  user: SessionDTO;
}

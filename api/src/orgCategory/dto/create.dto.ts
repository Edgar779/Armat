import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsOptional, IsString } from 'class-validator';
import { SessionDTO } from '../../auth';

export class CreateOrgCatDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsMongoId()
  @IsOptional()
  parent?: string;

  /** Set by the system */
  user?: SessionDTO;
}

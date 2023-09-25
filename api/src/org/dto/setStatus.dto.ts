import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { SessionDTO } from 'src/auth/dto';
import { OrgStatus } from '../org.constants';

export class SetStatusDTO {
  @ApiProperty({ enum: OrgStatus })
  @IsEnum(OrgStatus)
  status: OrgStatus;

  @ApiProperty()
  @IsOptional()
  comment?: string;

  /** Set by the system */
  user?: SessionDTO;
}

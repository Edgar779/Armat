import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsMongoId, IsOptional } from 'class-validator';
import { SessionDTO } from 'src/auth';
import { DTO } from 'src/util';
import { SponsorStatus } from '../sponsor.constants';

export class EditSponsorDTO extends DTO {
  @ApiProperty({ enum: SponsorStatus, required: false })
  @IsEnum(SponsorStatus)
  @IsOptional()
  status?: SponsorStatus;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsMongoId()
  orgId?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  note?: string;

  /** Set by the system */
  user?: SessionDTO;
}

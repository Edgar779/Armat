import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsMongoId } from 'class-validator';
import { Types } from 'mongoose';
import { OrgStatus, OrgType } from '../org.constants';

export class QueryDTO {
  @ApiProperty({ enum: OrgStatus, required: false })
  @IsOptional()
  @IsEnum(OrgStatus)
  status?: OrgStatus;
  @ApiProperty({ enum: OrgType, required: false })
  @IsOptional()
  @IsEnum(OrgType)
  type?: OrgType;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsMongoId({ each: true })
  categories?: Types.ObjectId[];
}

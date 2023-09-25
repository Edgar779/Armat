import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsMongoId, IsOptional, IsString, IsUrl } from 'class-validator';
import { SessionDTO } from 'src/auth';
import { DTO } from 'src/util';
import { WeekDTO } from '../../components/schedule';
import { FileDTO } from '../../file';
import { OrgType } from '../org.constants';

export class CreateOrgDTO extends DTO {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty({ enum: OrgType })
  @IsEnum(OrgType)
  type: OrgType;
  @ApiProperty({ required: false })
  // @IsPhoneNumber()
  @IsOptional()
  phoneNumber?: string;
  @ApiProperty({ required: false })
  @IsEmail()
  @IsOptional()
  email?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;
  @ApiProperty({ required: false })
  @IsUrl()
  @IsOptional()
  website?: string;
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  address?: string;
  @ApiProperty({ required: false })
  @IsMongoId({ each: true })
  @IsOptional()
  categories?: string[];

  @ApiProperty({ required: false })
  mainImage?: number;

  @ApiProperty({ required: false })
  images?: FileDTO[];

  @ApiProperty({ type: WeekDTO, required: false })
  hours?: WeekDTO;

  @ApiProperty({ type: FileDTO, required: false })
  // @IsUrl()
  @IsOptional()
  avatar?: FileDTO;

  /** set by the system */
  user: SessionDTO;
}

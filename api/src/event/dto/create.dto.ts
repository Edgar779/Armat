import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsDateString, IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { FileDTO } from '../../file';
import { SessionDTO } from '../../auth';
import { EventAccess, EventLocation } from '../constants';
import { CtaButtonsDTO } from '.';
import { DTO } from '../../util';
import { CreateSponsorDTO } from '../../sponsor/dto';

export class CreateEventDTO extends DTO {
  @ApiProperty()
  @IsNotEmpty()
  title: string;
  @ApiProperty({ enum: EventAccess })
  @IsNotEmpty()
  @IsEnum(EventAccess)
  accessStatus: EventAccess;
  @ApiProperty()
  @ArrayMinSize(1)
  @IsArray()
  @IsMongoId({ each: true })
  @IsOptional()
  listIds: string[];
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  address?: string;
  @ApiProperty({ enum: EventLocation })
  @IsEnum(EventLocation)
  locationType: EventLocation;
  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  categories?: string[];
  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  tags?: string[];
  @ApiProperty()
  @IsNotEmpty()
  description: string;

  /** Date specific fields */
  @ApiProperty()
  @IsString()
  @IsDateString()
  startDate: string;

  @ApiProperty()
  @IsString()
  @IsDateString()
  endDate: string;

  @ApiProperty({ required: false })
  @IsOptional()
  startTime?: string;

  @ApiProperty({ required: false })
  @ApiProperty()
  @IsOptional()
  endTime?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  allDay?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  tbd?: boolean;

  @ApiProperty()
  @IsNumber()
  @Type(() => Number)
  timezoneOffset: number;

  /** Image specific fields */
  @ApiProperty({ required: false })
  @IsOptional()
  eventImage?: number;
  @ApiProperty({ required: false })
  @ValidateNested({ each: true })
  @Type(() => FileDTO)
  @IsOptional()
  images?: FileDTO[];

  @ApiProperty({ type: () => CtaButtonsDTO })
  @IsOptional()
  cta?: CtaButtonsDTO;

  //Organizations creating an event
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsMongoId()
  org: string;

  @ApiProperty({ type: [CreateSponsorDTO], required: false })
  @IsOptional()
  sponsors?: CreateSponsorDTO[];

  /** set by the system */
  user: SessionDTO;
}

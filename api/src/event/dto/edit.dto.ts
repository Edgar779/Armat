import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsMongoId, IsOptional } from 'class-validator';
import { FileDTO } from '../../file';
import { SessionDTO } from '../../auth';
import { EventLocation, EventStatus } from '../constants';
import { CtaButtonsDTO } from './cta.dto';
import { CreateSponsorDTO } from '../../sponsor';

export class EditEventDTO {
  //following are supplied in the request
  @ApiProperty({ required: false })
  @IsOptional()
  title?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  address?: string;
  @ApiProperty({ enum: EventLocation, required: false })
  @IsEnum(EventLocation)
  @IsOptional()
  locationType?: EventLocation;
  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  categories?: string[];
  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  tags?: string[];
  @ApiProperty({ required: false })
  @IsOptional()
  description?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  // @Type(() => Number)
  startDate?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  // @Type(() => Number)
  endDate?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  // @Type(() => Number)
  startTime?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  // @Type(() => Number)
  endTime?: string;
  @ApiProperty()
  @Type(() => Number)
  @IsOptional()
  timezoneOffset?: number;
  @ApiProperty({ required: false })
  @IsOptional()
  allDay?: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  tbd?: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  eventImage?: number;
  @ApiProperty({ required: false })
  @IsOptional()
  imagesToAdd?: FileDTO[];
  @ApiProperty({ type: [FileDTO], required: false })
  @IsOptional()
  imagesToRemove?: FileDTO[];
  @ApiProperty()
  @IsOptional()
  cta?: CtaButtonsDTO;
  @ApiProperty({ type: [CreateSponsorDTO], required: false })
  @IsOptional()
  addSponsors?: CreateSponsorDTO[];
  @ApiProperty()
  @IsOptional()
  @IsMongoId({ each: true })
  removeSponsors?: string[];
  /** set by system */
  user: SessionDTO;
}

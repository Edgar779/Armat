import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsMongoId, IsOptional } from 'class-validator';
import { PaginationDTO } from 'src/util';
import { EventLocation, EventSorting, EventStatus } from '../constants';

export class GetEventQuery extends PaginationDTO {
  @ApiProperty({ required: false })
  @IsEnum(EventStatus)
  @IsOptional()
  status: EventStatus;
  @ApiProperty()
  @IsEnum(EventLocation)
  @IsOptional()
  locationType: EventLocation;
}

export class EventQuery extends PaginationDTO {
  @ApiProperty({ enum: EventSorting, required: false })
  @IsOptional()
  @IsEnum(EventSorting)
  sorting: EventSorting;
}

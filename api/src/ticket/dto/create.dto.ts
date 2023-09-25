import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { IEvent } from 'src/event';
import { EventAccess } from 'src/event/constants';
import { DTO } from 'src/util';
import { TicketStatus } from '../ticket.constants';

export class CreateTicketDTO extends DTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ enum: TicketStatus })
  @IsEnum(TicketStatus)
  status: string;
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
  @ApiProperty({ type: String })
  @IsMongoId()
  eventId: IEvent['_id'];
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  capacity: number;
  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @ApiProperty()
  @IsDateString()
  @IsOptional()
  startDate: Date;
  @ApiProperty()
  @IsString()
  @IsOptional()
  startTime: string;
  @ApiProperty()
  @IsDateString()
  @IsOptional()
  endDate: Date;
  @ApiProperty()
  @IsString()
  @IsOptional()
  endTime: string;
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @IsPositive()
  minOrder: number;
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @IsPositive()
  maxOrder: number;
}

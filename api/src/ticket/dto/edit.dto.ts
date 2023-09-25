import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { DTO } from 'src/util';

export class EditTicketDTO extends DTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  capacity: number;
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  price: number;
  @ApiProperty()
  @IsDateString()
  @IsOptional()
  startDate: Date;
  @ApiProperty()
  @IsDateString()
  @IsOptional()
  endDate: Date;
  @ApiProperty()
  @IsString()
  @IsOptional()
  startTime: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  endTime: string;
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  minOrder: number;
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  maxOrder: number;
  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class HourDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  from: number;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  to: number;
  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  available: boolean;
}

export class WeekDTO {
  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [HourDTO], required: false })
  monday?: HourDTO[];
  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [HourDTO], required: false })
  tuesday?: HourDTO[];
  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [HourDTO], required: false })
  wednesday?: HourDTO[];
  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [HourDTO], required: false })
  thursday?: HourDTO[];
  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [HourDTO], required: false })
  friday?: HourDTO[];
  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [HourDTO], required: false })
  saturday?: HourDTO[];
  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [HourDTO], required: false })
  sunday?: HourDTO[];
}

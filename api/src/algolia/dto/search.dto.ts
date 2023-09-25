import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { PaginationDTO } from 'src/util';
import { ResultType } from '../algolia.constants';

export class SearchDTO extends PaginationDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  searchField: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  lat: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  lng: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  zoom: number;

  @ApiProperty({ enum: ResultType, required: false })
  type: ResultType;
}

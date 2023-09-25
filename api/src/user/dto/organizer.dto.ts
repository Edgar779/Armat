import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class OrganizerDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  contactName?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  contactPhone?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  contactEmail?: string;
}

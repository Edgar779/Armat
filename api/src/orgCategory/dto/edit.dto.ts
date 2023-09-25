import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { DTO } from 'src/util';

export class EditOrgCatDTO extends DTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;
}

import { DTO } from 'src/util';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsMongoId, ValidateNested } from 'class-validator';

export class DeleteOrgUserDTO extends DTO {
  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  members: string[];
  @ApiProperty()
  @IsMongoId()
  org: string;
}

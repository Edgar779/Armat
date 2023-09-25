import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { DTO } from 'src/util';

export class CreateTagDTO extends DTO {
  @ApiProperty()
  @IsMongoId()
  org: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  color: string;
}

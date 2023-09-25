import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { DTO } from 'src/util';

export class EditListDTO extends DTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsMongoId } from 'class-validator';
import { DTO } from 'src/util';

export class DeleteUserListDTO extends DTO {
  @ApiProperty()
  @ArrayMinSize(1)
  @IsArray()
  @IsMongoId({ each: true })
  members: string[];
}

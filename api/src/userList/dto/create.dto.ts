import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { DTO } from 'src/util';

export class CreateUserListDTO extends DTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  listName: string;
  @ApiProperty()
  @ArrayMinSize(1)
  @IsArray()
  @IsMongoId({ each: true })
  @IsOptional()
  members?: string[];
  @ApiProperty()
  @ArrayMinSize(1)
  @IsArray()
  @IsOptional()
  tags?: string[];
}

export class AssignUserListDTO extends DTO {
  @ApiProperty()
  @ArrayMinSize(1)
  @IsArray()
  @IsMongoId({ each: true })
  @IsOptional()
  members: string[];
  @ApiProperty()
  @ArrayMinSize(1)
  @IsArray()
  @IsOptional()
  tags: string[];
}

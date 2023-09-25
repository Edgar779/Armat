import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { DTO } from 'src/util';
import { OrgUser } from '../orgUser.constants';

export class CreateOrgUserDTO extends DTO {
  @ApiProperty()
  @IsMongoId()
  @IsOptional()
  member: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsMongoId()
  org: string;
  @ApiProperty({ enum: OrgUser })
  @IsEnum(OrgUser)
  userType: OrgUser;
}

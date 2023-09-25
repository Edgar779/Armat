import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsEnum, IsOptional } from 'class-validator';
import { OrgUser } from 'src/orgUser/orgUser.constants';
import { PaginationDTO } from 'src/util';

export class GetUserListQuery extends PaginationDTO {
  @ApiProperty({ required: false })
  @ArrayMinSize(1)
  @IsArray()
  @IsOptional()
  tags: string[];
  @ApiProperty()
  @IsEnum(OrgUser)
  @IsOptional()
  userType: OrgUser;
}

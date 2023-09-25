import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsEnum, IsMongoId, IsOptional } from 'class-validator';
import { PaginationDTO } from 'src/util';
import { OrgUser } from '../orgUser.constants';

export class GetUserOrgQuery extends PaginationDTO {
  @ApiProperty({ required: false })
  @ArrayMinSize(1)
  @IsArray()
  @IsMongoId({ each: true })
  @IsOptional()
  members: string[];
  @ApiProperty({ required: false })
  @ArrayMinSize(1)
  @IsArray()
  @IsOptional()
  tags: string[];
  @ApiProperty({ enum: OrgUser, required: false })
  @IsEnum(OrgUser)
  @IsOptional()
  userType: OrgUser;
}

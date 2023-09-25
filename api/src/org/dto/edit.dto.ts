import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsUrl } from 'class-validator';
import { FileDTO } from '../../file';
import { UserDTO } from '../../user';
import { SessionDTO } from '../../auth';
import { OrgEditAction, OrgType } from '../org.constants';
import { WeekDTO } from '../../components/schedule';
import { DTO } from 'src/util';

export class EditOrgDTO extends DTO {
  @ApiProperty({ required: false })
  @IsOptional()
  // @IsString()
  name?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  // @IsString()
  type?: OrgType;
  @ApiProperty({ required: false })
  // @IsPhoneNumber()
  @IsOptional()
  phoneNumber?: string;
  @ApiProperty({ required: false })
  // @IsEmail()
  @IsOptional()
  email?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;
  @ApiProperty({ required: false })
  // @IsString()
  @IsOptional()
  address?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  categories?: string[];
  @ApiProperty({ required: false })
  @IsOptional()
  mainImage?: number;
  @ApiProperty({ required: false })
  @IsOptional()
  imagesToAdd?: FileDTO[];
  @ApiProperty({ type: [FileDTO], required: false })
  @IsOptional()
  imagesToRemove?: FileDTO[];
  @ApiProperty({ type: WeekDTO, required: false })
  @IsOptional()
  hours?: WeekDTO;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  website?: string;

  // Org Avatar
  @ApiProperty({ type: FileDTO, required: false })
  @IsOptional()
  changeAvatar?: FileDTO;
  @ApiProperty()
  @IsOptional()
  removeAvatar?: boolean;

  /** set by the system */
  user?: SessionDTO;
}

/** Edit Response Object */
export class EditRO extends EditOrgDTO {
  @ApiProperty({ required: false })
  id: string;
  @ApiProperty()
  editor: UserDTO;
  @ApiProperty()
  createdAt: Date;
}

export class EditQuery {
  @ApiProperty({ enum: OrgEditAction })
  @IsEnum(OrgEditAction)
  action: OrgEditAction;
}

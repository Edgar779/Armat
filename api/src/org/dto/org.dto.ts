import { ApiProperty } from '@nestjs/swagger';
import { AddressDTO } from 'src/components/address';
import { OrgCategoryDTO } from 'src/orgCategory';
import { WeekDTO } from '../../components/schedule';
import { FileDTO } from '../../file';
import { UserDTO } from '../../user';
import { OrgStatus, OrgType } from '../org.constants';
import { UserListDTO } from 'src/userList/dto';

export class OrgDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  userList: UserListDTO[];
  @ApiProperty()
  type: OrgType;
  @ApiProperty({ required: false })
  phoneNumber?: string;
  @ApiProperty({ required: false })
  email?: string;
  @ApiProperty({ required: false })
  description?: string;
  @ApiProperty({ required: false })
  address?: AddressDTO;
  @ApiProperty({ required: false })
  categories?: OrgCategoryDTO[] | string[];
  @ApiProperty()
  status: OrgStatus;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty({ required: false })
  updatedAt?: Date;
  @ApiProperty()
  creator: UserDTO | string;
  @ApiProperty({ required: false })
  manager?: UserDTO | string;
  @ApiProperty({ required: false })
  mainImage?: number;
  @ApiProperty({ type: FileDTO, required: false })
  images?: FileDTO[];
  @ApiProperty()
  numEdits: number;
  @ApiProperty({ required: false })
  comment?: string;
  @ApiProperty({ required: false })
  hours?: WeekDTO;
  @ApiProperty({ required: false })
  website?: string;
  @ApiProperty({ required: false })
  avatar?: FileDTO;
}

import { ApiProperty } from '@nestjs/swagger';
import { OrgUser } from '../orgUser.constants';
import { AuthDTO } from 'src/auth';
import { TagDTO } from 'src/tag/dto';

export class MemberDTO {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
}

export class OrgUserDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  member: MemberDTO;
  @ApiProperty()
  auth: AuthDTO;
  @ApiProperty()
  org: string;
  @ApiProperty()
  userType: OrgUser;
  @ApiProperty()
  tags: TagDTO[];
}

// export class TagDTO {
//   @ApiProperty()
//   id?: string;
//   @ApiProperty()
//   name: string;
//   @ApiProperty()
//   color: string;
// }

export class OrgUserListDTO {
  @ApiProperty({ type: [OrgUserDTO] })
  orgUsers: OrgUserDTO[];
  count: number;
}

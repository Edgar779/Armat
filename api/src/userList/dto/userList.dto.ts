import { ApiProperty } from '@nestjs/swagger';
import { IOrg } from 'src/org';
import { OrgUserDTO } from 'src/orgUser/dto';

export class UserListDTO {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  org: IOrg['_id'];
  @ApiProperty()
  members?: OrgUserDTO[];
}

export class UserListCountDTO {
  list: UserListDTO[] | UserListDTO;
  count: number;
}

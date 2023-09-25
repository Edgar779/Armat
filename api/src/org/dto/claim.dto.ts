import { ApiProperty } from '@nestjs/swagger';

export class ClaimOrgDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
}

export class ClaimeeDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  avatar: string;
}

export class ClaimDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  org: ClaimOrgDTO;
  @ApiProperty()
  user: ClaimeeDTO;
  @ApiProperty({ type: Date })
  createdAt: Date;
}

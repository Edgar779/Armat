import { ApiProperty } from '@nestjs/swagger';

export class FollowDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  userName: string;
  @ApiProperty()
  orgId: string;
  @ApiProperty()
  orgName: string;
}

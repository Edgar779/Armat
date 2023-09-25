import { ApiProperty } from '@nestjs/swagger';
import { AuthStatus, Role } from '../constants';

export class AuthDTO {
  @ApiProperty({ enum: Role })
  role: string;
  @ApiProperty()
  status: AuthStatus;
  @ApiProperty({ required: false })
  inviterName?: string;
  @ApiProperty({ required: false })
  inviterId?: string;
}

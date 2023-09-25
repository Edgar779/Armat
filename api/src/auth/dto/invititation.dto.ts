import { ApiProperty } from '@nestjs/swagger';

export class InvitationDTO {
  @ApiProperty()
  email: string;
  @ApiProperty({ description: 'The message to show the user' })
  message?: string;
  authId?: string;
}

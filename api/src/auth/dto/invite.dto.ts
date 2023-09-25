import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { SessionDTO } from './session.dto';

/** Sent to the user for invitation success */
export class InviteDTO {
  @ApiProperty()
  @IsEmail()
  email: string;

  /** System Set Values */
  session: SessionDTO;
}

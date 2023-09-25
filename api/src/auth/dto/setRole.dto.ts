import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum } from 'class-validator';
import { Role, SessionDTO } from '..';

export class SetRoleDTO {
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty({ enum: Role })
  @IsEnum(Role)
  role: Role;
  /** Set by the system */
  user?: SessionDTO;
}

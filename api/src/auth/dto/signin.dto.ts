import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional } from 'class-validator';

export class SigninDTO {
  @ApiProperty({ required: false })
  @IsEmail()
  @IsOptional()
  email?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  phoneNumber?: string;
  @ApiProperty({ type: String })
  password: string;
}

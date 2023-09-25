import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SubscribeDTO {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;
}

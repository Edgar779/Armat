import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';
import { FileDTO } from '../../file';

export class CreateUserDTO {
  @ApiProperty({
    type: String,
    description: 'Lenght must be min 3 characters long',
  })
  @IsNotEmpty()
  @MinLength(3)
  fullName: string;
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty()
  // @IsPhoneNumber()
  phoneNumber?: string;
  @ApiProperty({
    type: String,
    description: 'must be at least 8 characters long, contain 1 uppercase 1 lowercase',
  })
  @MinLength(8)
  @MaxLength(30)
  password: string;
  @ApiProperty({ type: FileDTO, required: false })
  // @IsUrl()
  // @IsOptional()
  avatar?: FileDTO;
}

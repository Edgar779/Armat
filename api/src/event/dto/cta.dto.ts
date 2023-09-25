import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsPhoneNumber, IsUrl } from 'class-validator';

export class CtaButtonsDTO {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  register?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  donate?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  buyTickets?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  moreInfo?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  bookNow?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsPhoneNumber()
  contactUs?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  emailUs?: string;
}

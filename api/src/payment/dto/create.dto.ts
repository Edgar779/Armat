import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { SessionDTO } from 'src/auth';
import { DTO } from 'src/util';

export class CreatePaymentDTO extends DTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  orderId: string;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  amount: number;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  pmtMethod: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  email?: string;
  @ApiProperty()
  @IsOptional()
  user?: SessionDTO;
}
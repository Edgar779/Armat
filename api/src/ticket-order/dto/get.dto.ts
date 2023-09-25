import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';
import { TikcetOrderStatus } from '../ticketOrder.constants';

export class GetTicketOrderQuery {
  @ApiProperty({ required: false })
  @IsDateString()
  @IsOptional()
  startDate: Date;
  @ApiProperty({ required: false })
  @IsDateString()
  @IsOptional()
  endDate: Date;
  @ApiProperty()
  @IsEnum(TikcetOrderStatus)
  @IsOptional()
  status: TikcetOrderStatus
  @ApiProperty({required: false})
  @IsString()
  @IsOptional()
  orderId: string;
}

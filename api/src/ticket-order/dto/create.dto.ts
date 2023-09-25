import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { DTO } from 'src/util';

export class TicketDetailDTO {
  @ApiProperty()
  @IsMongoId()
  ticketId: string;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  count: number;
}

export class CreateTicketOrderDTO extends DTO {
  @ApiProperty({ type: [TicketDetailDTO] })
  @ValidateNested({ each: true })
  @Type(() => TicketDetailDTO)
  tickets: TicketDetailDTO[];
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  paymentMethod?: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  email: string;
  @ApiProperty()
  @IsMongoId()
  eventId: string
}

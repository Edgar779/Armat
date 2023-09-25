import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, isMongoId, IsMongoId, IsOptional } from 'class-validator';
import { PaginationDTO } from 'src/util';
import { TicketAccess, TicketStatus } from '../ticket.constants';

export class GetTicketQuery extends PaginationDTO {
  @ApiProperty({ required: false })
  @IsEnum(TicketStatus)
  @IsOptional()
  status: TicketStatus;
  @ApiProperty({ required: false })
  @IsMongoId()
  @IsOptional()
  eventId: string;
  @ApiProperty({ required: false })
  @IsEnum(TicketAccess)
  @IsOptional()
  access: TicketAccess;
  @ApiProperty()
  @IsMongoId()
  @IsOptional()
  org: string;
}

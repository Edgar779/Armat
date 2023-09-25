import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty } from 'class-validator';
import { PaginationDTO } from 'src/util';

export class GetRsvpQuery extends PaginationDTO {
  @ApiProperty()
  @IsMongoId()
  @IsNotEmpty()
  eventId: string;
}

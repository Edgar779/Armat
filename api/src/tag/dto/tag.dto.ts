import { ApiProperty } from '@nestjs/swagger';

export class TagDTO {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  org: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  color: string;
}

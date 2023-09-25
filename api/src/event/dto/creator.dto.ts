import { ApiProperty } from '@nestjs/swagger';
import { FileDTO } from 'src/file';

export class CreatorDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  type: string;
  @ApiProperty({ type: FileDTO, required: false })
  avatar?: FileDTO;
}

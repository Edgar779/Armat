import { ApiProperty } from '@nestjs/swagger';
import { SessionDTO } from '../../auth';

export class CategoryDTO {
  @ApiProperty()
  categories: string[];

  /** Set by the system */
  user: SessionDTO;
}

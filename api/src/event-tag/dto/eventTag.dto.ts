import { ApiProperty } from '@nestjs/swagger';
import { SessionDTO } from '../../auth';

export class EventTagDTO {
  @ApiProperty()
  tags: string[];

  /** Set by the system */
  user: SessionDTO;
}

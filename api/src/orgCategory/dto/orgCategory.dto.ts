import { ApiProperty } from '@nestjs/swagger';
import { DTO } from 'src/util';

export class OrgCategoryDTO extends DTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  text: string;

  @ApiProperty()
  parent?: string;

  @ApiProperty()
  nonProfitUsedCount: number;
  @ApiProperty()
  businessUsedCount: number;

  ///Used by the system for counting usage
  businessSet?: Set<string>;
  nonProfitSet?: Set<string>;
  businessUsers?: string[];
  nonProfitUsers?: string[];

  /** Set by the system */
  @ApiProperty()
  items?: OrgCategoryDTO[];
}

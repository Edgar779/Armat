import { ApiProperty } from '@nestjs/swagger';
import { AddressDTO } from 'src/components/address';
import { FileDTO } from 'src/file';
import { ResultType } from '../algolia.constants';

export class ResultDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty({ required: false })
  description?: string;
  @ApiProperty({ type: AddressDTO, required: false })
  address?: AddressDTO;
  @ApiProperty({ enum: ResultType })
  type: ResultType;
  @ApiProperty({ type: FileDTO, required: false })
  image?: FileDTO;
  @ApiProperty({ required: false })
  categories?: string[];
}

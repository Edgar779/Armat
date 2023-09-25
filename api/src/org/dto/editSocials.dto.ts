import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsUrl } from 'class-validator';
import { SessionDTO } from 'src/auth';

export class EditSocialsDTO {
  @ApiProperty({ required: false })
  @IsOptional()
  googlePlaceId?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  yelpBusinessId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  google?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  yelp?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  instagram?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  facebook?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  twitter?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  youtube?: string;

  /** set by the system */
  user?: SessionDTO;
}

import { ApiProperty } from '@nestjs/swagger';

class ReviewDTO {
  @ApiProperty({ required: false })
  authorName?: string;
  @ApiProperty({ required: false })
  rating?: number;
  @ApiProperty({ required: false })
  text?: string;
}

export class ReviewsDTO {
  @ApiProperty({ required: false })
  entityId?: string;
  @ApiProperty({ required: false })
  rating?: number;
  @ApiProperty({ required: false })
  numReviews?: number;
  @ApiProperty({ required: false, type: [ReviewDTO] })
  reviews?: ReviewDTO[];
}

export class SocialsDTO {
  @ApiProperty({ type: ReviewsDTO })
  googleReviews?: ReviewsDTO;
  @ApiProperty({ type: ReviewsDTO })
  yelpReviews?: ReviewsDTO;
  @ApiProperty({ required: false })
  googleLink?: string;
  @ApiProperty({ required: false })
  facebookLink?: string;
  @ApiProperty({ required: false })
  yelpLink?: string;
  @ApiProperty({ required: false })
  instagramLink?: string;
  @ApiProperty({ required: false })
  twitterLink?: string;
  @ApiProperty({ required: false })
  youtubeLink?: string;
}

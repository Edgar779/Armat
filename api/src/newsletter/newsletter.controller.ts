import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/util';
import { SubscribeDTO } from './dto';
import { NewsletterService } from './newsletter.service';

@Controller('newsletter')
@ApiTags('Newsletter')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  /** Subscribe to newsletter. Stores the subscripton to db */
  @Post('subscribe')
  @Public()
  @ApiBody({ type: SubscribeDTO })
  async subscribe(@Body() subscribeDTO: SubscribeDTO) {
    await this.newsletterService.subscribeToNewsletter(subscribeDTO);
    return;
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ContactDTO } from './dto';
import { MailerService } from './mailer.service';
import { Public } from '../../util';

@Controller('mailer')
@ApiTags('Mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}
  @Get()
  async sendTestMail() {
    const res = await this.mailerService.sendTestMail();
    return res;
  }

  @Post('contactForm')
  @Public()
  @ApiBody({ type: ContactDTO })
  async contactEmail(@Body() contactDTO: ContactDTO) {
    const res = await this.mailerService.sendContactMail(contactDTO);
    return res;
  }
}

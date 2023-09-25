import { Controller, Get } from '@nestjs/common';
import { Public } from '../util';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('dropDatabase')
  @Public()
  async dropDatabase() {
    await this.appService.dropDatabase();
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { Public } from 'src/util';
import { WeekDTO } from './schedule.dto';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  @Public()
  @ApiBody({ type: WeekDTO })
  async createSchedule(@Body() dto: WeekDTO) {
    const schedule = await this.scheduleService.createSchedule(dto);
    return schedule;
  }
}

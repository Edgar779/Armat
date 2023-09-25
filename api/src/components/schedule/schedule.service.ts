import { Injectable } from '@nestjs/common';
import { HourDTO, WeekDTO } from './schedule.dto';
import { IWeek, IHour } from './schedule.interface';

@Injectable()
export class ScheduleService {
  /** creates workweek to the business */
  createSchedule(weekDTO?: WeekDTO): IWeek {
    if (!weekDTO) return undefined;
    const week: IWeek = {};
    for (const [day] of Object.entries(weekDTO)) {
      week[day] = this.createHours(weekDTO[day]);
    }
    return week;
  }

  // /** Create the hours */
  private createHours(hoursArray?: HourDTO[]): IHour[] {
    const hours: IHour[] = [];
    if (!hoursArray || hoursArray.length < 1) return hours;
    for (let i = 0; i < hoursArray.length; i++) {
      hours.push({
        available: hoursArray[i].available,
        from: hoursArray[i].from,
        to: hoursArray[i].to,
      });
    }
    return hours;
  }
}

import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { EventService } from '../event/event.service';
import { PastEventService } from '../event/pastEvent.service';
import { IEvent } from 'src/event';
import { AlgoliaService } from 'src/algolia/algolia.service';

@Injectable()
export class EventWorker {
  constructor(
    private readonly eventService: EventService,
    private readonly pastEventService: PastEventService,
    private readonly algoliaService: AlgoliaService,
  ) {}

  // @Cron('* * * * * *')
  // async sayHi() {
  //   console.log('Hello');
  // }

  @Cron('0 0 * * * *')
  async processPastEvens() {
    try {
      //find events whose date is past
      const events = await this.eventService.findPastEvents();
      if (events.length < 1) return;
      //For each event, place it in the past events db
      const pastEventIds: string[] = [];
      const pastEvents: IEvent[] = [];
      for (let i = 0; i < events.length; i++) {
        events[i].isPast = true;
        pastEvents.push(events[i]);
        pastEventIds.push(events[i]._id);
      }
      await Promise.all([
        this.pastEventService.create(pastEvents),
        this.eventService.removeEvents(pastEventIds),
        this.algoliaService.deleteMany(pastEventIds),
      ]);
    } catch (e) {
      console.log(e);
    }
  }
}

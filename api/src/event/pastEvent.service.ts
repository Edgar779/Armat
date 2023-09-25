import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PastEventModel } from './event.model';
import { IEvent } from './interfaces';
import { Model } from 'mongoose';
import { EventSanitizer } from './event.sanitizer';
import { EventDTO } from './dto';

@Injectable()
export class PastEventService {
  constructor(private readonly sanitizer: EventSanitizer) {
    this.model = PastEventModel;
  }
  private model: Model<IEvent>;

  /**  */
  create = async (pastEvents: IEvent[]) => {
    const events = await this.model.insertMany(pastEvents);
    return events;
  };

  /** Get past events */
  getAll = async (): Promise<EventDTO[]> => {
    const events = await this.model.find({});
    const sanitizedEvents = this.sanitizer.sanitizeMany(events);
    return sanitizedEvents;
  };

  /** Get past event */
  get = async (id: string): Promise<EventDTO> => {
    const event = await this.model.findById(id).populate('creator').populate('org').populate('access.listIds');
    this.checkEvent(event);
    return this.sanitizer.sanitize(event);
  };

  getRaw = async (id: string): Promise<IEvent> => {
    const event = await this.model.findById(id);
    return event;
  };

  getMany = async (ids: string[]): Promise<EventDTO[]> => {
    const events = await this.model.find({ _id: { $in: ids } });
    return this.sanitizer.sanitizeMany(events);
  };

  /** checks if the event is valid or throws a not found exception */
  private checkEvent(event: IEvent) {
    if (!event) {
      throw new HttpException('Event was not found', HttpStatus.NOT_FOUND);
    }
  }
}

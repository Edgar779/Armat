import axios from 'axios';
import { EventDTO } from '../../src/event';
import { BASE_URL } from '../data';

export class Event {
  static async create(token, event): Promise<EventDTO> {
    const res = await axios.post(BASE_URL + 'events', event, {
      headers: { 'access-token': token },
    });
    return res.data;
  }
}

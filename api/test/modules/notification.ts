import axios from 'axios';
import { BASE_URL } from '../data';

export class Notification {
  static async sendSMS(message: string, phoneTo: string): Promise<any> {
    const res = await axios.post(BASE_URL + 'notifications/testSMS', {
      to: phoneTo,
      body: message,
    });
    return res.data;
  }
}

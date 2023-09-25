import { Injectable } from '@nestjs/common';
import { IDisplayId } from './displayId.interface';

@Injectable()
export class DisplayIdService {
  async generateDisplayId(prefix: string, lastId: number): Promise<IDisplayId> {
    if (lastId != 0) {
      const suffix = lastId + 1;
      if (suffix <= 9 && suffix >= 1) {
        prefix = prefix + '0000';
      } else if (suffix <= 99 && suffix >= 10) {
        prefix = prefix + '000';
      } else if (suffix <= 999 && suffix >= 100) {
        prefix = prefix + '00';
      } else if (suffix <= 9999 && suffix >= 1000) {
        prefix = prefix + '0';
      }
      return { prefix, suffix };
    }
    prefix = prefix + '0000';
    return { prefix, suffix: 1 };
  }

  async generateDisplayIdWithDate(prefix: string, idMonth: number, lastId: number): Promise<IDisplayId> {
    const date = new Date();
    const year = date.getFullYear().toString().slice(2, 4);
    const month = date.getMonth() + 1;
    prefix = prefix + month + year;

    if (lastId != 0 && idMonth === month) {
      const suffix = lastId + 1;
      if (suffix <= 9 && suffix >= 1) {
        prefix = prefix + '000';
      } else if (suffix <= 99 && suffix >= 10) {
        prefix = prefix + '00';
      } else if (suffix <= 999 && suffix >= 100) {
        prefix = prefix + '0';
      }
      return { prefix, suffix, month };
    }
    prefix = prefix + '000';
    return { prefix, suffix: 1, month };
  }
}

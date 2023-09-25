import { Injectable } from '@nestjs/common';
import { ISanitize } from '../util';
import { TagDTO } from './dto';
import { ITag } from './interface';

@Injectable()
export class TagSanitizer implements ISanitize {
  sanitize(tag: ITag): TagDTO {
    const sanitized: TagDTO = {
      id: tag._id,
      org: tag.org,
      name: tag.name,
      color: tag.color,
    };
    return sanitized;
  }

  sanitizeMany(tags: ITag[]): TagDTO[] {
    const sanitized: TagDTO[] = [];
    for (let i = 0; i < tags.length; i++) {
      sanitized.push(this.sanitize(tags[i]));
    }
    return sanitized;
  }
}

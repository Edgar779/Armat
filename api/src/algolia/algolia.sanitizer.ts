import { Injectable } from '@nestjs/common';
import { AddressSanitizer } from 'src/components/address/address.sanitizer';
import { ISanitize } from 'src/util';
import { ResultDTO } from './dto';
import { IResult } from './interface/result.interface';

@Injectable()
export class AlgoliaSanitizer implements ISanitize {
  constructor(private readonly addressSanitizer: AddressSanitizer) {}
  sanitize(result: IResult): ResultDTO {
    if (!result.isActive) return undefined;
    const sanitized: ResultDTO = {
      id: result.objectID,
      name: result.name,
      description: result.description,
      address: this.addressSanitizer.sanitize(result.address),
      image: result.image,
      type: result.type,
      categories: result.categories,
    };
    return sanitized;
  }

  sanitizeMany(results: any[]): ResultDTO[] {
    const sanitized: ResultDTO[] = [];
    let result;
    for (let i = 0; i < results?.length; i++) {
      result = this.sanitize(results[i]);
      if (result) {
        sanitized.push(result);
      }
    }
    return sanitized;
  }
}

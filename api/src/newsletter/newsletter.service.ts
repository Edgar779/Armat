import { Injectable } from '@nestjs/common';
import { INewsletter, NewsletterModel } from './newsletter.schema';
import { Model } from 'mongoose';
import { SubscribeDTO } from './dto';

@Injectable()
export class NewsletterService {
  constructor() {
    this.model = NewsletterModel;
  }
  private model: Model<INewsletter>;

  /** Service Api */
  async subscribeToNewsletter(subscribeDTO: SubscribeDTO) {
    await new this.model({
      email: subscribeDTO.email,
    }).save();
  }
}

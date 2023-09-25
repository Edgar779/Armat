import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SubscriptionDTO } from './dto';
import { SubscriptionModel } from './subscription.model';
import { ISubscription } from './interface';
import { SessionDTO } from '../auth';

@Injectable()
export class SubscriptionService {
  constructor() {
    this.model = SubscriptionModel;
  }
  private model: Model<ISubscription>;

  /** Public API */
  /** Subscribe to events. Returns the Id of the event subscribed */
  async create(subscribeDTO: SubscriptionDTO): Promise<string> {
    let subscription = await this.model.findOne({
      eventId: subscribeDTO.eventId,
      subscriber: subscribeDTO.user.id,
    });
    this.checkNewSubscription(subscription);
    subscription = await new this.model({
      eventId: subscribeDTO.eventId,
      subscriber: subscribeDTO.user.id,
    }).save();
    return subscription.eventId.toHexString();
  }

  /** delete based on subscrier and event Id */
  async delete(eventId: string, subscriber: SessionDTO): Promise<string> {
    const subscription = await this.model.findOneAndDelete({
      subscriber: subscriber.id,
      eventId: eventId,
    });
    this.checkSubscription(subscription);
    return subscription.eventId.toHexString();
  }

  /** delete all matching an eventId */
  async deleteByEvent(eventId: string) {
    return await this.model.deleteMany({ eventId: eventId });
  }

  /** deletes all subscription */
  async deleteByEventIds(eventIds: string[]) {
    return await this.model.deleteMany({ eventId: { $in: eventIds } });
  }

  /** delete all matching a userId */
  async deleteBySubscriber(subscriberId: string) {
    return await this.model.deleteMany({ subscriber: subscriberId });
  }

  /** Find user subscriptions */
  async getBySubscriber(subscriber: string): Promise<string[]> {
    const subscriptions = await this.model.find({ subscriber });
    const eventIds = subscriptions.map((subscription) => subscription.eventId.toHexString());
    return eventIds;
  }

  /** Find all subscriptions for an event*/
  async getByEvent(eventId: string): Promise<ISubscription[]> {
    const subscriptions = await this.model.find({ eventId: eventId });
    return subscriptions;
  }

  /** Private Methods */
  /** Throw an error if the @subscription is defined */
  private checkNewSubscription(subscription: ISubscription) {
    if (subscription) {
      throw new HttpException('You are already subscribed to this event', HttpStatus.CONFLICT);
    }
  }

  /** throws an error if the @subscription is undefined/null*/
  private checkSubscription(subscription: ISubscription) {
    if (!subscription) {
      throw new HttpException('We were unable to find your subscription', HttpStatus.NOT_FOUND);
    }
  }
}

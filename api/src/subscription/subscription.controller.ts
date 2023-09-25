import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { SubscriptionService } from './subscription.service';
import { SubscriptionDTO } from './dto';
import { SessionDTO, ACCESS_TOKEN } from '../auth';

@Controller('subscriptions')
// @UseGuards(new AuthGuard())
@ApiHeader({ name: ACCESS_TOKEN })
@ApiTags('Subscription Endpoints')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  /* The event does not exist - may only check the event db via event service */
  @Post()
  @ApiBody({ type: SubscriptionDTO })
  @ApiOkResponse({ type: String, description: 'eventId' })
  async subscribe(@Body() subscribeDTO: SubscriptionDTO): Promise<string> {
    const eventId = await this.subscriptionService.create(subscribeDTO);
    return eventId;
  }

  /** Delete all subscriptions for the user */
  @Delete('bySubscriber')
  @ApiOkResponse({ type: String, description: 'eventId' })
  async deleteBySubscriber(@Body('user') subscriber: SessionDTO): Promise<number> {
    const deleted = await this.subscriptionService.deleteBySubscriber(subscriber.id);
    return deleted.deletedCount;
  }

  /** Unsubscribe from an event */
  @Delete(':eventId')
  @ApiBody({ type: SubscriptionDTO })
  @ApiParam({ name: 'eventId' })
  @ApiOkResponse({ type: String, description: 'eventId' })
  async unsubscribe(@Param('eventId') eventId: string, @Body('user') subscriber: SessionDTO): Promise<string> {
    const deletedId = await this.subscriptionService.delete(eventId, subscriber);
    return deletedId;
  }

  /** Find subscriptions */
  // @Get()
  // @ApiOkResponse({ type: String, description: 'eventId' })
  // async getMySubscriptions(@Body('user') subscriber: IUser): Promise<string[]> {
  //   return await this.subscriptionService.findBySubscriber(subscriber.id);
  // }
}

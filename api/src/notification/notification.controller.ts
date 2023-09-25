import { Body, Controller, Delete, Get, Query, Param, Patch, Post } from '@nestjs/common';
import { ApiHeader, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Public } from '../util';
import { ACCESS_TOKEN, SessionDTO } from '../auth';
import { CreateNotificationDTO, GetNotificationsDTO, NotificationDTO, SMSDTO } from './dto';
import { NotificationService } from './notification.service';

@Controller('notifications')
@ApiHeader({ name: ACCESS_TOKEN })
@ApiTags('Notifications Endpoints')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  /** Add test notifications to the system */
  @Post('testNotification')
  @Public()
  async createTestNotification(@Body() dto: CreateNotificationDTO) {
    const notification = await this.notificationService.create(dto);
    return notification;
  }

  @Post('testSMSTest')
  @Public()
  async createTestSMS(@Body() dto: any) {
    const status = await this.notificationService.sendSMS(dto);
    return status;
  }

  /** Gets the notifications of the user based on the page and the number of notifications required */
  @Get()
  @ApiQuery({ name: 'page' })
  @ApiQuery({ name: 'pageSize' })
  @ApiOkResponse({ type: NotificationDTO })
  async getNotifications(
    @Body('user') user: SessionDTO,
    @Query() query: GetNotificationsDTO,
  ): Promise<NotificationDTO[]> {
    return await this.notificationService.getNotifications(query.pageSize, query.page, user.id);
  }

  /** Deletes one notification, identified by the notification id */
  @Delete(':id')
  @ApiOkResponse({ type: String })
  async removeNotification(
    @Body('user') user: SessionDTO,
    @Param('id') id: string,
  ): Promise<string> {
    return await this.notificationService.delete(user.id, id);
  }

  /** Delete all of the notification from the user */
  @Delete()
  @ApiOkResponse({ type: Number })
  async removeAll(@Body('user') user: SessionDTO): Promise<number> {
    return this.notificationService.deleteAll(user.id);
  }

  /** Mark a notification as read */
  @Patch(':id')
  @ApiOkResponse({ type: NotificationDTO })
  async markAsRead(
    @Param('id') id: string,
    @Body('user') user: SessionDTO,
  ): Promise<NotificationDTO> {
    return await this.notificationService.markRead(user.id, id);
  }

  /** Mark all notifications as read */
  @Patch()
  @ApiOkResponse({ type: Number, description: 'number modified' })
  async markAllAsRead(@Body('user') user: SessionDTO): Promise<number> {
    return await this.notificationService.markAllRead(user.id);
  }
}

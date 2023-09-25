import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';
import { NotificationStatus } from '../notification.constants';
import { NotificationType } from '../../util/constants';

export class NotificationEventDTO {
  @ApiProperty()
  eventId: string;
  @ApiProperty()
  eventName: string;
  @ApiProperty({ type: String, description: 'Event end date' })
  eventEndDate?: string;
}

export class OrgNotificationDTO {
  id: string;
  name: string;
}

export class NotificationDTO {
  @ApiProperty()
  id: string;
  @ApiProperty({ enum: NotificationType })
  type: NotificationType;
  @ApiProperty({ enum: NotificationStatus })
  status: NotificationStatus;
  @ApiProperty()
  createdAt: number;
  @ApiProperty({ type: NotificationEventDTO, required: false })
  event?: NotificationEventDTO;
  @ApiProperty({ required: false })
  inviter?: string;
  @ApiProperty({ type: OrgNotificationDTO, required: false })
  org?: OrgNotificationDTO;
}

export class GetNotificationsDTO {
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  page: number;
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  pageSize: number;
}

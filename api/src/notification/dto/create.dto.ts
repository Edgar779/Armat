import { NotificationType } from '../../util/constants';

export class CreateNotificationDTO {
  type: NotificationType;
  userId: string;
  inviter?: string;
  event?: string;
  org?: string;
}

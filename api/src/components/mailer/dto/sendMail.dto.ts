import { NotificationType } from '../../../util/constants';

export class SendMailDTO {
  email: string;
  type: NotificationType;
  resetToken?: string;
  userId?: string;
  orgName?: string;
  event?: string;
}

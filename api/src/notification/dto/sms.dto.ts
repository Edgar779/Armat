import { NotificationType } from '../../util/constants';

export class SMSDTO {
  //   userId: string;
  type: NotificationType;
  userId?: string;
  orgName?: string;
  eventName?: string;
}

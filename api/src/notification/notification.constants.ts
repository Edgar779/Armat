// export enum NotificationType {
//   //Role changes
//   UPGRADE_VERIFITED = 'UPGRADE_VERIFITED',
//   DOWNGRADE_VERIFIED = 'DOWNGRADE_VERIFIED',
//   UPGRADE_ORGANIZER = 'UPGRADE_ORGANIZER',
//   DOWNGRADE_MEMBER = 'DOWNGRADE_MEMBER',
//   //Event types
//   EVENT_DISAPPROVED = 'EVENT_DISAPPROVED',
//   EVENT_APPROVED = 'EVENT_APPROVED',
//   //Subscriptions
//   SUBSCRIPTION_REMINDER = 'SUBSCRIPTION_REMINDER',
//   //Auth
//   FORGOT_PASSWORD = 'FORGOT_PASSWORD',
// }

export enum NotificationStatus {
  READ = 'READ',
  UNREAD = 'UNREAD',
}

export const DAYS_TO_NOTIFY = 2;

export const TWILIO_SID = 'ACee13f99f0d5abc572757ca7e5062724f';
export const TWILIO_AUTH_TOKEN = 'c76283332fce6707c4e0a0ef4bee2778';

export const PHONE_FROM = +18183504659;
export const PHONE_TO = +18184416760;

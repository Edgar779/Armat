export const COMPANY_EMAIL = 'eachbase@gmail.com';
export const MONGO_DUPLICATE_KEY = 11000;
export const PORT = 8081;

export enum OrderType {
  'DESC' = 'DESC',
  'ASC' = 'ASC',
}

export enum NotificationType {
  //Role changes
  UPGRADE_ORGANIZATION_MEMBER = 'UPGRADE_ORGANIZATION_MEMBER',
  UPGRADE_ORGANIZATION_MANAGER = 'UPGRADE_ORGANIZATION_MANAGER',
  UPGRADE_ORGANIZATION_ADMIN = 'UPGRADE_ORGANIZATION_ADMIN',

  DOWNGRADE_ORGANIZATION_MEMBER = 'DOWNGRADE_ORGANIZATION_MEMBER',
  DOWNGRADE_ORGANIZATION_MANAGER = 'DOWNGRADE_ORGANIZATION_MANAGER',

  INVITE = 'INVITE',
  DELETEMEMBER = 'DELETEMEMBER',
  //Event types
  EVENT_DISAPPROVED = 'EVENT_DISAPPROVED',
  EVENT_APPROVED = 'EVENT_APPROVED',
  EVENT_CREATED = 'EVENT_CREATED',
  //Subscriptions
  SUBSCRIPTION_REMINDER = 'SUBSCRIPTION_REMINDER',
  //Auth
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  //General Contact
  CONTACT_FORM_SUBMIT = 'CONTACT_FORM_SUBMIT',
  //Claim notifications
  CLAIM_APPROVED = 'CLAIM_APPORVED',
  CLAIM_REJECTED = 'CLAIM_REJECTED',
}

const mode = ['local', 'development', 'production'][1];
export const BASE_URL = {
  local: 'http://localhost:8081/api',
  development: 'https://armat.eachbase.com/api',
  production: 'https://armat.org',
}[mode];

export const DOMAIN_NAME = {
  local: 'http://localhost:3000',
  development: 'https://armat.eachbase.com',
  production: 'https://armat.org',
}[mode];

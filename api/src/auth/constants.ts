import { BASE_URL } from '../util/constants';

/** Contant Primitieves */
export const SALT_ROUNDS = 8;
export const JWT_SECRET_SIGNIN = '*ADwnda9wjdn*Aj9wdj-a;w/Adwif93jwdbAluw8h84!32';
export const JWT_SECRET_FORGET_PASS = 'abdp9awhd8awh9ej9idj((AJdWdnianwidA';
export const MONGO_DUPLICATE_KEY = 11000;
export const GOOGLE_CLIENT_ID = '484728626492-0q1dkm300qvn81raptblpfhp8n5kc0ti.apps.googleusercontent.com';
export const GOOGLE_CLIENT_SECRET = '4WTYGSQ8Vt2Q9zRzyXVBlE8C';
export const GOOGLE_CALLBACK_URL = `${BASE_URL}/user/google/redirected`;

export const FACEBOOK_APP_ID = '668391627157311';
export const FACEBOOK_APP_SECRET = 'cbcb7fd7ad2dfb401e67842313b07670';
export const FACEBOOK_CALLBACK_URL = `${BASE_URL}/user/facebook/redirected`;

export const TWITTER_CONSUMER_KEY = 'JXT0EYzC1mtorMIRncctbKUoM';
export const TWITTER_CONSUMER_SECRET = 'IbFYddTWZe1QJPHfGaMtgmX8RMWm1tbNV9PsL4fcBAIOhRQ1zy';
export const TWITTER_CALLBACK_URL = `${BASE_URL}/user/twitter/redirected`;

export const APPLE_CLIENT_ID = 'com.eachbase.armat.service';
export const APPLE_TEAM_ID = 'CNAUZUZ88T';
export const APPLE_KEY_ID = 'US535A4CL8';
export const APPLE_PRIVATE_KEY_LOCATION = './AuthKey.p8';
export const APPLE_CALLBACK_URL = `${BASE_URL}/user/apple/redirected`;

export const ACCESS_TOKEN = 'access-token';
export const RESET_TOKEN = 'reset-token';
export const SESSION_EXPIRATION = '24h';
export const APPLE_KEY = 'appleId';
/** Enums */
export enum Role {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
}

export enum AuthStatus {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
}
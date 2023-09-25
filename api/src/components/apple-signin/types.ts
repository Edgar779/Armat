export enum AppleSigninScope {
  NAME = 'name',
  EMAIL = 'email',
  NAME_AND_EMAIL = 'name email',
}

/** The shape of the object that is used to configure the Apple-Signin module */
export interface AppleSigninOptions {
  /** The client id from apple - e.g. com.example.app */
  clientId: string;
  // state?: string;
  keyId: string;
  /** The teamId should be taken from apple  */
  teamId: string;
  /** the location to the *.p8 file that you get from apple. Use the relative location from the current directory starting with a */
  privateKeyPath: string;
  /** The callback url - this is the url of the server that apple's auth servers will use to respond to your server*/
  redirectUri: string;
  /** a random string that identifies the state of the request */
  state?: string;
  /** scope tells apple what to return.
   * It should be either 'name', 'email' or both and should not be any other value
   * if not provided, default value of both will be used
   */
  scope?: AppleSigninScope;
}

/** The shape of the object that is returned to us when we exchange the authorization code from apple */
export interface AppleTokenResponse {
  /** Access token for the information */
  access_token: string;
  /** Token type, which is 'Bearer' in this case*/
  token_type: string;
  /** The number of seconds in which access token expires in seconds */
  expires_in: number;
  /** The refresh token that is used to obtain a new token set */
  refresh_token: string;
  /** The token that contains all other information, such as email and openId*/
  id_token: string;
}

/** The shape of the object returned by apple */
export interface AppleSigninResponse {
  iss?: string;
  aud?: string;
  exp?: number;
  iat?: number;
  sub?: string;
  at_hash?: string;
  email?: string;
  email_verified?: string;
  auth_time?: number;
  nonce_supported?: boolean;
}

/** The response that is returned by the module. */
export interface AppleSignedinResponse {
  /** The id that is alwasys the same in apples system. This will always be returned upon successfull login */
  openId: string;
  /** This id identifies apple in our system */
  providerId: string;
  /** User email and name - these two fileds are optional and are only sent upon the first signin */
  email?: string;
  name?: {
    firstName: string;
    lastName: string;
  };
}

/** This is the object that is send to our servers from apple upon successull login */
export interface AppleAuthorizedResponse {
  /** The authorization code that apple sends us upon successfull login */
  code?: string;
  /** String representation of the user object sent to us by apple */
  user?: string;
  /** The error code that is returned if any */
  error?: string;
}

/** The user shape sent to us by apple */
export interface AppleUser {
  name?: {
    firstName: string;
    lastName: string;
  };
  email: string;
}

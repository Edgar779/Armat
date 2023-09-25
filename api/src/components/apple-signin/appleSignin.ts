import { URL } from 'url';
import { existsSync, readFileSync } from 'fs';
import * as NodeRSA from 'node-rsa';
import * as jwt from 'jsonwebtoken';
import axios from 'axios';
import {
  AppleAuthorizedResponse,
  AppleSignedinResponse,
  AppleSigninOptions,
  AppleSigninResponse,
  AppleSigninScope,
  AppleTokenResponse,
  AppleUser,
} from './types';

import { Injectable } from '@nestjs/common';
import * as path from 'path';

const ENDPOINT_URL = 'https://appleid.apple.com';
const TOKEN_ISSUER = 'https://appleid.apple.com';
const PROVIDER_ID = 'apple';

/** This module is designed to communicate with apple authentication servie and log in a user using Singin with apple */
@Injectable()
export class AppleSignin {
  constructor(options: AppleSigninOptions) {
    this.validateOptions(options);
    this.clientId = options.clientId;
    this.teamId = options.teamId;
    this.keyId = options.keyId;
    this.redirectUri = options.redirectUri;
    this.scope = options.scope ? options.scope : AppleSigninScope.NAME_AND_EMAIL;
    this.state = options.state ? options.state : 'NOT_PROVIDED';
    this.clientSecret = this.getClientSecret(options.privateKeyPath);
  }

  private readonly clientId: string;
  private readonly teamId: string;
  private readonly keyId: string;
  private readonly redirectUri: string;
  private readonly scope: AppleSigninScope;
  private readonly state: string;
  private readonly clientSecret: string;

  /** Creates the authorizaton url - this is the url to which the user will be
   * redirected to enter their apple credentilas
   */
  getAuthorizationUrl = () => {
    const url = new URL(ENDPOINT_URL);
    url.pathname = '/auth/authorize';
    url.searchParams.append('response_type', 'code');
    url.searchParams.append('state', this.state);
    url.searchParams.append('client_id', this.clientId);
    url.searchParams.append('redirect_uri', this.redirectUri);
    url.searchParams.append('scope', this.scope);
    url.searchParams.append('response_mode', 'form_post');
    return url.toString();
  };

  /** Takes the initial signedin response from apple, exchanges the authrozation code for tokens, verifies the apple signature
   * creates an logged in response and returns it to the caller
   */
  authorize = async (auth: AppleAuthorizedResponse): Promise<AppleSignedinResponse> => {
    if (auth.error) throw new Error(auth.error);
    const tokens = await this.getAuthorizationToken(auth.code);
    const verified = await this.verifyIdToken(tokens.id_token);
    const response: AppleSignedinResponse = {
      openId: verified.sub,
      providerId: PROVIDER_ID,
    };
    if (auth.user) {
      const user: AppleUser = JSON.parse(auth.user);
      if (user.name) {
        response.name = {
          firstName: user.name.firstName,
          lastName: user.name.lastName,
        };
      }
      if (user.email) {
        response.email = user.email;
      }
    }
    return response;
  };

  /** PRIVATE METHODS */
  /** Uses the Node-RSA module to create the apple public key */
  private createPublicKey = (key) => {
    const pubKey = new NodeRSA();
    pubKey.importKey(
      { n: Buffer.from(key.n, 'base64'), e: Buffer.from(key.e, 'base64') },
      'components-public',
    );
    return pubKey.exportKey(['public']);
  };

  /** Validates the AppleSigninOptions and throws an appropriate error if any are not provided */
  private validateOptions = (options: AppleSigninOptions) => {
    if (!options.clientId) throw new Error('clientId is empty');
    if (!options.redirectUri) throw new Error('redirectUri is empty');
    if (!options.keyId) throw new Error('KeyId was not provided');
    if (!options.teamId) throw new Error('teamId was not provided');
    if (!options.privateKeyPath) throw new Error('PrivateKeyPath was not provided');
    if (options.scope) {
      if (
        options.scope !== AppleSigninScope.NAME &&
        options.scope !== AppleSigninScope.EMAIL &&
        options.scope !== AppleSigninScope.NAME_AND_EMAIL
      ) {
        throw new Error(
          'Scope is invalid. Make sure scope uses a value from AppleSigninScope enum',
        );
      }
    }
  };

  /** Creates the client signature */
  private getClientSecret = (keyPath: string): string => {
    const fullPath = path.join(__dirname, keyPath);
    if (!existsSync(fullPath)) {
      throw new Error('Private key file was not found at location ' + fullPath);
    }
    const key = readFileSync(fullPath);
    const timeNow = Math.floor(Date.now() / 1000);
    const claims = {
      iss: this.teamId,
      iat: timeNow,
      exp: timeNow + 15777000,
      aud: ENDPOINT_URL,
      sub: this.clientId,
    };
    const header = { alg: 'ES256', kid: this.keyId };
    return jwt.sign(claims, key, { algorithm: 'ES256', header });
  };

  /** Get the public keys from apple */
  private getAppleKeys = async () => {
    try {
      const url = new URL(ENDPOINT_URL);
      url.pathname = '/auth/keys';
      const { data } = await axios.get(url.toString());
      if (!data.keys || data.keys.length < 1) throw new Error();
      return data.keys;
    } catch (err) {
      console.log(err.message);
      throw new Error('Could not get apple keys');
    }
  };

  /** Decodes and verifies the idToken returned from the client */
  private verifyIdToken = async (
    idToken: string,
    clientId?: string,
  ): Promise<AppleSigninResponse> => {
    const keys = await this.getAppleKeys();
    let jwtClaims: AppleSigninResponse = null;
    let applePublicKey = null;
    for (let i = 0; i < keys.length; i++) {
      applePublicKey = this.createPublicKey(keys[i]);
      try {
        jwtClaims = jwt.verify(idToken, applePublicKey, {
          algorithms: 'RS256',
        });
        break;
      } catch (err) {
        continue;
      }
    }
    if (jwtClaims === null) throw new Error('Could not verify token identity');
    if (jwtClaims.iss !== TOKEN_ISSUER) {
      throw new Error(
        'id token not issued by correct OpenID provider - expected: ' +
          TOKEN_ISSUER +
          ' | from: ' +
          jwtClaims.iss,
      );
    }
    if (clientId !== undefined && jwtClaims.aud !== clientId) {
      throw new Error(
        'aud parameter does not include this client - is: ' +
          jwtClaims.aud +
          '| expected: ' +
          clientId,
      );
    }
    if (!jwtClaims.sub) throw new Error('Missing openId');
    if (jwtClaims.exp < Date.now() / 1000) {
      throw new Error('id token has expired');
    }
    return jwtClaims;
  };

  /** Gets the authorization tokens by exchanging the code */
  private getAuthorizationToken = async (code: string): Promise<AppleTokenResponse> => {
    const url = new URL(ENDPOINT_URL);
    url.pathname = '/auth/token';
    const form = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: this.redirectUri,
    };
    try {
      const { data } = await axios.post(url.toString(), null, { params: form });
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  /** Refreshes the authorization token */
  private refreshAuthorizationToken = async (refreshToken: string): Promise<AppleTokenResponse> => {
    const url = new URL(ENDPOINT_URL);
    url.pathname = '/auth/token';
    const form = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    };
    try {
      const { data } = await axios.post(url.toString(), null, { params: form });
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  };
}

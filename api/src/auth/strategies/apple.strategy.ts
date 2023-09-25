import * as constants from '../constants';
import { AppleSignin } from '../../components/apple-signin/appleSignin';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppleAuthorizedResponse } from '../../components/apple-signin';
import { SocialDTO } from '../dto';

/** This class serves as an interface between the general AppleSignin module and our system */
@Injectable()
export class AppleStrategy {
  constructor() {
    this.appleSignin = new AppleSignin({
      clientId: constants.APPLE_CLIENT_ID,
      teamId: constants.APPLE_TEAM_ID,
      keyId: constants.APPLE_KEY_ID,
      redirectUri: constants.APPLE_CALLBACK_URL,
      privateKeyPath: '../AuthKey.p8',
    });
  }
  /** Members */
  private appleSignin: AppleSignin;

  /** Get the authorization url - redirect the user to this url to have them sign in  */
  getAuthorizationURL = () => {
    return this.appleSignin.getAuthorizationUrl();
  };

  /** Get the code sent by apple and return the  */
  authorize = async (authResponse: AppleAuthorizedResponse): Promise<SocialDTO> => {
    try {
      const response = await this.appleSignin.authorize(authResponse);
      const dto: SocialDTO = {
        providerKey: constants.APPLE_KEY,
        socialId: response.openId,
        email: response.email,
      };
      if (response.name) {
        dto.fullName = `${response.name.firstName} ${response.name.lastName}`;
      } else {
        dto.fullName = 'Armat User';
      }
      return dto;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  };
}

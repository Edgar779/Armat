import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { VerifyCallback, Strategy } from 'passport-facebook';
import { FACEBOOK_CALLBACK_URL, FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } from '../constants';
import { SocialDTO } from '../dto';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: FACEBOOK_CALLBACK_URL,
      profileFields: ['emails', 'name', 'displayName', 'photos'],
      scope: 'email',
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<any> {
    const { provider, displayName, emails, photos, id } = profile;
    const socailLoginDTO: SocialDTO = {
      email: emails[0].value,
      providerKey: provider + 'Id',
      socialId: id,
      fullName: displayName,
      avatar: photos[0].value,
    };

    done(null, socailLoginDTO);
  }
}

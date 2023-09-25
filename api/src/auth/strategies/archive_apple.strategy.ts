// /** Follow the instructions for configuring the apple account
//  * https://github.com/ananay/apple-auth/blob/master/SETUP.md#create-a-new-app-id
//  *
//  */

// import { HttpException, Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import * as Strategy from 'passport-apple';
// import * as path from 'path';
// import * as jwt from 'jsonwebtoken';
// import {
//   APPLE_CALLBACK_URL,
//   APPLE_CLIENT_ID,
//   APPLE_KEY_ID,
//   // APPLE_PRIVATE_KEY_LOCATION,
//   APPLE_TEAM_ID,
// } from '../constants';
// import { SocialLoginDTO } from '../dto';

// @Injectable()
// export class AppleStrategy extends PassportStrategy(Strategy, 'apple') {
//   constructor() {
//     super({
//       clientID: APPLE_CLIENT_ID,
//       teamID: APPLE_TEAM_ID,
//       keyID: APPLE_KEY_ID,
//       privateKeyLocation: path.join(__dirname, '../../AuthKey.p8'),
//       callbackURL: APPLE_CALLBACK_URL,
//       passReqToCallback: true,
//     });
//   }

//   async validate(
//     req: string, // Request object
//     accessToken: string, //
//     refreshToken: string,
//     // idToken: string,
//     profile: any,
//     done: any,
//   ): Promise<any> {
//     try {
//       // console.log('req ', req);

//       console.log('ACCESS TOKEN ', accessToken);
//       console.log('REFRESH TOKEN ', refreshToken);
//       console.log('PROFILE ', profile);
//       // console.log('USER TOKEN ', idToken);
//       // const decoded = await jwt.decode(idToken);
//       const decodedAccess = await jwt.decode(accessToken);
//       console.log('DECODED ACCESS TOKEN : ', decodedAccess);

//       const decodedRefresh = await jwt.decode(refreshToken);
//       console.log('DECODED ACCESS TOKEN : ', decodedRefresh);

//       // console.log('DECODED ', decoded);
//       done(null, { username: 'FaKEr' });
//     } catch (error) {
//       throw new HttpException(error.message, 444);
//     }
//     // const decoded = await jwt.decode(idToken);

//     // const { provider, displayName, emails, photos, id } = profile;
//     // const socialLoginDTO: SocialLoginDTO = {
//     //   email: emails[0].value,
//     //   providerKey: provider + 'Id',
//     //   id: id,
//     //   avatarURL: photos[0].value,
//     //   fullName: displayName,
//     // };

//     // done(null, socialLoginDTO);
//   }
// }

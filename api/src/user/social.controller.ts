import { Controller, HttpStatus, Get, UseGuards, Req, Redirect, Post, Body } from '@nestjs/common';
import { DOMAIN_NAME, Public } from '../util';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { FacebookAuthGuard, GoogleAuthGuard, TwitterAuthGuard, AppleStrategy } from '../auth';
import { AppleAuthorizedResponse } from '../components/apple-signin';

@Controller('user')
@ApiTags('Social Authentication Endpoints')
export class SocialController {
  constructor(
    private readonly appleStrategy: AppleStrategy,
    private readonly userService: UserService,
  ) {}

  @Get('/google')
  @Public()
  @UseGuards(GoogleAuthGuard)
  @ApiResponse({ description: 'use to login with googles' })
  async googleAuth(@Req() req) {
    console.log(req);
  }

  @Get('/google/redirected')
  @Public()
  @UseGuards(GoogleAuthGuard)
  @Redirect(DOMAIN_NAME, HttpStatus.PERMANENT_REDIRECT)
  async googleAuthRedirected(@Req() req) {
    return await this.userService.socialLogin(req.user);
  }

  @Get('/facebook')
  @Public()
  @UseGuards(FacebookAuthGuard)
  @ApiResponse({ description: 'use this to login with facebook' })
  async facebookAuth() {
    console.log('facebook login endpoint activated');
  }

  /** Social Signin Redirect */
  @Get('/facebook/redirected')
  @Public()
  @UseGuards(FacebookAuthGuard)
  @Redirect(DOMAIN_NAME, HttpStatus.PERMANENT_REDIRECT)
  async facebookAuthRedirected(@Req() req) {
    return await this.userService.socialLogin(req.user);
  }

  @Get('/twitter')
  @Public()
  @UseGuards(TwitterAuthGuard)
  @ApiResponse({ description: 'use this to login with Twitter' })
  async twitterAuth() {
    console.log('Twitter login endpoint activated');
  }

  /** Social Signin Redirect */
  @Get('/twitter/redirected')
  @Public()
  @UseGuards(TwitterAuthGuard)
  @Redirect()
  async twitterAuthRedirected(@Req() req) {
    return await this.userService.socialLogin(req.user);
  }

  /** APPLE STRATEGY - CUSTOME */
  @Get('/apple')
  @Public()
  @ApiResponse({ description: 'use this to login with Apple' })
  @Redirect()
  async appleAuthCustome() {
    const url = this.appleStrategy.getAuthorizationURL();
    return { url };
  }

  /** Social Signin Redirect */
  @Post('/apple/redirected')
  @Public()
  @Redirect()
  async appleCallbackCustome(@Body() authResponse: AppleAuthorizedResponse) {
    const response = await this.appleStrategy.authorize(authResponse);
    try {
      return await this.userService.socialLogin(response);
    } catch (err) {
      if (err.status === HttpStatus.EXPECTATION_FAILED) {
        return {
          url: `${DOMAIN_NAME}/appleSigninError`,
        };
      } else {
        throw err;
      }
    }
  }
}

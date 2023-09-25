import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class FacebookAuthGuard extends AuthGuard('facebook') {}

export class TwitterAuthGuard extends AuthGuard('twitter') {}

export class GoogleAuthGuard extends AuthGuard('google') {}
// export class FacebookAuthGuard extends AuthGuard() {}

// export class TwitterAuthGuard extends AuthGuard() {}

// export class GoogleAuthGuard extends AuthGuard() {}

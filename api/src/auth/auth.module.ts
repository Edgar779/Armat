import { Module } from '@nestjs/common';
import { MailerModule } from '../components/mailer/mailer.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AppleStrategy, FacebookStrategy, GoogleStrategy, TwitterStrategy } from './strategies';
import { APP_GUARD } from '@nestjs/core';
import { AuthSanitizer } from './auth.sanitizer';
import { AuthGuard } from './guards';

@Module({
  imports: [MailerModule],
  exports: [AuthService, AuthSanitizer, AppleStrategy],
  providers: [
    AuthService,
    FacebookStrategy,
    TwitterStrategy,
    GoogleStrategy,
    AppleStrategy,
    AuthSanitizer,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}

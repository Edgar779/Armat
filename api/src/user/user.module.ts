import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';
import { FileModule } from '../file/file.module';
import { SocialController } from './social.controller';
import { UserSanitizer } from './user.sanitizer';

@Module({
  imports: [FileModule, AuthModule],
  providers: [UserService, UserSanitizer],
  controllers: [UserController, SocialController],
  exports: [UserService, UserSanitizer],
})
export class UserModule {}

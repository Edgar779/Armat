import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserWorker {
  constructor(private readonly authService: AuthService) {}

  // /** Cleaning the db from expired sessions every month twice */
  // @Cron('0 0 4 1,15 * ')
  // private async cleanSessions() {
  //   try {
  //     await this.authService.cleanSessions();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
}

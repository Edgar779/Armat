import { Module } from '@nestjs/common';
import { EventModule } from '../event/event.module';
import { NotificationModule } from '../notification/notification.module';
import { EventWorker } from './event.worker';
import { UserWorker } from './user.worker';
import { AuthModule } from '../auth/auth.module';
import { AlgoliaModule } from 'src/algolia/algolia.module';

@Module({
  imports: [EventModule, NotificationModule, AuthModule, AlgoliaModule],
  providers: [EventWorker, UserWorker],
})
export class WorkerModule {}

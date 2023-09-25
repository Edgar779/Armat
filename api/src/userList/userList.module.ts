import { Module } from '@nestjs/common';
import { OrgUserModule } from 'src/orgUser/orgUser.module';
import { ListController } from './userList.controller';
import { UserListSanitizer } from './userList.sanitizer';
import { ListService } from './userList.service';

@Module({
  imports: [OrgUserModule],
  controllers: [ListController],
  providers: [ListService, UserListSanitizer],
  exports: [ListService],
})
export class UserListModule {}

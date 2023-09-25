import { Global, Module } from '@nestjs/common';
import { DisplayIdService } from './displayId.service';

@Global()
@Module({
  providers: [DisplayIdService],
  exports: [DisplayIdService],
})
export class DisplayIdModule {}

import { Module } from '@nestjs/common';
import { AddressModule } from 'src/components/address/address.module';
import { AlgoliaController } from './algolia.controller';
import { AlgoliaSanitizer } from './algolia.sanitizer';
import { AlgoliaService } from './algolia.service';

@Module({
  imports: [AddressModule],
  controllers: [AlgoliaController],
  providers: [AlgoliaService, AlgoliaSanitizer],
  exports: [AlgoliaService],
})
export class AlgoliaModule {}

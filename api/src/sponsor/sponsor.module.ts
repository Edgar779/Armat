import { Module } from '@nestjs/common';
import { SponsorController } from './sponsor.controller';
import { SponsorSanitizer } from './sponsor.sanitizer';
import { SponsorService } from './sponsor.service';

@Module({
  exports: [SponsorService],
  controllers: [SponsorController],
  providers: [SponsorService, SponsorSanitizer],
})
export class SponsorModule {}

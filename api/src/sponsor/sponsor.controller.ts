import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ParseObjectIdPipe } from 'src/util';
import { SponsorDTO } from '.';
import { EditSponsorDTO } from './dto/edit.dto';
import { SponsorService } from './sponsor.service';

@Controller('sponsor')
@ApiTags('Sponsors')
export class SponsorController {
  constructor(private readonly sponsorService: SponsorService) {}
}

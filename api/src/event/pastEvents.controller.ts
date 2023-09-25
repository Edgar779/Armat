import { Controller, Get, Param } from '@nestjs/common';
import { ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '../util';
import { ACCESS_TOKEN } from '../auth';
import { EventDTO } from './dto';
import { PastEventService } from './pastEvent.service';

@Controller('pastEvents')
@ApiTags('Past Events Endpoints')
@ApiHeader({ name: ACCESS_TOKEN })
export class PastEventController {
  constructor(private readonly pastEventService: PastEventService) {}

  /** Get Past Events */
  @Get()
  @Public()
  @ApiOkResponse({ type: [EventDTO] })
  async getPastEvents(): Promise<EventDTO[]> {
    return await this.pastEventService.getAll();
  }

  /** Get a single past event */
  @Get(':id')
  @Public()
  @ApiOkResponse({ type: EventDTO })
  async getPastEvent(@Param('id') id: string): Promise<EventDTO> {
    return await this.pastEventService.get(id);
  }
}

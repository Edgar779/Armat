import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EventTagService } from './event-tag.service';
import { Role, ACCESS_TOKEN } from '../auth';
import { Public } from '../util';
import { AuthService } from '../auth/auth.service';
import { EventTagDTO } from './dto';

@Controller('eventTags')
@ApiTags('EventTags')
@ApiHeader({ name: ACCESS_TOKEN })
export class EventTagController {
  constructor(private readonly eventTagService: EventTagService, private readonly authService: AuthService) {}

  @Get()
  @Public()
  @ApiOkResponse({ type: [String] })
  async getAll() {
    return await this.eventTagService.getAll();
  }

  @Post()
  @ApiBody({ type: EventTagDTO })
  @ApiOkResponse({ type: [String] })
  async create(@Body() dto: EventTagDTO) {
    this.authService.enforceAccess([Role.ADMIN], dto.user);
    return await this.eventTagService.create(dto.tags);
  }

  @Delete()
  @ApiOkResponse({ type: Number })
  async delete(@Body() dto: EventTagDTO) {
    this.authService.enforceAccess([Role.ADMIN], dto.user);
    return await this.eventTagService.delete(dto.tags);
  }
}

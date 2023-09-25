import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RsvpService } from './rsvp.service';
import { RsvpDTO, CreateRsvpDTO, EditRsvpDTO, GetRsvpQuery, RsvpListDTO } from './dto';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ACCESS_TOKEN, SessionDTO } from 'src/auth';
import { ParseObjectIdPipe } from 'src/util';

@Controller('rsvp')
@ApiTags('rsvp')
@ApiHeader({ name: ACCESS_TOKEN })
export class RsvpController {
  constructor(private readonly rsvpService: RsvpService) {}

  /** create rsvp */
  @Post()
  @ApiBody({ type: CreateRsvpDTO })
  @ApiOkResponse({ type: RsvpDTO })
  async create(@Body() dto: CreateRsvpDTO): Promise<RsvpDTO> {
    return await this.rsvpService.create(dto);
  }

  /** get all rsvp by event id */
  @Get()
  @ApiOkResponse({ type: [RsvpDTO] })
  async findAll(@Body('user') user: SessionDTO, @Query() dto: GetRsvpQuery): Promise<RsvpListDTO> {
    return await this.rsvpService.findAll(dto, user);
  }

  /** get by member id */
  @Get('event/:eventId/byMember')
  @ApiOkResponse({ type: RsvpDTO })
  async findByMember(@Body('user') user: SessionDTO, @Param('eventId') eventId: string): Promise<RsvpDTO> {
    return await this.rsvpService.findByMember(eventId, user);
  }

  /** get rsvp by id  */
  @Get(':id')
  @ApiOkResponse({ type: RsvpDTO })
  async findOne(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO): Promise<RsvpDTO> {
    return await this.rsvpService.findOne(id, user);
  }

  /** edit rsvp */
  @Patch(':id')
  @ApiBody({ type: EditRsvpDTO })
  @ApiOkResponse({ type: RsvpDTO })
  async update(@Param('id', ParseObjectIdPipe) id: string, @Body() dto: EditRsvpDTO): Promise<RsvpDTO> {
    return await this.rsvpService.update(id, dto);
  }

  /** delete rsvp */
  @Delete(':id')
  @ApiOkResponse({ type: String })
  async remove(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO): Promise<string> {
    return await this.rsvpService.remove(id, user);
  }
}

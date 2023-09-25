import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { EditSponsorDTO, SponsorDTO, SponsorStatus } from 'src/sponsor';
import { ACCESS_TOKEN, SessionDTO } from '../auth';
import { ParseObjectIdPipe, Public } from '../util';
import { EventAccess, summaries } from './constants';
import { CreateEventDTO, EditEventDTO, EventDTO, EventListDTO, EventStatusDTO, GetEventQuery } from './dto';
import { EventService } from './event.service';

@Controller('events')
@ApiTags('Event Endpoints')
@ApiHeader({ name: ACCESS_TOKEN })
export class EventController {
  constructor(private readonly eventService: EventService) {}

  /** Create a new event */
  @Post()
  @ApiBody({ type: CreateEventDTO })
  @ApiOkResponse({ type: EventDTO })
  async create(@Body() dto: CreateEventDTO): Promise<EventDTO> {
    const event = await this.eventService.create(dto);
    return event;
  }

  /** add list */
  @Patch(':id/list/add')
  @ApiOkResponse({ type: EventDTO })
  @ApiQuery({ type: Array, name: 'listIds', required: false })
  async addList(
    @Param('id', ParseObjectIdPipe) id: string,
    @Query('listIds') listIds: [string],
    @Body('user') user: SessionDTO,
  ): Promise<EventDTO> {
    const event = await this.eventService.addList(id, listIds, user);
    return event;
  }

  /** delete list */
  @Patch(':id/list/:listId/delete')
  @ApiOkResponse({ type: EventDTO })
  async deleteList(
    @Param('id', ParseObjectIdPipe) id: string,
    @Param('listId', ParseObjectIdPipe) listId: string,
    @Body('user') user: SessionDTO,
  ): Promise<EventDTO> {
    const event = await this.eventService.deleteList(id, listId, user);
    return event;
  }

  /** set access status */
  @Patch(':id/access/setStatus')
  @ApiQuery({ name: 'status', enum: EventAccess })
  @ApiOkResponse({ type: EventDTO })
  async setAccessStatus(
    @Param('id', ParseObjectIdPipe) id: string,
    @Query('status') status: EventAccess,
    @Body('user') user: SessionDTO,
  ): Promise<EventDTO> {
    const event = await this.eventService.setAccessStatus(id, status, user);
    return event;
  }

  /** Get all events in the system */
  @Get('org/:orgId')
  @ApiOkResponse({ type: [EventDTO] })
  @Public()
  async getAll(
    @Body('user') user: SessionDTO,
    @Query() dto: GetEventQuery,
    @Param('orgId', ParseObjectIdPipe) orgId: string,
  ): Promise<EventListDTO> {
    return await this.eventService.getAll(dto, orgId, user);
  }

  /** Get all events in the system for admin */
  @Get('admin')
  @ApiOkResponse({ type: [EventDTO] })
  async getAllByAdmin(@Body('user') user: SessionDTO, @Query() dto: GetEventQuery): Promise<EventListDTO> {
    return await this.eventService.getAllByAdmin(dto, user);
  }

  /** Get the events the user is subscribed to */
  @Get('subscribed')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: [EventDTO] })
  async getSubscribedEvents(@Body('user') user: SessionDTO): Promise<EventDTO[]> {
    const events = await this.eventService.getSubscribed(user);
    return events;
  }

  /** Get creator's event */
  @Get('byCreator')
  @ApiOkResponse({ type: [EventDTO] })
  async getByCreator(@Body('user') user: SessionDTO): Promise<EventDTO[]> {
    const events = await this.eventService.getByCreator(user.id);
    return events;
  }

  /** Get a single event */
  @Get(':eventId')
  @ApiOkResponse({ type: EventDTO })
  @Public()
  async get(@Param('eventId') eventId: string, @Body('user') user?: SessionDTO): Promise<EventDTO> {
    const event = await this.eventService.get(eventId, user);
    return event;
  }

  /** Get upcoming events */
  @Get('upcoming/events')
  @Public()
  @ApiOkResponse({ type: [EventDTO] })
  async getUpcomingEvents(@Body('user') user: SessionDTO): Promise<EventDTO[]> {
    const events = await this.eventService.getUpcomingEvents(user);
    return events;
  }

  /** Edit user event */
  @Patch(':id')
  @ApiBody({ type: EditEventDTO })
  @ApiOkResponse({ type: EventDTO })
  async edit(@Param('id') id: string, @Body() dto: EditEventDTO): Promise<EventDTO> {
    const event = await this.eventService.edit(id, dto);
    return event;
  }

  /** Change the event status */
  @Patch(':id/setStatus')
  @ApiOkResponse({ type: EventDTO })
  async changeStatus(@Param('id', ParseObjectIdPipe) id: string, @Body() dto: EventStatusDTO): Promise<EventDTO> {
    const event = await this.eventService.setStatus(id, dto);
    return event;
  }

  /** Delete user's event by the admin */
  @Delete(':id')
  @ApiOkResponse({ type: String, description: 'Id of deleted event' })
  async delete(@Param('id') id: string, @Body('user') user: SessionDTO): Promise<string> {
    const event = await this.eventService.delete(id, user);
    return event.id;
  }

  /** Delete user events */
  @Delete('org/:orgId')
  @ApiOkResponse({ type: String, description: 'Id of deleted event' })
  async deleteMany(
    @Query('eventIds') eventIds: string[],
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Body('user') user: SessionDTO,
  ): Promise<string> {
    await this.eventService.deleteMany(eventIds, orgId, user);
    return 'ok';
  }

  /** Sponsors */

  /** Get the sponsor requests by @param orgId */
  @Get('sponsorRequests/:orgId')
  @ApiOperation({ summary: summaries.GET_SPONSOR_REQUESTS })
  @ApiOkResponse({ type: [SponsorDTO] })
  async getSponsorRequests(
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Body('user') user: SessionDTO,
  ): Promise<SponsorDTO[]> {
    const sponsors = await this.eventService.getSponsorRequests(orgId, user);
    return sponsors;
  }

  /** Get the events that the org with @param orgId has sponsored */
  @Get('sponsored/:orgId')
  @Public()
  @ApiOperation({ summary: summaries.GET_SPONSORED_EVENTS })
  @ApiOkResponse({ type: [EventDTO] })
  async getSponsoredEvents(
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Body('user') user?: SessionDTO,
  ): Promise<EventDTO[]> {
    const events = await this.eventService.getSponsoredEvent(orgId, user);
    return events;
  }

  /** Get the sponsors of an event (get only active for unauthorized people) */
  @Get(':eventId/sponsors')
  @ApiOkResponse({ type: [SponsorDTO] })
  @ApiOperation({ summary: summaries.GET_EVENT_SPONSORS })
  @Public()
  async getSponsors(
    @Param('eventId', ParseObjectIdPipe) id: string,
    @Body('user') user: SessionDTO,
  ): Promise<SponsorDTO[]> {
    const sponsors = await this.eventService.getEventSponsors(id, user);
    return sponsors;
  }

  /** Change the note for a sponsor request */
  @Patch(':eventId/sponsors')
  @ApiOkResponse({ type: SponsorDTO })
  @ApiBody({ type: EditSponsorDTO })
  @ApiOperation({ summary: summaries.EDIT_SPONSOR })
  async editSponsor(@Param('eventId', ParseObjectIdPipe) id: string, @Body() dto: EditSponsorDTO): Promise<SponsorDTO> {
    const sponsor = await this.eventService.editSponsorNote(id, dto);
    return sponsor;
  }

  // /** Change status of the sponsor */
  @Patch(':eventId/setSponsorRequest')
  @ApiOperation({ summary: summaries.GET_EVENT_SPONSORS })
  @ApiOkResponse()
  async setStatus(
    @Param('eventId', ParseObjectIdPipe) id: string,
    @Body() dto: EditSponsorDTO,
  ): Promise<SponsorStatus> {
    const newStatus = await this.eventService.setSponsorRequest(id, dto);
    return newStatus;
  }
}

/** End of controller */

import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketDTO, CreateTicketDTO, EditTicketDTO, GetTicketQuery, TicketListDTO } from './dto';
import { ParseObjectIdPipe, Public } from 'src/util';
import { ACCESS_TOKEN, SessionDTO } from 'src/auth';
import { ApiBody, ApiHeader, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { TicketAccess, TicketStatus } from './ticket.constants';

@Controller('tickets')
@ApiTags('Ticket Endpoints')
@ApiHeader({ name: ACCESS_TOKEN })
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  /** create ticket */
  @Post()
  @ApiBody({ type: CreateTicketDTO })
  @ApiOkResponse({ type: TicketDTO })
  async create(@Body() dto: CreateTicketDTO): Promise<TicketDTO> {
    return await this.ticketService.create(dto);
  }

  /** get all tickets */
  @Get()
  @ApiOkResponse({ type: [TicketDTO] })
  @Public()
  async findAll(@Body('user') user: SessionDTO, @Query() dto: GetTicketQuery): Promise<TicketListDTO> {
    return await this.ticketService.findAll(dto, user);
  }

  /** get ticket by id */
  @Get(':id')
  @ApiOkResponse({ type: TicketDTO })
  async findOne(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO): Promise<TicketDTO> {
    return await this.ticketService.findOne(id, user);
  }

  /** update the ticket */
  @Patch(':id')
  @ApiBody({ type: EditTicketDTO })
  @ApiOkResponse({ type: TicketDTO })
  async update(@Param('id', ParseObjectIdPipe) id: string, @Body() dto: EditTicketDTO): Promise<TicketDTO> {
    return await this.ticketService.update(id, dto);
  }

  /** delete the ticket */
  @Delete(':id')
  @ApiOkResponse({ type: String })
  async remove(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO): Promise<string> {
    return await this.ticketService.remove(id, user);
  }

  /** set ticket status */
  @Patch(':id/setStatus')
  @ApiOkResponse({ type: TicketDTO })
  @ApiQuery({ name: 'status', enum: TicketStatus })
  async setStatus(
    @Param('id', ParseObjectIdPipe) id: string,
    @Query('status') status: string,
    @Body('user') user: SessionDTO,
  ): Promise<TicketDTO> {
    return await this.ticketService.setStatus(id, status, user);
  }

  /** set access status */
  @Patch(':id/access/setStatus')
  @ApiQuery({ name: 'status', enum: TicketAccess })
  @ApiOkResponse({ type: TicketDTO })
  async setAccessStatus(
    @Param('id', ParseObjectIdPipe) id: string,
    @Query('status') status: TicketAccess,
    @Body('user') user: SessionDTO,
  ): Promise<TicketDTO> {
    const ticket = await this.ticketService.setAccessStatus(id, status, user);
    return ticket;
  }
}

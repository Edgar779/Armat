import { Controller, Get, Post, Body, Patch, Param, Query } from '@nestjs/common';
import { TicketOrderService } from './ticketOrder.service';
import { CreateTicketOrderDTO, GetTicketOrderQuery, TicketOrderDTO } from './dto';
import { ParseObjectIdPipe, Public } from 'src/util';
import { ACCESS_TOKEN, SessionDTO } from 'src/auth';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('ticket-order')
@ApiTags('Ticket OrderEndpoints')
@ApiHeader({ name: ACCESS_TOKEN })
export class TicketOrderController {
  constructor(private readonly ticketOrderService: TicketOrderService) { }

  /** create ticket order */
  @Post()
  @Public()
  @ApiBody({ type: CreateTicketOrderDTO })
  @ApiOkResponse({ type: TicketOrderDTO })
  async create(@Body() dto: CreateTicketOrderDTO): Promise<TicketOrderDTO[]> {
    return await this.ticketOrderService.create(dto);
  }

  /** find all ticket order by user id */
  @Get()
  @ApiOkResponse({ type: [TicketOrderDTO] })
  async findAll(@Query() dto: GetTicketOrderQuery, @Body('user') user: SessionDTO): Promise<TicketOrderDTO[]> {
    return await this.ticketOrderService.findAll(dto, user);
  }

  /** find all ticket order with admin */
  @Get('ticket/:ticketId/admin')
  @ApiOkResponse({ type: [TicketOrderDTO] })
  async findAllByAdmin(
    @Param('ticketId', ParseObjectIdPipe) ticketId: string,
    @Body('user') user: SessionDTO,
    @Query() dto: GetTicketOrderQuery
  ): Promise<TicketOrderDTO[]> {
    return await this.ticketOrderService.findAllByAdmin(ticketId, dto, user);
  }

  /** get ticket order by id */
  @Get(':id')
  @ApiOkResponse({ type: TicketOrderDTO })
  async findOne(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO) {
    return await this.ticketOrderService.findOne(id, user);
  }

  /** set ticket order status to checked */
  @Patch(':id/setStatus')
  @ApiOkResponse({ type: TicketOrderDTO })
  async checkIn(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO): Promise<TicketOrderDTO> {
    return await this.ticketOrderService.checkIn(id, user);
  }
}

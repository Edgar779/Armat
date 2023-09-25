import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserListDTO } from 'src/userList/dto';
import { ACCESS_TOKEN, SessionDTO } from '../auth';
import { Logger, ParseObjectIdPipe, Public } from '../util';
import {
  ClaimDTO,
  CreateOrgDTO,
  EditOrgDTO,
  EditQuery,
  EditRO,
  EditSocialsDTO,
  OrgDTO,
  QueryDTO,
  SetStatusDTO,
  SocialsDTO,
} from './dto';
import { OrgEditAction, summaries } from './org.constants';
import { OrgService } from './org.service';

@Controller('orgs')
@ApiTags('Organizations')
@ApiHeader({ name: ACCESS_TOKEN })
export class OrgController {
  constructor(private readonly orgService: OrgService) { }

  /** Create a new organization */
  @Post()
  @UseInterceptors(new Logger())
  @ApiBody({ type: CreateOrgDTO })
  @ApiOkResponse({ type: OrgDTO })
  async create(@Body() dto: CreateOrgDTO): Promise<OrgDTO> {
    const org = await this.orgService.create(dto);
    return org;
  }

  /** add user in list */
  @Patch(':id/list')
  @ApiBody({ type: CreateUserListDTO })
  @ApiOkResponse({ type: OrgDTO })
  async addUserList(@Param('id', ParseObjectIdPipe) id: string, @Body() dto: CreateUserListDTO): Promise<OrgDTO> {
    const org = await this.orgService.createUserList(id, dto);
    return org;
  }

  /** duplicate the list */
  @Patch(':id/list/:listId/duplicate')
  @ApiQuery({ name: 'listName' })
  @ApiOkResponse({ type: OrgDTO })
  async duplicateList(
    @Param('id', ParseObjectIdPipe) id: string,
    @Param('listId', ParseObjectIdPipe) listId: string,
    @Query('listName') listName: string,
    @Body('user') user: SessionDTO,
  ): Promise<OrgDTO> {
    const org = await this.orgService.duplicateList(id, listId, listName, user);
    return org;
  }

  /** delete list */
  @Patch(':id/list/:listId/delete')
  @ApiOkResponse({ type: OrgDTO })
  async deleteList(
    @Param('id', ParseObjectIdPipe) id: string,
    @Param('listId', ParseObjectIdPipe) listId: string,
    @Body('user') user: SessionDTO,
  ): Promise<OrgDTO> {
    const org = await this.orgService.deleteList(id, listId, user);
    return org;
  }

  /** Return the suggested edits of an organization */
  @Get(':id/edits')
  @ApiOperation({ summary: summaries.GET_EDITS })
  @ApiOkResponse({ type: OrgDTO })
  async getEdits(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO): Promise<EditRO[]> {
    const edits = await this.orgService.getEdits(id, user);
    return edits;
  }

  /** Process the used suggested edits. Either approve or reject the edit */
  @Patch('edits/:editId')
  @ApiOperation({ summary: summaries.PROCESS_EDITS })
  async processEdit(
    @Param('editId', ParseObjectIdPipe) id: string,
    @Body('user') user: SessionDTO,
    @Query() queries: EditQuery,
  ): Promise<OrgEditAction> {
    const action = await this.orgService.processEdit(id, user, queries.action);
    return action;
  }

  /** Get all organization public */
  @Get()
  @Public()
  @ApiOkResponse({ type: [OrgDTO] })
  async getAll(@Query() filters?: QueryDTO): Promise<OrgDTO[]> {
    const orgs = await this.orgService.getAll(filters);
    return orgs;
  }

  /** Get all organization by user id- can provide a filter by type, paginated */
  @Get('getMyOrgs')
  @ApiOkResponse({ type: [OrgDTO] })
  async getMyOrgs(@Query() filters?: QueryDTO, @Body('user') user?: SessionDTO): Promise<OrgDTO[]> {
    const orgs = await this.orgService.getMyOrgs(filters, user);
    return orgs;
  }

  /** Get Many organizations - use query parameters to control the type */
  @Get('byAdmin')
  @ApiOkResponse({ type: [OrgDTO] })
  async getMany(@Query() filters?: QueryDTO, @Body('user') user?: SessionDTO): Promise<OrgDTO[]> {
    const orgs = await this.orgService.getAllByAdmin(filters, user);
    return orgs;
  }

  /** Get Many organizations - use query parameters to control the type */
  @Get('byMember')
  @ApiOkResponse({ type: [OrgDTO] })
  async getManyByMember(@Query() filters?: QueryDTO, @Body('user') user?: SessionDTO): Promise<OrgDTO[]> {
    const orgs = await this.orgService.getAllByMember(filters, user);
    return orgs;
  }

  /** Set Status of the orgnization */
  @Patch(':id/setStatus')
  @ApiBody({ type: SetStatusDTO })
  @ApiOkResponse({ type: OrgDTO })
  async setStatus(@Param('id', ParseObjectIdPipe) id: string, @Body() dto: SetStatusDTO): Promise<OrgDTO> {
    const org = await this.orgService.setStatus(id, dto);
    return org;
  }

  /** Edit the organization info or suggest the edits if not the owner of the organization */
  @Patch(':id')
  @ApiBody({ type: EditOrgDTO })
  @ApiOkResponse({ type: OrgDTO })
  async edit(@Param('id', ParseObjectIdPipe) id: string, @Body() dto: EditOrgDTO): Promise<OrgDTO> {
    const org = await this.orgService.edit(id, dto);
    return org;
  }

  /** Permenantly remove an organization from the db */
  @Delete(':id')
  async delete(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO): Promise<string> {
    const deletedId = await this.orgService.delete(id, user);
    return deletedId;
  }

  /** Claim a business */
  @Post(':id/claims')
  async claim(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO) {
    return this.orgService.claim(id, user);
  }

  /** Get Followed orgs */
  @Get('followed')
  @ApiOkResponse({ type: [OrgDTO] })
  async getFollowed(@Body('user') user: SessionDTO): Promise<OrgDTO[]> {
    const orgs = await this.orgService.getFollowed(user.id);
    return orgs;
  }

  /** Get a single org */
  @Get(':id')
  @Public()
  @ApiOkResponse({ type: OrgDTO })
  async get(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO): Promise<OrgDTO> {
    const org = await this.orgService.get(id, user);
    return org;
  }

  /** Get all claims belonging to an organization */
  @Get(':id/claims')
  @ApiOkResponse({ type: [ClaimDTO] })
  async getClaims(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO): Promise<ClaimDTO[]> {
    return this.orgService.getClaims(id, user);
  }

  /** Approve a claim and notify the user of the change */
  @Patch('claims/:id')
  async approveClaim(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO) {
    return this.orgService.approveClaim(id, user);
  }

  /** Reject the claim */
  @Delete('claims/:id')
  async rejectClaim(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO) {
    return await this.orgService.rejectClaim(id, user);
  }

  /** Check if the user has claimed the organization or not */
  @Get(':id/claims/hasClaimed')
  async hasClaimed(@Param('id', ParseObjectIdPipe) orgId: string, @Body('user') user: SessionDTO): Promise<boolean> {
    return await this.orgService.hasClaimed(user.id, orgId);
  }

  /** Get the social platforms of an organization */
  @Get(':id/socials')
  @Public()
  @ApiOkResponse({ type: SocialsDTO })
  async getSocials(@Param('id', ParseObjectIdPipe) id: string): Promise<SocialsDTO> {
    const socials = await this.orgService.getSocials(id);
    return socials;
  }

  /** Get the social platforms of an organization */
  @Patch(':id/socials')
  @ApiBody({ type: EditSocialsDTO })
  @ApiOkResponse({ type: SocialsDTO })
  async editSocials(@Param('id', ParseObjectIdPipe) id: string, @Body() dto: EditSocialsDTO): Promise<SocialsDTO> {
    const socials = await this.orgService.editSocials(id, dto);
    return socials;
  }
}

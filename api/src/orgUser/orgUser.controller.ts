import { Body, Controller, Get, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ACCESS_TOKEN, SessionDTO } from 'src/auth';
import { ParseObjectIdPipe } from 'src/util';
import { CreateOrgUserDTO, DeleteOrgUserDTO, GetUserOrgQuery, OrgUserDTO, OrgUserListDTO } from './dto';
import { OrgUserService } from './orgUser.service';
import { Response } from 'express';

@Controller('orgUser')
@ApiTags('orgUsers')
@ApiHeader({ name: ACCESS_TOKEN })
export class OrgUserController {
  constructor(private readonly orgUserService: OrgUserService) {}

  /** create the role */
  @Post('createRole')
  @ApiBody({ type: CreateOrgUserDTO })
  @ApiOkResponse({ type: OrgUserDTO })
  async create(@Body() dto: CreateOrgUserDTO): Promise<OrgUserDTO> {
    return await this.orgUserService.createRole(dto);
  }

  /** update the role */
  @Patch('updateRole')
  @ApiBody({ type: CreateOrgUserDTO })
  @ApiOkResponse({ type: OrgUserDTO })
  async updateRole(@Body() dto: CreateOrgUserDTO): Promise<OrgUserDTO> {
    return await this.orgUserService.updateRole(dto);
  }

  /** delete the roles */
  @Patch('deleteRoles')
  @ApiBody({ type: DeleteOrgUserDTO })
  @ApiOkResponse({ type: String })
  async deleteRoles(@Body() dto: DeleteOrgUserDTO): Promise<string[]> {
    return await this.orgUserService.deleteRoles(dto);
  }

  /** get org users by org id */
  @Get('org/:orgId')
  @ApiOkResponse({ type: [OrgUserDTO] })
  async findAll(
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Body('user') user: SessionDTO,
    @Query() dto: GetUserOrgQuery,
  ): Promise<OrgUserListDTO> {
    return await this.orgUserService.findAll(orgId, dto, user);
  }

  /** get org user by id */
  @Get(':id')
  @ApiOkResponse({ type: OrgUserDTO })
  async findOne(@Param('id', ParseObjectIdPipe) id: string): Promise<OrgUserDTO> {
    return await this.orgUserService.findOne(id);
  }

  /** assign tag */
  @Patch(':id/org/:orgId/tag/:tagId/assign')
  @ApiOkResponse({ type: OrgUserDTO })
  async assignTag(
    @Param('id', ParseObjectIdPipe) id: string,
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Param('tagId', ParseObjectIdPipe) tagId: string,
    @Body('user') user: SessionDTO,
  ): Promise<OrgUserDTO> {
    return await this.orgUserService.assignTag(id, tagId, orgId, user);
  }

  /** unassign tag */
  @Patch(':id/org/:orgId/tag/:tagId/unassign')
  @ApiOkResponse({ type: OrgUserDTO })
  async unassignTag(
    @Param('id', ParseObjectIdPipe) id: string,
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Param('tagId', ParseObjectIdPipe) tagId: string,
    @Body('user') user: SessionDTO,
  ): Promise<OrgUserDTO> {
    return await this.orgUserService.unassignTag(id, tagId, orgId, user);
  }

  /** delete members */
  @Patch('org/:orgId/delete')
  @ApiQuery({ type: Array, name: 'memberIds', required: false })
  @ApiOkResponse({ type: Array })
  async deleteMembers(
    @Query('memberIds') memberIds: [string],
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Body('user') user: SessionDTO,
  ): Promise<string[]> {
    return await this.orgUserService.deleteMembers(memberIds, orgId, user);
  }

  /** export csv file */
  @Post(':orgId/exportCsv')
  async getCsvFile(
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Body('user') user: SessionDTO,
    @Query() dto: GetUserOrgQuery,
    @Res() res: Response,
  ) {
    return await this.orgUserService.getCsvFile(orgId, dto, user, res);
  }
}

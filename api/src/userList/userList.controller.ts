import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ACCESS_TOKEN, SessionDTO } from 'src/auth';
import {
  AssignUserListDTO,
  DeleteUserListDTO,
  EditListDTO,
  GetUserListQuery,
  UserListCountDTO,
  UserListDTO,
} from './dto';
import { ListService } from './userList.service';
import { ParseObjectIdPipe } from 'src/util';

@Controller('list')
@ApiTags('lists')
@ApiHeader({ name: ACCESS_TOKEN })
export class ListController {
  constructor(private readonly listService: ListService) {}

  /** assign user in list */
  @Patch(':id/org/:orgId/assignUser')
  @ApiBody({ type: AssignUserListDTO })
  @ApiOkResponse({ type: UserListDTO })
  async assignUserToList(
    @Param('id', ParseObjectIdPipe) id: string,
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Body() dto: AssignUserListDTO,
  ): Promise<UserListDTO> {
    const list = await this.listService.assignUserToList(id, orgId, dto);
    return list;
  }

  /** get list by org id */
  @Get('org/:orgId')
  @ApiOkResponse({ type: [UserListDTO] })
  async getListsByOrg(
    @Body('user') user: SessionDTO,
    @Param('orgId', ParseObjectIdPipe) orgId: string,
  ): Promise<UserListDTO[]> {
    return await this.listService.getListsByOrg(orgId, user);
  }

  /** get list members with query */
  @Get(':id/org/:orgId')
  @ApiOkResponse({ type: UserListCountDTO })
  async getByQuery(
    @Param('id', ParseObjectIdPipe) id: string,
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Query() dto: GetUserListQuery,
    @Body('user') user: SessionDTO,
  ): Promise<UserListCountDTO> {
    return await this.listService.getByQuery(id, orgId, dto, user);
  }

  /** update list */
  @Patch(':id/org/:orgId/update')
  @ApiBody({ type: EditListDTO })
  @ApiOkResponse({ type: UserListDTO })
  async updateList(
    @Param('id', ParseObjectIdPipe) id: string,
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Body() dto: EditListDTO,
  ): Promise<UserListDTO> {
    const list = await this.listService.update(id, orgId, dto);
    return list;
  }

  /** delete user in list */
  @Patch(':id/org/:orgId/deleteUser')
  @ApiOkResponse({ type: UserListDTO })
  async deleteUserList(
    @Param('id', ParseObjectIdPipe) id: string,
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Body() dto: DeleteUserListDTO,
  ): Promise<UserListDTO> {
    const list = await this.listService.deleteUserList(id, orgId, dto);
    return list;
  }
}

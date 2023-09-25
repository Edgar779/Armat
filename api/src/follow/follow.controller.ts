import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ACCESS_TOKEN, SessionDTO } from 'src/auth';
import { ParseObjectIdPipe } from 'src/util';
import { CreateFollowDTO, FollowDTO } from './dto';
import { summaries } from './follow.constants';
import { FollowService } from './follow.service';

@Controller('follow')
@ApiTags('Follower Endpoints')
export class FollowController {
  constructor(private readonly folloService: FollowService) {}

  /** Follow an organization */
  @Post()
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: CreateFollowDTO })
  @ApiOkResponse({ type: FollowDTO })
  async create(@Body() dto: CreateFollowDTO): Promise<FollowDTO> {
    const follow = await this.folloService.create(dto.user.id, dto.org);
    return follow;
  }

  /** Delete a follow - this is the same as the user unfollowing an organization */
  @Delete(':orgId')
  @ApiHeader({ name: ACCESS_TOKEN })
  async delete(
    @Body('user') user: SessionDTO,
    @Param('orgId', ParseObjectIdPipe) orgId: string,
  ): Promise<string> {
    const deletedId = await this.folloService.delete(user.id, orgId);
    return deletedId;
  }

  /** Get the followes of an organization */
  @Get('myFollows')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOperation({ summary: summaries.GET_FOLLOWS_BY_USER })
  @ApiOkResponse({ type: [FollowDTO] })
  async getFollowing(@Body('user') user: SessionDTO): Promise<FollowDTO[]> {
    const follows = await this.folloService.getByUser(user.id);
    return follows;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDTO, EditTagDTO, TagDTO } from './dto';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ACCESS_TOKEN, SessionDTO } from 'src/auth';
import { ParseObjectIdPipe } from 'src/util';

@Controller('tags')
@ApiTags('tags')
@ApiHeader({ name: ACCESS_TOKEN })
export class TagController {
  constructor(private readonly tagService: TagService) {}

  /** create tag */
  @Post()
  @ApiBody({ type: CreateTagDTO })
  @ApiOkResponse({ type: TagDTO })
  async create(@Body() dto: CreateTagDTO): Promise<TagDTO> {
    return await this.tagService.create(dto);
  }

  /** find all tags */
  @Get('org/:orgId')
  @ApiOkResponse({ type: [TagDTO] })
  async findAll(@Param('orgId', ParseObjectIdPipe) orgId: string, @Body('user') user: SessionDTO): Promise<TagDTO[]> {
    return await this.tagService.findAll(orgId, user);
  }

  /** find tag by id */
  @Get(':id/org/:orgId')
  @ApiOkResponse({ type: TagDTO })
  async findOne(
    @Param('id', ParseObjectIdPipe) id: string,
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Body('user') user: SessionDTO,
  ): Promise<TagDTO> {
    return await this.tagService.findOne(id, orgId, user);
  }

  /** update the tags */
  @Patch(':id/org/:orgId')
  @ApiOkResponse({ type: TagDTO })
  async update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Body() dto: EditTagDTO,
  ) {
    return await this.tagService.update(id, orgId, dto);
  }

  /** delete the tag */
  @Delete(':id/org/:orgId')
  @ApiOkResponse({ type: TagDTO })
  async remove(
    @Param('id', ParseObjectIdPipe) id: string,
    @Param('orgId', ParseObjectIdPipe) orgId: string,
    @Body('user') user: SessionDTO,
  ) {
    return await this.tagService.remove(id, orgId, user);
  }
}

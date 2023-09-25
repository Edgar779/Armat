import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OrgCategoryService } from './orgCategory.service';
import { Role, ACCESS_TOKEN, SessionDTO } from '../auth';
import { AuthService } from '../auth/auth.service';
import { CreateOrgCatDTO, EditOrgCatDTO, OrgCategoryDTO } from './dto';
import { ParseObjectIdPipe, Public } from '../util';

@Controller('orgCategories')
@ApiTags('Organization Categories')
@ApiHeader({ name: ACCESS_TOKEN })
export class OrgCategoryController {
  constructor(private readonly catService: OrgCategoryService, private readonly authService: AuthService) {}

  /** Create a new category */
  @Post()
  @ApiBody({ type: CreateOrgCatDTO })
  @ApiOkResponse({ type: OrgCategoryDTO })
  async create(@Body() dto: CreateOrgCatDTO): Promise<OrgCategoryDTO> {
    this.authService.enforceAccess([Role.ADMIN], dto.user);
    return await this.catService.create(dto);
  }

  /** Edit the category */
  @Patch(':id')
  @ApiBody({ type: EditOrgCatDTO })
  @ApiOkResponse({ type: OrgCategoryDTO })
  async edit(@Param('id', ParseObjectIdPipe) id: string, @Body() dto: EditOrgCatDTO): Promise<OrgCategoryDTO> {
    this.authService.enforceAccess([Role.ADMIN], dto.user);
    return await this.catService.edit(id, dto);
  }

  /** Get the categories in a nested version */
  @Get()
  @Public()
  @ApiOkResponse({ type: [OrgCategoryDTO] })
  async getAll(): Promise<OrgCategoryDTO[]> {
    return await this.catService.getAll();
  }

  /** Get the categories in a nested version */
  @Get(':id')
  @Public()
  @ApiOkResponse({ type: OrgCategoryDTO })
  async get(@Param('id', ParseObjectIdPipe) id: string): Promise<OrgCategoryDTO> {
    return await this.catService.get(id);
  }

  /** Delete a category and its subtree*/
  @Delete(':id')
  @ApiOkResponse({ type: [OrgCategoryDTO] })
  async delete(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO): Promise<OrgCategoryDTO[]> {
    this.authService.enforceAccess([Role.ADMIN], user);
    return await this.catService.delete(id);
  }
}

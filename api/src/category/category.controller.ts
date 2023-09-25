import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { Role, ACCESS_TOKEN, SessionDTO } from '../auth';
import { AuthService } from '../auth/auth.service';
import { CategoryDTO } from './dto';
import { Public } from 'src/util';

@Controller('categories')
@ApiTags('Categories')
@ApiHeader({ name: ACCESS_TOKEN })
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  @Public()
  @ApiOkResponse({ type: [String] })
  async getAll() {
    return await this.categoryService.getAll();
  }

  @Post()
  @ApiOkResponse({ type: [String] })
  async create(@Body() dto: CategoryDTO) {
    this.authService.enforceAccess([Role.ADMIN], dto.user);
    return await this.categoryService.create(dto.categories);
  }

  @Delete()
  @ApiOkResponse({ type: Number })
  async delete(@Body() dto: CategoryDTO): Promise<number> {
    this.authService.enforceAccess([Role.ADMIN], dto.user);
    return await this.categoryService.delete(dto.categories);
  }
}

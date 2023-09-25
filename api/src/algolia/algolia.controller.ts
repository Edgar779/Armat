import { Controller, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/util';
import { AlgoliaService } from './algolia.service';
import { ResultDTO, SearchDTO } from './dto';

@Controller('search')
@ApiTags('Search')
export class AlgoliaController {
  constructor(private readonly algoliaService: AlgoliaService) {}

  @Post()
  @Public()
  @ApiOkResponse({ type: [ResultDTO] })
  async search(@Query() query: SearchDTO): Promise<ResultDTO[]> {
    return await this.algoliaService.search(query);
  }
}

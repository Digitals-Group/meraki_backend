import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Prisma } from '@prisma/client';
import { ArticleEntity } from './entities/article.entity';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  @ApiQuery({ name: 'take', type: Number, required: false })
  @ApiQuery({ name: 'skip', type: Number, required: false })
  findAll(@Query() query: Prisma.ArticleFindManyArgs) {
    return this.articleService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.articleService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articleService.update(id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.articleService.remove(id);
  }
}

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
  UseGuards,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';

@Controller('article')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: Prisma.ArticleCreateArgs) {
    return this.articleService.create(createArticleDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.ArticleFindManyArgs) {
    return this.articleService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.ArticleFindUniqueArgs) {
    return this.articleService.findOne(body);
  }

  @Patch('/update')
  update(@Body() updateArticleDto: Prisma.ArticleUpdateArgs) {
    return this.articleService.update(updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.articleService.remove(id);
  }
}

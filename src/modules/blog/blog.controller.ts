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
import { BlogService } from './blog.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';

@Controller('blog')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createBlogDto: Prisma.BlogCreateArgs) {
    return this.blogService.create(createBlogDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.BlogFindManyArgs) {
    return this.blogService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.BlogFindUniqueArgs) {
    return this.blogService.findOne(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  update(@Body() updateBlogDto: Prisma.BlogUpdateArgs) {
    return this.blogService.update(updateBlogDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.blogService.remove(id);
  }
}

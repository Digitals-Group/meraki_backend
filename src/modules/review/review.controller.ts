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
import { ReviewService } from './review.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';

@Controller('review')
@ApiTags('Review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createReviewDto: Prisma.ReviewCreateArgs) {
    return this.reviewService.create(createReviewDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.ReviewFindManyArgs) {
    return this.reviewService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.ReviewFindUniqueArgs) {
    return this.reviewService.findOne(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  update(@Body() updateReviewDto: Prisma.ReviewUpdateArgs) {
    return this.reviewService.update(updateReviewDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.reviewService.remove(id);
  }
}

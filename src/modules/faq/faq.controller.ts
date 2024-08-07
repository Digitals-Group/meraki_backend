import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { FaqService } from './faq.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';

@Controller('faq')
@ApiTags('FAQ')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createFaqDto: Prisma.FaqCreateArgs) {
    return this.faqService.create(createFaqDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.FaqFindManyArgs) {
    return this.faqService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.FaqFindUniqueArgs) {
    return this.faqService.findOne(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  update(@Body() updateFaqDto: Prisma.FaqUpdateArgs) {
    return this.faqService.update(updateFaqDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.faqService.remove(id);
  }
}

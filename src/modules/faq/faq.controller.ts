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
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('FAQ')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

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

  @Patch('/update')
  update(@Body() updateFaqDto: Prisma.FaqUpdateArgs) {
    return this.faqService.update(updateFaqDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.faqService.remove(id);
  }
}

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
} from '@nestjs/common';
import { FaqService } from './faq.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { query } from 'express';
import { FaqEntity } from './entities/faq.entity';
import { PaginationPipe } from 'src/common/pipes/pagination.pipe';
import { PaginationInterface } from 'src/common/interface';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';

@Controller('faq')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('FAQ')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @Post()
  create(@Body() createFaqDto: CreateFaqDto) {
    return this.faqService.create(createFaqDto);
  }

  @Get()
  @ApiOkResponse({ type: FaqEntity, isArray: true })
  @ApiQuery({ name: 'take', type: Number, required: false })
  @ApiQuery({ name: 'skip', type: Number, required: false })
  @ApiQuery({ name: 'question', type: String, required: false })
  findAll(@Query(new PaginationPipe()) query: PaginationInterface) {
    return this.faqService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', new PaginationPipe()) id: string) {
    return this.faqService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new PaginationPipe()) id: string,
    @Body() updateFaqDto: UpdateFaqDto,
  ) {
    return this.faqService.update(id, updateFaqDto);
  }

  @Delete(':id')
  remove(@Param('id', new PaginationPipe()) id: string) {
    return this.faqService.remove(id);
  }
}

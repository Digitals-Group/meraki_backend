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
import { CareerApplyService } from './career-apply.service';
import { CreateCareerApplyDto } from './dto/create-career-apply.dto';
import { UpdateCareerApplyDto } from './dto/update-career-apply.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CareerApplyEntity } from './entities/career-apply.entity';
import { PaginationPipe } from 'src/common/pipes/pagination.pipe';
import { PaginationInterface } from 'src/common/interface';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';

@Controller('career-apply')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('CareerApply')
export class CareerApplyController {
  constructor(private readonly careerApplyService: CareerApplyService) {}

  @Post()
  create(@Body() createCareerApplyDto: CreateCareerApplyDto) {
    return this.careerApplyService.create(createCareerApplyDto);
  }

  @Get()
  @ApiOkResponse({ type: CareerApplyEntity, isArray: true })
  @ApiQuery({ name: 'take', type: Number, required: false })
  @ApiQuery({ name: 'skip', type: Number, required: false })
  @ApiQuery({ name: 'first_name', type: String, required: false })
  findAll(@Query(new PaginationPipe()) query: PaginationInterface) {
    return this.careerApplyService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.careerApplyService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateCareerApplyDto: UpdateCareerApplyDto,
  ) {
    return this.careerApplyService.update(id, updateCareerApplyDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.careerApplyService.remove(id);
  }
}

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
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';

@Controller('career-apply')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('CareerApply')
export class CareerApplyController {
  constructor(private readonly careerApplyService: CareerApplyService) {}

  @Post()
  create(@Body() createCareerApplyDto: Prisma.CareerApplyCreateArgs) {
    return this.careerApplyService.create(createCareerApplyDto);
  }

  @Post('/list')
  @ApiQuery({ name: 'take', type: Number, required: false })
  findAll(@Body() body: Prisma.CareerApplyFindManyArgs) {
    return this.careerApplyService.findAll(body);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.careerApplyService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateCareerApplyDto: Prisma.CareerApplyUpdateArgs,
  ) {
    return this.careerApplyService.update(id, updateCareerApplyDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.careerApplyService.remove(id);
  }
}

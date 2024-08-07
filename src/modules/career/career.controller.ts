import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CareerService } from './career.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';

@Controller('career')
@ApiTags('Career')
export class CareerController {
  constructor(private readonly careerService: CareerService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCareerDto: Prisma.CareerCreateArgs) {
    return this.careerService.create(createCareerDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.CareerFindManyArgs) {
    return this.careerService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.CareerFindUniqueArgs) {
    return this.careerService.findOne(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  update(@Body() updateCareerDto: Prisma.CareerUpdateArgs) {
    return this.careerService.update(updateCareerDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.careerService.remove(id);
  }
}

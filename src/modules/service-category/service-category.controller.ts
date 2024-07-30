import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ServiceCategoryService } from './service-category.service';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';

@Controller('service-category')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Service-category')
export class ServiceCategoryController {
  constructor(
    private readonly serviceCategoryService: ServiceCategoryService,
  ) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createServiceCategoryDto: Prisma.ServiceCategoryCreateArgs) {
    return this.serviceCategoryService.create(createServiceCategoryDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.ServiceCategoryFindManyArgs) {
    return this.serviceCategoryService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.ServiceCategoryFindUniqueArgs) {
    return this.serviceCategoryService.findOne(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  update(@Body() updateServiceCategoryDto: Prisma.ServiceCategoryUpdateArgs) {
    return this.serviceCategoryService.update(updateServiceCategoryDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.serviceCategoryService.remove(id);
  }
}

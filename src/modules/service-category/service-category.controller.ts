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

  @Post()
  create(@Body() createServiceCategoryDto: Prisma.ServiceCategoryCreateArgs) {
    return this.serviceCategoryService.create(createServiceCategoryDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.ServiceCategoryFindManyArgs) {
    return this.serviceCategoryService.findAll(body);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.serviceCategoryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateServiceCategoryDto: Prisma.ServiceCategoryUpdateArgs,
  ) {
    return this.serviceCategoryService.update(id, updateServiceCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.serviceCategoryService.remove(id);
  }
}

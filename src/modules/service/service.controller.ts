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
import { ServiceService } from './service.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';

@Controller('service')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  create(@Body() createServiceDto: Prisma.ServiceCreateArgs) {
    return this.serviceService.create(createServiceDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.ServiceFindManyArgs) {
    return this.serviceService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.ServiceFindUniqueArgs) {
    return this.serviceService.findOne(body);
  }

  @Patch('/update')
  update(@Body() updateServiceDto: Prisma.ServiceUpdateArgs) {
    return this.serviceService.update(updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.serviceService.remove(id);
  }
}

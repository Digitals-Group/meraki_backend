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
import { ServiceStepService } from './service-step.service';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('service-step')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Service-step')
export class ServiceStepController {
  constructor(private readonly serviceStepService: ServiceStepService) {}

  @Post()
  create(@Body() createServiceStepDto: Prisma.ServiceStepCreateArgs) {
    return this.serviceStepService.create(createServiceStepDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.ServiceStepFindManyArgs) {
    return this.serviceStepService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.ServiceStepFindUniqueArgs) {
    return this.serviceStepService.findOne(body);
  }

  @Patch('/update')
  update(@Body() updateServiceStepDto: Prisma.ServiceStepUpdateArgs) {
    return this.serviceStepService.update(updateServiceStepDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.serviceStepService.remove(id);
  }
}

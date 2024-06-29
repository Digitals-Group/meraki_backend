import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServiceStepService } from './service-step.service';
import { CreateServiceStepDto } from './dto/create-service-step.dto';
import { UpdateServiceStepDto } from './dto/update-service-step.dto';

@Controller('service-step')
export class ServiceStepController {
  constructor(private readonly serviceStepService: ServiceStepService) {}

  @Post()
  create(@Body() createServiceStepDto: CreateServiceStepDto) {
    return this.serviceStepService.create(createServiceStepDto);
  }

  @Post()
  findAll() {
    return this.serviceStepService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceStepService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServiceStepDto: UpdateServiceStepDto,
  ) {
    return this.serviceStepService.update(+id, updateServiceStepDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceStepService.remove(+id);
  }
}

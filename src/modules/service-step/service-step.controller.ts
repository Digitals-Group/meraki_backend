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
import { CreateServiceStepDto } from './dto/create-service-step.dto';
import { UpdateServiceStepDto } from './dto/update-service-step.dto';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { ServiceStepEntity } from './entities/service-step.entity';

@Controller('service-step')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Service-step')
export class ServiceStepController {
  constructor(private readonly serviceStepService: ServiceStepService) {}

  @Post()
  create(@Body() createServiceStepDto: CreateServiceStepDto) {
    return this.serviceStepService.create(createServiceStepDto);
  }

  @Post('/list')
  @ApiOkResponse({ type: ServiceStepEntity, isArray: true })
  findAll(@Body() body: Prisma.ServiceStepFindManyArgs) {
    return this.serviceStepService.findAll(body);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.serviceStepService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateServiceStepDto: UpdateServiceStepDto,
  ) {
    return this.serviceStepService.update(id, updateServiceStepDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.serviceStepService.remove(id);
  }
}

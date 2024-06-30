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
import { ServiceImageService } from './service-image.service';
import { CreateServiceImageDto } from './dto/create-service-image.dto';
import { UpdateServiceImageDto } from './dto/update-service-image.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';
import { ServiceImageEntity } from './entities/service-image.entity';

@Controller('service-image')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Service-images')
export class ServiceImageController {
  constructor(private readonly serviceImageService: ServiceImageService) {}

  @Post()
  create(@Body() createServiceImageDto: CreateServiceImageDto) {
    return this.serviceImageService.create(createServiceImageDto);
  }

  @Post('/list')
  @ApiOkResponse({ type: ServiceImageEntity, isArray: true })
  findAll(@Body() body: Prisma.ServiceImagesFindManyArgs) {
    return this.serviceImageService.findAll(body);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.serviceImageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateServiceImageDto: UpdateServiceImageDto,
  ) {
    return this.serviceImageService.update(id, updateServiceImageDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.serviceImageService.remove(id);
  }
}

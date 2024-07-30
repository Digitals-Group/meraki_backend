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
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';

@Controller('service-image')
@ApiTags('Service-images')
export class ServiceImageController {
  constructor(private readonly serviceImageService: ServiceImageService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createServiceImageDto: Prisma.ServiceImageCreateArgs) {
    return this.serviceImageService.create(createServiceImageDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.ServiceImageFindManyArgs) {
    return this.serviceImageService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.ServiceImageFindUniqueArgs) {
    return this.serviceImageService.findOne(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  update(@Body() updateServiceImageDto: Prisma.ServiceImageUpdateArgs) {
    return this.serviceImageService.update(updateServiceImageDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.serviceImageService.remove(id);
  }
}

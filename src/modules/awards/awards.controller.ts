import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AwardsService } from './awards.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';

@Controller('award')
export class AwardsController {
  constructor(private readonly awardsService: AwardsService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createAwardDto: Prisma.AwardCreateArgs) {
    return this.awardsService.create(createAwardDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.AwardFindManyArgs) {
    return this.awardsService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.AwardFindUniqueArgs) {
    return this.awardsService.findOne(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  update(@Body() updateAwardDto: Prisma.AwardUpdateArgs) {
    return this.awardsService.update(updateAwardDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.awardsService.remove(id);
  }
}

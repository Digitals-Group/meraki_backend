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

@Controller('awards')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Awards')
export class AwardsController {
  constructor(private readonly awardsService: AwardsService) {}

  @Post()
  create(@Body() createAwardDto: Prisma.AwardsCreateArgs) {
    return this.awardsService.create(createAwardDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.AwardsFindManyArgs) {
    return this.awardsService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.AwardsFindUniqueArgs) {
    return this.awardsService.findOne(body);
  }

  @Patch('/update')
  update(@Body() updateAwardDto: Prisma.AwardsUpdateArgs) {
    return this.awardsService.update(updateAwardDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.awardsService.remove(id);
  }
}

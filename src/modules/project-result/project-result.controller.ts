import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { ProjectResultService } from './project-result.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';

@Controller('project-result')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Project-Result')
export class ProjectResultController {
  constructor(private readonly projectResultService: ProjectResultService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createProjectResultDto: Prisma.ProjectResultCreateArgs) {
    return this.projectResultService.create(createProjectResultDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.ProjectResultFindManyArgs) {
    return this.projectResultService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.ProjectResultFindUniqueArgs) {
    return this.projectResultService.findOne(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  update(@Body() updateProjectResultDto: Prisma.ProjectResultUpdateArgs) {
    return this.projectResultService.update(updateProjectResultDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.projectResultService.remove(id);
  }
}

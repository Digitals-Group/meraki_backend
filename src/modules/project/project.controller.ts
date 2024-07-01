import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';

@Controller('project')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: Prisma.ProjectCreateArgs) {
    return this.projectService.create(createProjectDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.ProjectFindManyArgs) {
    return this.projectService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.ProjectFindUniqueArgs) {
    return this.projectService.findOne(body);
  }

  @Patch('/update')
  update(@Body() updateProjectDto: Prisma.ProjectUpdateArgs) {
    return this.projectService.update(updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.projectService.remove(id);
  }
}

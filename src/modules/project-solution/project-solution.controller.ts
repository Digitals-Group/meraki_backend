import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProjectSolutionService } from './project-solution.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';

@Controller('project-solution')
@ApiTags('Project-Solution')
export class ProjectSolutionController {
  constructor(
    private readonly projectSolutionService: ProjectSolutionService,
  ) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createProjectSolutionDto: Prisma.ProjectSolutionCreateArgs) {
    return this.projectSolutionService.create(createProjectSolutionDto);
  }

  @Post('/list')
  @ApiOkResponse({ type: ProjectSolutionController, isArray: true })
  findAll(@Body() body: Prisma.ProjectSolutionFindManyArgs) {
    return this.projectSolutionService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.ProjectSolutionFindUniqueArgs) {
    return this.projectSolutionService.findOne(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  update(@Body() updateProjectSolutionDto: Prisma.ProjectSolutionUpdateArgs) {
    return this.projectSolutionService.update(updateProjectSolutionDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.projectSolutionService.remove(id);
  }
}

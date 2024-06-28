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
import { CreateProjectSolutionDto } from './dto/create-project-solution.dto';
import { UpdateProjectSolutionDto } from './dto/update-project-solution.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';

@Controller('project-solution')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Project-Solution')
export class ProjectSolutionController {
  constructor(
    private readonly projectSolutionService: ProjectSolutionService,
  ) {}

  @Post()
  create(@Body() createProjectSolutionDto: CreateProjectSolutionDto) {
    return this.projectSolutionService.create(createProjectSolutionDto);
  }

  @Get()
  @ApiOkResponse({ type: ProjectSolutionController, isArray: true })
  @ApiQuery({ name: 'take', type: Number, required: false })
  @ApiQuery({ name: 'skip', type: Number, required: false })
  findAll(@Query() query: Prisma.ProjectSolutionFindManyArgs) {
    return this.projectSolutionService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.projectSolutionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateProjectSolutionDto: UpdateProjectSolutionDto,
  ) {
    return this.projectSolutionService.update(id, updateProjectSolutionDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.projectSolutionService.remove(id);
  }
}

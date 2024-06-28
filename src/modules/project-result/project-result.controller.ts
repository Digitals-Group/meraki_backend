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
import { CreateProjectResultDto } from './dto/create-project-result.dto';
import { UpdateProjectResultDto } from './dto/update-project-result.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { ProjectResultEntity } from './entities/project-result.entity';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';

@Controller('project-result')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Project-Result')
export class ProjectResultController {
  constructor(private readonly projectResultService: ProjectResultService) {}

  @Post()
  create(@Body() createProjectResultDto: CreateProjectResultDto) {
    return this.projectResultService.create(createProjectResultDto);
  }

  @Get()
  @ApiOkResponse({ type: ProjectResultEntity, isArray: true })
  @ApiQuery({ name: 'take', type: Number, required: false })
  @ApiQuery({ name: 'skip', type: Number, required: false })
  findAll(@Query() query: Prisma.ProjectResultFindManyArgs) {
    return this.projectResultService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.projectResultService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateProjectResultDto: UpdateProjectResultDto,
  ) {
    return this.projectResultService.update(id, updateProjectResultDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.projectResultService.remove(id);
  }
}

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

  @Post('/list')
  @ApiOkResponse({ type: ProjectResultEntity, isArray: true })
  findAll(@Body() body: Prisma.ProjectResultFindManyArgs) {
    return this.projectResultService.findAll(body);
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

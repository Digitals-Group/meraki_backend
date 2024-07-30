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
import { ProjectCategoryService } from './project-category.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';

@Controller('project-category')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Project-Category')
export class ProjectCategoryController {
  constructor(
    private readonly projectCategoryService: ProjectCategoryService,
  ) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createProjectCategoryDto: Prisma.ProjectCategoryCreateArgs) {
    return this.projectCategoryService.create(createProjectCategoryDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.ProjectCategoryFindManyArgs) {
    return this.projectCategoryService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.ProjectCategoryFindUniqueArgs) {
    return this.projectCategoryService.findOne(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  update(@Body() updateProjectCategoryDto: Prisma.ProjectCategoryUpdateArgs) {
    return this.projectCategoryService.update(updateProjectCategoryDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.projectCategoryService.remove(id);
  }
}

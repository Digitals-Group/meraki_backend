import { Injectable } from '@nestjs/common';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectCategoryDto } from './dto/update-project-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProjectCategoryDto: CreateProjectCategoryDto) {
    return this.prisma.projectCategory.create({
      data: createProjectCategoryDto,
    });
  }

  async findAll(body: Prisma.ProjectCategoryFindManyArgs) {
    return {
      data: await this.prisma.projectCategory.findMany(body),
      count: await this.prisma.projectCategory.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.projectCategory.findUnique({ where: { id } });
  }

  update(id: string, updateProjectCategoryDto: UpdateProjectCategoryDto) {
    return this.prisma.projectCategory.update({
      where: { id },
      data: updateProjectCategoryDto,
    });
  }

  remove(id: string) {
    return this.prisma.projectCategory.delete({ where: { id } });
  }
}

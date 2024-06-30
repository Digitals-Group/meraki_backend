import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProjectCategoryDto: Prisma.ProjectCategoryCreateArgs) {
    return this.prisma.projectCategory.create(createProjectCategoryDto);
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

  update(
    id: string,
    updateProjectCategoryDto: Prisma.ProjectCategoryUpdateArgs,
  ) {
    return this.prisma.projectCategory.update(updateProjectCategoryDto);
  }

  remove(id: string) {
    return this.prisma.projectCategory.delete({ where: { id } });
  }
}

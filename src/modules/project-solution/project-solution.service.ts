import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectSolutionService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProjectSolutionDto: Prisma.ProjectSolutionCreateArgs) {
    return this.prisma.projectSolution.create(createProjectSolutionDto);
  }

  async findAll(body: Prisma.ProjectSolutionFindManyArgs) {
    return {
      data: await this.prisma.projectSolution.findMany(body),
      count: await this.prisma.projectSolution.count(),
    };
  }

  findOne(body: Prisma.ProjectSolutionFindUniqueArgs) {
    return this.prisma.projectSolution.findUnique(body);
  }

  update(updateProjectSolutionDto: Prisma.ProjectSolutionUpdateArgs) {
    return this.prisma.projectSolution.update(updateProjectSolutionDto);
  }

  remove(id: string) {
    return this.prisma.projectSolution.delete({ where: { id } });
  }
}

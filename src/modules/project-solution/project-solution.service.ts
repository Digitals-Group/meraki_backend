import { Injectable } from '@nestjs/common';
import { CreateProjectSolutionDto } from './dto/create-project-solution.dto';
import { UpdateProjectSolutionDto } from './dto/update-project-solution.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { count } from 'console';

@Injectable()
export class ProjectSolutionService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProjectSolutionDto: CreateProjectSolutionDto) {
    return this.prisma.projectSolution.create({
      data: createProjectSolutionDto,
    });
  }

  async findAll(query: Prisma.ProjectSolutionFindManyArgs) {
    return {
      data: await this.prisma.projectSolution.findMany(query),
      count: await this.prisma.projectSolution.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.projectSolution.findUnique({ where: { id } });
  }

  update(id: string, updateProjectSolutionDto: UpdateProjectSolutionDto) {
    return this.prisma.projectSolution.update({
      where: { id },
      data: updateProjectSolutionDto,
    });
  }

  remove(id: string) {
    return this.prisma.projectSolution.delete({ where: { id } });
  }
}

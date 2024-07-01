import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}
  create(createProjectDto: Prisma.ProjectCreateArgs) {
    return this.prisma.project.create(createProjectDto);
  }

  async findAll(body: Prisma.ProjectFindManyArgs) {
    return {
      data: await this.prisma.project.findMany(body),
      count: await this.prisma.career.count(),
    };
  }

  findOne(body: Prisma.ProjectFindUniqueArgs) {
    return this.prisma.project.findUnique(body);
  }

  update(updateProjectDto: Prisma.ProjectUpdateArgs) {
    return this.prisma.project.update(updateProjectDto);
  }

  remove(id: string) {
    return this.prisma.project.delete({ where: { id } });
  }
}

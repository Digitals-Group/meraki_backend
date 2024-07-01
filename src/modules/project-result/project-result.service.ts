import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { count } from 'console';

@Injectable()
export class ProjectResultService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProjectResultDto: Prisma.ProjectResultCreateArgs) {
    return this.prisma.projectResult.create(createProjectResultDto);
  }

  async findAll(body: Prisma.ProjectResultFindManyArgs) {
    return {
      data: await this.prisma.projectResult.findMany(body),
      count: await this.prisma.projectResult.count(),
    };
  }

  findOne(body: Prisma.ProjectResultFindUniqueArgs) {
    return this.prisma.projectResult.findUnique(body);
  }

  update(updateProjectResultDto: Prisma.ProjectResultUpdateArgs) {
    return this.prisma.projectResult.update(updateProjectResultDto);
  }

  remove(id: string) {
    return this.prisma.projectResult.delete({ where: { id } });
  }
}

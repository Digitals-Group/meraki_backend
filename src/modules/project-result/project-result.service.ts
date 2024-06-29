import { Injectable } from '@nestjs/common';
import { CreateProjectResultDto } from './dto/create-project-result.dto';
import { UpdateProjectResultDto } from './dto/update-project-result.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { count } from 'console';

@Injectable()
export class ProjectResultService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProjectResultDto: CreateProjectResultDto) {
    return this.prisma.projectResult.create({ data: createProjectResultDto });
  }

  async findAll(body: Prisma.ProjectResultFindManyArgs) {
    return {
      data: await this.prisma.projectResult.findMany(body),
      count: await this.prisma.projectResult.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.projectResult.findUnique({ where: { id } });
  }

  update(id: string, updateProjectResultDto: UpdateProjectResultDto) {
    return this.prisma.projectResult.update({
      where: { id },
      data: updateProjectResultDto,
    });
  }

  remove(id: string) {
    return this.prisma.projectResult.delete({ where: { id } });
  }
}

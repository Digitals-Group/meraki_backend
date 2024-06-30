import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { count } from 'console';

@Injectable()
export class ServiceStepService {
  constructor(private readonly prisma: PrismaService) {}
  create(createServiceStepDto: Prisma.ServiceStepCreateArgs) {
    return this.prisma.serviceStep.create(createServiceStepDto);
  }

  async findAll(body: Prisma.ServiceStepFindManyArgs) {
    return {
      data: await this.prisma.serviceStep.findMany(body),
      count: await this.prisma.serviceStep.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.serviceStep.findUnique({ where: { id } });
  }

  update(id: string, updateServiceStepDto: Prisma.ServiceStepUpdateArgs) {
    return this.prisma.serviceStep.update(updateServiceStepDto);
  }

  remove(id: string) {
    return this.prisma.serviceStep.delete({ where: { id } });
  }
}

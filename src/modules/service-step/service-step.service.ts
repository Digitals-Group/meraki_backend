import { Injectable } from '@nestjs/common';
import { CreateServiceStepDto } from './dto/create-service-step.dto';
import { UpdateServiceStepDto } from './dto/update-service-step.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { count } from 'console';

@Injectable()
export class ServiceStepService {
  constructor(private readonly prisma: PrismaService) {}
  create(createServiceStepDto: CreateServiceStepDto) {
    return this.prisma.serviceStep.create({ data: createServiceStepDto });
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

  update(id: string, updateServiceStepDto: UpdateServiceStepDto) {
    return this.prisma.serviceStep.update({
      where: { id },
      data: updateServiceStepDto,
    });
  }

  remove(id: string) {
    return this.prisma.serviceStep.delete({ where: { id } });
  }
}

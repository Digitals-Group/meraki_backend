import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { count } from 'console';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  create(createServiceDto: Prisma.ServiceCreateArgs) {
    return this.prisma.service.create(createServiceDto);
  }

  async findAll(body: Prisma.ServiceFindManyArgs) {
    return {
      data: await this.prisma.service.findMany(body),
      count: await this.prisma.service.count(),
    };
  }

  findOne(body: Prisma.ServiceFindUniqueArgs) {
    return this.prisma.service.findUnique(body);
  }

  update(updateServiceDto: Prisma.ServiceUpdateArgs) {
    return this.prisma.service.update(updateServiceDto);
  }

  remove(id: string) {
    return this.prisma.service.delete({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, PrismaClient } from '@prisma/client';
import { count } from 'console';

@Injectable()
export class ServiceCategoryService {
  constructor(private readonly prisma: PrismaService) {}
  create(createServiceCategoryDto: Prisma.ServiceCategoryCreateArgs) {
    return this.prisma.serviceCategory.create(createServiceCategoryDto);
  }

  async findAll(body: Prisma.ServiceCategoryFindManyArgs) {
    return {
      data: await this.prisma.serviceCategory.findMany(body),
      count: await this.prisma.serviceCategory.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.serviceCategory.findUnique({ where: { id } });
  }

  update(
    id: string,
    updateServiceCategoryDto: Prisma.ServiceCategoryUpdateArgs,
  ) {
    return this.prisma.serviceCategory.update(updateServiceCategoryDto);
  }

  remove(id: string) {
    return this.prisma.serviceCategory.delete({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateServiceCategoryDto } from './dto/create-service-category.dto';
import { UpdateServiceCategoryDto } from './dto/update-service-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, PrismaClient } from '@prisma/client';
import { count } from 'console';

@Injectable()
export class ServiceCategoryService {
  constructor(private readonly prisma: PrismaService) {}
  create(createServiceCategoryDto: CreateServiceCategoryDto) {
    return this.prisma.serviceCategory.create({
      data: createServiceCategoryDto,
    });
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

  update(id: string, updateServiceCategoryDto: UpdateServiceCategoryDto) {
    return this.prisma.serviceCategory.update({
      where: { id },
      data: updateServiceCategoryDto,
    });
  }

  remove(id: string) {
    return this.prisma.serviceCategory.delete({ where: { id } });
  }
}

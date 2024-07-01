import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ServiceImageService {
  constructor(private readonly prisma: PrismaService) {}
  create(createServiceImageDto: Prisma.ServiceImagesCreateArgs) {
    return this.prisma.serviceImages.create(createServiceImageDto);
  }

  async findAll(body: Prisma.ServiceImagesFindFirstArgs) {
    return {
      data: await this.prisma.serviceImages.findMany(body),
      count: await this.prisma.serviceImages.count(),
    };
  }

  findOne(body: Prisma.ServiceImagesFindUniqueArgs) {
    return this.prisma.serviceImages.findUnique(body);
  }

  update(updateServiceImageDto: Prisma.ServiceImagesUpdateArgs) {
    return this.prisma.serviceImages.update(updateServiceImageDto);
  }

  remove(id: string) {
    return this.prisma.serviceImages.delete({ where: { id } });
  }
}

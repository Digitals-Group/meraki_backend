import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ServiceImageService {
  constructor(private readonly prisma: PrismaService) {}
  create(createServiceImageDto: Prisma.ServiceImageCreateArgs) {
    return this.prisma.serviceImage.create(createServiceImageDto);
  }

  async findAll(body: Prisma.ServiceImageFindFirstArgs) {
    return {
      data: await this.prisma.serviceImage.findMany(body),
      count: await this.prisma.serviceImage.count(),
    };
  }

  findOne(body: Prisma.ServiceImageFindUniqueArgs) {
    return this.prisma.serviceImage.findUnique(body);
  }

  update(updateServiceImageDto: Prisma.ServiceImageUpdateArgs) {
    return this.prisma.serviceImage.update(updateServiceImageDto);
  }

  remove(id: string) {
    return this.prisma.serviceImage.delete({ where: { id } });
  }
}

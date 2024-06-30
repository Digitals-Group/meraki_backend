import { Injectable } from '@nestjs/common';
import { CreateServiceImageDto } from './dto/create-service-image.dto';
import { UpdateServiceImageDto } from './dto/update-service-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ServiceImageService {
  constructor(private readonly prisma: PrismaService) {}
  create(createServiceImageDto: CreateServiceImageDto) {
    return this.prisma.serviceImages.create({ data: createServiceImageDto });
  }

  async findAll(body: Prisma.ServiceImagesFindFirstArgs) {
    return {
      data: await this.prisma.serviceImages.findMany(body),
      count: await this.prisma.serviceImages.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.serviceImages.findUnique({ where: { id } });
  }

  update(id: string, updateServiceImageDto: UpdateServiceImageDto) {
    return this.prisma.serviceImages.update({
      where: { id },
      data: updateServiceImageDto,
    });
  }

  remove(id: string) {
    return this.prisma.serviceImages.delete({ where: { id } });
  }
}

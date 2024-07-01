import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CareerService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCareerDto: Prisma.CareerCreateArgs) {
    return this.prisma.career.create(createCareerDto);
  }

  async findAll(body: Prisma.CareerFindManyArgs) {
    return {
      data: await this.prisma.career.findMany(body),
      count: await this.prisma.career.count(),
    };
  }

  findOne(body: Prisma.CareerFindUniqueArgs) {
    return this.prisma.career.findUnique(body);
  }

  update(updateCareerDto: Prisma.CareerUpdateArgs) {
    return this.prisma.career.update(updateCareerDto);
  }

  remove(id: string) {
    return this.prisma.career.delete({ where: { id } });
  }
}

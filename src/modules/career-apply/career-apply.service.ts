import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CareerApplyService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCareerApplyDto: Prisma.CareerApplyCreateArgs) {
    return this.prisma.careerApply.create(createCareerApplyDto);
  }

  async findAll(body: Prisma.CareerApplyFindManyArgs) {
    return {
      data: await this.prisma.careerApply.findMany(body),
      count: await this.prisma.careerApply.count(),
    };
  }

  findOne(body: Prisma.CareerApplyFindUniqueArgs) {
    return this.prisma.careerApply.findUnique(body);
  }

  update(updateCareerApplyDto: Prisma.CareerApplyUpdateArgs) {
    return this.prisma.careerApply.update(updateCareerApplyDto);
  }

  remove(id: string) {
    return this.prisma.careerApply.delete({ where: { id } });
  }
}

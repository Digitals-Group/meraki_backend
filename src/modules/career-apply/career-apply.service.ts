import { Injectable } from '@nestjs/common';
import { CreateCareerApplyDto } from './dto/create-career-apply.dto';
import { UpdateCareerApplyDto } from './dto/update-career-apply.dto';

import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CareerApplyService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCareerApplyDto: CreateCareerApplyDto) {
    return this.prisma.careerApply.create({ data: createCareerApplyDto });
  }

  async findAll(query: Prisma.CareerApplyFindManyArgs) {
    return {
      data: await this.prisma.careerApply.findMany(query),
      count: await this.prisma.careerApply.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.careerApply.findUnique({ where: { id } });
  }

  update(id: string, updateCareerApplyDto: UpdateCareerApplyDto) {
    return this.prisma.careerApply.update({
      where: { id },
      data: updateCareerApplyDto,
    });
  }

  remove(id: string) {
    return this.prisma.careerApply.delete({ where: { id } });
  }
}

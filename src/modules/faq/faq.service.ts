import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FaqService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFaqDto: Prisma.FaqCreateArgs) {
    return this.prisma.faq.create(createFaqDto);
  }

  async findAll(body: Prisma.FaqFindManyArgs) {
    return {
      data: await this.prisma.faq.findMany(),
      count: await this.prisma.faq.count(),
    };
  }

  findOne(body: Prisma.FaqFindUniqueArgs) {
    return this.prisma.faq.findUnique(body);
  }

  update(updateFaqDto: Prisma.FaqUpdateArgs) {
    return this.prisma.faq.update(updateFaqDto);
  }

  remove(id: string) {
    return this.prisma.faq.delete({ where: { id } });
  }
}

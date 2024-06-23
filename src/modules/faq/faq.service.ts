import { Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FaqService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFaqDto: CreateFaqDto) {
    return this.prisma.faq.create({ data: createFaqDto });
  }

  async findAll(query: Prisma.FaqFindManyArgs) {
    return {
      data: await this.prisma.faq.findMany(),
      count: await this.prisma.faq.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.faq.findUnique({ where: { id } });
  }

  update(id: string, updateFaqDto: UpdateFaqDto) {
    return this.prisma.faq.update({ where: { id }, data: updateFaqDto });
  }

  remove(id: string) {
    return this.prisma.faq.delete({ where: { id } });
  }
}

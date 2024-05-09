import { Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationInterface } from 'src/common/interface';

@Injectable()
export class FaqService {
  constructor(private readonly prisma: PrismaClient) {}
  create(createFaqDto: CreateFaqDto) {
    return this.prisma.faq.create({ data: createFaqDto });
  }

  findAll(query: PaginationInterface) {
    return this.prisma.faq.findMany({
      skip: +query.skip,
      take: +query.take,
      orderBy: [
        {
          createdAt: 'asc',
        },
        {
          question: query.question,
        },
      ],
    });
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

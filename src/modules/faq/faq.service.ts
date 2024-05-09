import { Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { PaginationInterface } from 'src/common/interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FaqService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFaqDto: CreateFaqDto) {
    return this.prisma.faq.create({ data: createFaqDto });
  }

  findAll(query: PaginationInterface) {
    return this.prisma.faq.findMany({
      skip: +query.skip,
      take: +query.take,
      orderBy: [
        {
          question: query.question,
        },
        {
          createdAt: 'asc',
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

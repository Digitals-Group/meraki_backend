import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PaginationInterface } from 'src/common/interface';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaClient) {}
  create(createReviewDto: CreateReviewDto) {
    return this.prisma.review.create({ data: createReviewDto });
  }

  findAll(query: PaginationInterface) {
    return this.prisma.review.findMany({
      skip: +query.skip,
      take: +query.take,
      orderBy: [
        {
          createdAt: 'asc',
        },
        {
          name: query.name,
        },
      ],
    });
  }
  findOne(id: string) {
    return this.prisma.review.findUnique({ where: { id } });
  }

  update(id: string, updateReviewDto: UpdateReviewDto) {
    return this.prisma.review.update({ where: { id }, data: updateReviewDto });
  }

  remove(id: string) {
    return this.prisma.review.delete({ where: { id } });
  }
}

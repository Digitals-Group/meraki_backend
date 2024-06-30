import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaService) {}
  create(createReviewDto: Prisma.ReviewCreateArgs) {
    return this.prisma.review.create(createReviewDto);
  }

  async findAll(body: Prisma.ReviewFindManyArgs) {
    return {
      data: await this.prisma.review.findMany(body),
      count: await this.prisma.review.count(),
    };
  }
  findOne(id: string) {
    return this.prisma.review.findUnique({ where: { id } });
  }

  update(id: string, updateReviewDto: Prisma.ReviewUpdateArgs) {
    return this.prisma.review.update(updateReviewDto);
  }

  remove(id: string) {
    return this.prisma.review.delete({ where: { id } });
  }
}

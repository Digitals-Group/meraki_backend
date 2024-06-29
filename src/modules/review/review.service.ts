import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaService) {}
  create(createReviewDto: CreateReviewDto) {
    return this.prisma.review.create({ data: createReviewDto });
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

  update(id: string, updateReviewDto: UpdateReviewDto) {
    return this.prisma.review.update({ where: { id }, data: updateReviewDto });
  }

  remove(id: string) {
    return this.prisma.review.delete({ where: { id } });
  }
}

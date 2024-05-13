import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PaginationInterface } from 'src/common/interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { count } from 'console';

@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaService) {}
  create(createReviewDto: CreateReviewDto) {
    return this.prisma.review.create({ data: createReviewDto });
  }

  async findAll(query: PaginationInterface) {
    return {
      data: await this.prisma.review.findMany({
        skip: +query.skip,
        take: +query.take,
        orderBy: [
          {
            name: query.name,
          },
          {
            createdAt: 'asc',
          },
        ],
      }),
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

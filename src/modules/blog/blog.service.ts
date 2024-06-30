import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { Prisma } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBlogDto: Prisma.BlogCreateArgs) {
    return this.prisma.blog.create(createBlogDto);
  }

  async findAll(body: Prisma.BlogFindManyArgs) {
    return {
      data: await this.prisma.blog.findMany(body),
      count: await this.prisma.blog.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.blog.findUnique({ where: { id } });
  }

  update(id: string, updateBlogDto: Prisma.BlogUpdateArgs) {
    return this.prisma.blog.update(updateBlogDto);
  }
  remove(id: string) {
    return this.prisma.blog.delete({ where: { id } });
  }
}

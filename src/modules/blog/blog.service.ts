import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

import { Prisma } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBlogDto: CreateBlogDto) {
    return this.prisma.blog.create({ data: createBlogDto });
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

  update(id: string, updateBlogDto: UpdateBlogDto) {
    return this.prisma.blog.update({ where: { id }, data: updateBlogDto });
  }
  remove(id: string) {
    return this.prisma.blog.delete({ where: { id } });
  }
}

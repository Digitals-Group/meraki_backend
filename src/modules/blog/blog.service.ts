import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationInterface } from 'src/common/interface';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBlogDto: CreateBlogDto) {
    return this.prisma.blog.create({ data: createBlogDto });
  }

  findAll(query: PaginationInterface) {
    return this.prisma.blog.findMany({
      skip: +query.skip,
      take: +query.take,
      orderBy: [
        {
          title: query.title,
        },
        {
          createdAt: 'asc',
        },
      ],
    });
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

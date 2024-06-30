import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}

  create(createArticleDto: Prisma.ArticleCreateArgs) {
    return this.prisma.article.create(createArticleDto);
  }

  async findAll(body: Prisma.ArticleFindManyArgs) {
    return {
      data: await this.prisma.article.findMany(body),
      count: await this.prisma.article.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.article.findUnique({ where: { id } });
  }

  update(id: string, updateArticleDto: Prisma.ArticleUpdateArgs) {
    return this.prisma.article.update(updateArticleDto);
  }

  remove(id: string) {
    return this.prisma.article.delete({ where: { id } });
  }
}

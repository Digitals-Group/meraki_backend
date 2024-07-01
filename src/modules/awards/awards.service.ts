import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AwardsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAwardDto: Prisma.AwardCreateArgs) {
    return this.prisma.award.create(createAwardDto);
  }

  async findAll(body: Prisma.AwardFindManyArgs) {
    return {
      data: await this.prisma.award.findMany(body),
      count: await this.prisma.award.count(),
    };
  }

  findOne(body: Prisma.AwardFindUniqueArgs) {
    return this.prisma.award.findUnique(body);
  }

  update(updateAwardDto: Prisma.AwardUpdateArgs) {
    return this.prisma.award.update(updateAwardDto);
  }

  remove(id: string) {
    return this.prisma.award.delete({ where: { id } });
  }
}

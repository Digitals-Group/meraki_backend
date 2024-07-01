import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AwardsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAwardDto: Prisma.AwardsCreateArgs) {
    return this.prisma.awards.create(createAwardDto);
  }

  async findAll(body: Prisma.AwardsFindManyArgs) {
    return {
      data: await this.prisma.awards.findMany(body),
      count: await this.prisma.awards.count(),
    };
  }

  findOne(body: Prisma.AwardsFindUniqueArgs) {
    return this.prisma.awards.findUnique(body);
  }

  update(updateAwardDto: Prisma.AwardsUpdateArgs) {
    return this.prisma.awards.update(updateAwardDto);
  }

  remove(id: string) {
    return this.prisma.awards.delete({ where: { id } });
  }
}

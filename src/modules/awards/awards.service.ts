import { Injectable } from '@nestjs/common';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AwardsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAwardDto: CreateAwardDto) {
    return this.prisma.awards.create({ data: createAwardDto });
  }

  async findAll(body: Prisma.AwardsFindManyArgs) {
    return {
      data: await this.prisma.awards.findMany(body),
      count: await this.prisma.awards.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.awards.findUnique({ where: { id } });
  }

  update(id: string, updateAwardDto: UpdateAwardDto) {
    return this.prisma.awards.update({ where: { id }, data: updateAwardDto });
  }

  remove(id: string) {
    return this.prisma.awards.delete({ where: { id } });
  }
}

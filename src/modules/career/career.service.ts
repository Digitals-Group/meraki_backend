import { Injectable } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CareerService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCareerDto: CreateCareerDto) {
    return this.prisma.career.create({ data: createCareerDto });
  }

  async findAll(body: Prisma.CareerFindManyArgs) {
    return {
      data: await this.prisma.career.findMany(body),
      count: await this.prisma.career.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.career.findUnique({ where: { id } });
  }

  update(id: string, updateCareerDto: UpdateCareerDto) {
    return this.prisma.career.update({
      where: { id },
      data: updateCareerDto,
    });
  }

  remove(id: string) {
    return this.prisma.career.delete({ where: { id } });
  }
}

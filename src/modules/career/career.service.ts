import { Injectable } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationPipe } from 'src/common/pipes/pagination.pipe';
import { PaginationInterface } from 'src/common/interface';
import { count } from 'console';

@Injectable()
export class CareerService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCareerDto: CreateCareerDto) {
    return this.prisma.career.create({ data: createCareerDto });
  }

  async findAll(query: PaginationInterface) {
    return {
      data: await this.prisma.career.findMany({
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

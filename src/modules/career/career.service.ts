import { Injectable } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationPipe } from 'src/common/pipes/pagination.pipe';
import { PaginationInterface } from 'src/common/interface';

@Injectable()
export class CareerService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCareerDto: CreateCareerDto) {
    return this.prisma.career.create({ data: createCareerDto });
  }

  findAll(query: PaginationInterface) {
    return this.prisma.career.findMany({
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
    });
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

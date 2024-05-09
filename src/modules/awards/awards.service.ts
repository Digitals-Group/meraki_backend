import { Injectable } from '@nestjs/common';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationInterface } from 'src/common/interface';

@Injectable()
export class AwardsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAwardDto: CreateAwardDto) {
    return this.prisma.awards.create({ data: createAwardDto });
  }

  findAll(query: PaginationInterface) {
    return this.prisma.awards.findMany({
      skip: +query.skip,
      take: +query.take,
      orderBy: [
        {
          createdAt: 'asc',
        },
        {
          title: query.name,
        },
      ],
    });
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

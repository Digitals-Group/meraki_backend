import { Injectable } from '@nestjs/common';
import { CreateCareerApplyDto } from './dto/create-career-apply.dto';
import { UpdateCareerApplyDto } from './dto/update-career-apply.dto';
import { PaginationInterface } from 'src/common/interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CareerApplyService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCareerApplyDto: CreateCareerApplyDto) {
    return this.prisma.careerApply.create({ data: createCareerApplyDto });
  }

  findAll(query: PaginationInterface) {
    return this.prisma.careerApply.findMany({
      skip: +query.skip,
      take: +query.take,
      orderBy: [
        {
          createdAt: 'asc',
        },
        {
          first_name: query.first_name,
        },
      ],
    });
  }

  findOne(id: string) {
    return this.prisma.careerApply.findUnique({ where: { id } });
  }

  update(id: string, updateCareerApplyDto: UpdateCareerApplyDto) {
    return this.prisma.careerApply.update({
      where: { id },
      data: updateCareerApplyDto,
    });
  }

  remove(id: string) {
    return this.prisma.careerApply.delete({ where: { id } });
  }
}

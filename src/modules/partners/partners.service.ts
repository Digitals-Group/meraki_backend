import { Injectable } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { PaginationInterface } from 'src/common/interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { count } from 'console';

@Injectable()
export class PartnersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPartnerDto: CreatePartnerDto) {
    return this.prisma.partners.create({ data: createPartnerDto });
  }

  async findAll(query: PaginationInterface) {
    return {
      data: await this.prisma.partners.findMany({
        skip: +query.skip,
        take: +query.take,
        orderBy: [
          {
            image: query.image,
          },
          {
            createdAt: 'asc',
          },
        ],
      }),
      count: await this.prisma.partners.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.partners.findUnique({ where: { id } });
  }

  update(id: string, updatePartnerDto: UpdatePartnerDto) {
    return this.prisma.partners.update({
      where: { id },
      data: updatePartnerDto,
    });
  }

  remove(id: string) {
    return this.prisma.partners.delete({ where: { id } });
  }
}

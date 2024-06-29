import { Injectable } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';

import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PartnersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPartnerDto: CreatePartnerDto) {
    return this.prisma.partners.create({ data: createPartnerDto });
  }

  async findAll(body: Prisma.PartnersFindManyArgs) {
    return {
      data: await this.prisma.partners.findMany(body),
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

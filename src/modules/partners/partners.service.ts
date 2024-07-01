import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PartnersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPartnerDto: Prisma.PartnerCreateArgs) {
    return this.prisma.partner.create(createPartnerDto);
  }

  async findAll(body: Prisma.PartnerFindManyArgs) {
    return {
      data: await this.prisma.partner.findMany(body),
      count: await this.prisma.partner.count(),
    };
  }

  findOne(body: Prisma.PartnerFindUniqueArgs) {
    return this.prisma.partner.findUnique(body);
  }

  update(updatePartnerDto: Prisma.PartnerUpdateArgs) {
    return this.prisma.partner.update(updatePartnerDto);
  }

  remove(id: string) {
    return this.prisma.partner.delete({ where: { id } });
  }
}

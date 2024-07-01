import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PartnersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPartnerDto: Prisma.PartnersCreateArgs) {
    return this.prisma.partners.create(createPartnerDto);
  }

  async findAll(body: Prisma.PartnersFindManyArgs) {
    return {
      data: await this.prisma.partners.findMany(body),
      count: await this.prisma.partners.count(),
    };
  }

  findOne(body: Prisma.PartnersFindUniqueArgs) {
    return this.prisma.partners.findUnique(body);
  }

  update(updatePartnerDto: Prisma.PartnersUpdateArgs) {
    return this.prisma.partners.update(updatePartnerDto);
  }

  remove(id: string) {
    return this.prisma.partners.delete({ where: { id } });
  }
}

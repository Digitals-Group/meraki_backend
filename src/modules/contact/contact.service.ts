import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  create(createContactDto: Prisma.ContactCreateArgs) {
    return this.prisma.contact.create(createContactDto);
  }

  async findAll(body: Prisma.ContactFindManyArgs) {
    return {
      data: await this.prisma.contact.findMany(body),
      count: await this.prisma.contact.count(),
    };
  }

  findOne(body: Prisma.ContactFindUniqueArgs) {
    return this.prisma.contact.findUnique(body);
  }

  update(updateContactDto: Prisma.ContactUpdateArgs) {
    return this.prisma.contact.update(updateContactDto);
  }

  remove(id: string) {
    return this.prisma.contact.delete({ where: { id } });
  }
}

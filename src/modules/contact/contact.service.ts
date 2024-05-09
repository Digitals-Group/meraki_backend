import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Prisma, PrismaClient } from '@prisma/client';
import { PaginationInterface } from 'src/common/interface';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaClient) {}

  create(createContactDto: CreateContactDto) {
    return this.prisma.contact.create({ data: createContactDto });
  }

  findAll(query: PaginationInterface) {
    return this.prisma.contact.findMany({
      skip: +query.skip,
      take: +query.take,
      orderBy: [
        {
          createdAt: 'asc',
        },
        {
          name: query.name,
        },
      ],
    });
  }

  findOne(id: string) {
    return this.prisma.contact.findUnique({ where: { id } });
  }

  update(id: string, updateContactDto: UpdateContactDto) {
    return this.prisma.contact.update({
      where: { id },
      data: updateContactDto,
    });
  }

  remove(id: string) {
    return this.prisma.contact.delete({ where: { id } });
  }
}

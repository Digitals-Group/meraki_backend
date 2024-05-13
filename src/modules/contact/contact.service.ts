import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PaginationInterface } from 'src/common/interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { count } from 'console';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  create(createContactDto: CreateContactDto) {
    return this.prisma.contact.create({ data: createContactDto });
  }

  async findAll(query: PaginationInterface) {
    return {
      data: await this.prisma.contact.findMany({
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
      count: await this.prisma.contact.count(),
    };
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

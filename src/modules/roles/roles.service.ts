import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationInterface } from 'src/common/interface';
import { count } from 'console';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRoleDto: CreateRoleDto) {
    return this.prisma.roles.create({ data: createRoleDto });
  }

  async findAll(query: PaginationInterface) {
    return {
      data: await this.prisma.roles.findMany({
        include: {
          permissions: true,
          users: true,
        },
        skip: query.skip,
        take: query.take,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      count: await this.prisma.roles.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.roles.findUnique({ where: { id } });
  }

  update(id: string, updateRoleDto: UpdateRoleDto) {
    return this.prisma.roles.update({ where: { id }, data: updateRoleDto });
  }

  remove(id: string) {
    return this.prisma.roles.delete({ where: { id } });
  }
}

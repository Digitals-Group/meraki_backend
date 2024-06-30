import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateAuthDto } from '../auth/dto/update-auth.dto';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRoleDto: Prisma.RolesCreateArgs) {
    return this.prisma.roles.create(createRoleDto);
  }

  async findAll(body: Prisma.RolesFindManyArgs) {
    return {
      data: await this.prisma.roles.findMany(body),
      count: await this.prisma.roles.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.roles.findUnique({ where: { id } });
  }

  update(id: string, updateRoleDto: Prisma.RolesUpdateArgs) {
    return this.prisma.roles.update(updateRoleDto);
  }

  remove(id: string) {
    return this.prisma.roles.delete({ where: { id } });
  }
}

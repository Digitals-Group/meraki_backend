import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateAuthDto } from '../auth/dto/update-auth.dto';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRoleDto: Prisma.RoleCreateArgs) {
    return this.prisma.role.create(createRoleDto);
  }

  async findAll(body: Prisma.RoleFindManyArgs) {
    return {
      data: await this.prisma.role.findMany(body),
      count: await this.prisma.role.count(),
    };
  }

  findOne(body: Prisma.RoleFindUniqueArgs) {
    return this.prisma.role.findUnique(body);
  }

  update(updateRoleDto: Prisma.RoleUpdateArgs) {
    return this.prisma.role.update(updateRoleDto);
  }

  remove(id: string) {
    return this.prisma.role.delete({ where: { id } });
  }
}

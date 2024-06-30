import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: Prisma.UserCreateArgs) {
    const hashedPassword = await bcrypt.hash(createUserDto.data.password, 10);

    createUserDto.data.password = hashedPassword;

    return this.prisma.user.create(createUserDto);
  }

  async findAll(body: Prisma.UserFindManyArgs) {
    return {
      data: await this.prisma.user.findMany(body),
      count: await this.prisma.user.count(),
    };
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { roles: true },
    });
  }

  async update(id: string, updateUserDto: Prisma.UserUpdateArgs) {
    if (updateUserDto.data.password) {
      updateUserDto.data.password = await bcrypt.hash(
        updateUserDto.data.password,
        10,
      );
    }
    return this.prisma.user.update(updateUserDto);
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}

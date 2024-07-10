import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamService {
  constructor(private readonly Prisma: PrismaService) {}
  create(createTeamDto: Prisma.TeamCreateArgs) {
    return this.Prisma.team.create(createTeamDto);
  }

  async findAll(body: Prisma.TeamFindManyArgs) {
    return {
      data: await this.Prisma.team.findMany(body),
      count: await this.Prisma.team.count(),
    };
  }

  findOne(body: Prisma.TeamFindUniqueArgs) {
    return this.Prisma.team.findUnique(body);
  }

  update(updateTeamDto: Prisma.TeamUpdateArgs) {
    return this.Prisma.team.update(updateTeamDto);
  }

  remove(id: string) {
    return this.Prisma.team.delete({ where: { id } });
  }
}

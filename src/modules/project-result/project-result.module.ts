import { Module } from '@nestjs/common';
import { ProjectResultService } from './project-result.service';
import { ProjectResultController } from './project-result.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProjectResultController],
  providers: [ProjectResultService, PrismaService],
})
export class ProjectResultModule {}

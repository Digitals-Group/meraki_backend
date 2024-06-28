import { Module } from '@nestjs/common';
import { ProjectSolutionService } from './project-solution.service';
import { ProjectSolutionController } from './project-solution.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProjectSolutionController],
  providers: [ProjectSolutionService, PrismaService],
})
export class ProjectSolutionModule {}

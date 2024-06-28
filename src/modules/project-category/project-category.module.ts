import { Module } from '@nestjs/common';
import { ProjectCategoryService } from './project-category.service';
import { ProjectCategoryController } from './project-category.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProjectCategoryController],
  providers: [ProjectCategoryService, PrismaService],
})
export class ProjectCategoryModule {}

import { Module } from '@nestjs/common';
import { ServiceCategoryService } from './service-category.service';
import { ServiceCategoryController } from './service-category.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ServiceCategoryController],
  providers: [ServiceCategoryService, PrismaService],
})
export class ServiceCategoryModule {}

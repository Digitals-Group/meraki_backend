import { Module } from '@nestjs/common';
import { ServiceImageService } from './service-image.service';
import { ServiceImageController } from './service-image.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ServiceImageController],
  providers: [ServiceImageService, PrismaService],
})
export class ServiceImageModule {}

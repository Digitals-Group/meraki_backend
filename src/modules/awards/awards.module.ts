import { Module } from '@nestjs/common';
import { AwardsService } from './awards.service';
import { AwardsController } from './awards.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AwardsController],
  providers: [AwardsService, PrismaService],
})
export class AwardsModule {}

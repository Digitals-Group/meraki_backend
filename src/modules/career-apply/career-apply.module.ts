import { Module } from '@nestjs/common';
import { CareerApplyService } from './career-apply.service';
import { CareerApplyController } from './career-apply.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CareerApplyController],
  providers: [CareerApplyService, PrismaService],
})
export class CareerApplyModule {}

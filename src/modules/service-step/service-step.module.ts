import { Module } from '@nestjs/common';
import { ServiceStepService } from './service-step.service';
import { ServiceStepController } from './service-step.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ServiceStepController],
  providers: [ServiceStepService, PrismaService],
})
export class ServiceStepModule {}

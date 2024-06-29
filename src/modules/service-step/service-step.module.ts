import { Module } from '@nestjs/common';
import { ServiceStepService } from './service-step.service';
import { ServiceStepController } from './service-step.controller';

@Module({
  controllers: [ServiceStepController],
  providers: [ServiceStepService],
})
export class ServiceStepModule {}

import { PartialType } from '@nestjs/swagger';
import { CreateServiceStepDto } from './create-service-step.dto';

export class UpdateServiceStepDto extends PartialType(CreateServiceStepDto) {}

import { Injectable } from '@nestjs/common';
import { CreateServiceStepDto } from './dto/create-service-step.dto';
import { UpdateServiceStepDto } from './dto/update-service-step.dto';

@Injectable()
export class ServiceStepService {
  create(createServiceStepDto: CreateServiceStepDto) {
    return 'This action adds a new serviceStep';
  }

  findAll() {
    return `This action returns all serviceStep`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceStep`;
  }

  update(id: number, updateServiceStepDto: UpdateServiceStepDto) {
    return `This action updates a #${id} serviceStep`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceStep`;
  }
}

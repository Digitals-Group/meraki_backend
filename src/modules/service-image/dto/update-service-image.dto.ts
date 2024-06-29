import { PartialType } from '@nestjs/swagger';
import { CreateServiceImageDto } from './create-service-image.dto';

export class UpdateServiceImageDto extends PartialType(CreateServiceImageDto) {}

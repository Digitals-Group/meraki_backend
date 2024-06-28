import { PartialType } from '@nestjs/swagger';
import { CreateProjectResultDto } from './create-project-result.dto';

export class UpdateProjectResultDto extends PartialType(CreateProjectResultDto) {}

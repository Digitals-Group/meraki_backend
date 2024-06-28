import { PartialType } from '@nestjs/swagger';
import { CreateProjectSolutionDto } from './create-project-solution.dto';

export class UpdateProjectSolutionDto extends PartialType(CreateProjectSolutionDto) {}

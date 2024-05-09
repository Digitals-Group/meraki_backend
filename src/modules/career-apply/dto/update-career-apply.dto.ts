import { PartialType } from '@nestjs/mapped-types';
import { CreateCareerApplyDto } from './create-career-apply.dto';

export class UpdateCareerApplyDto extends PartialType(CreateCareerApplyDto) {}

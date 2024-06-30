import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFaqDto {
  @ApiProperty()
  @IsString()
  question_uz: string;
  @ApiProperty()
  @IsString()
  question_ru: string;
  @ApiProperty()
  @IsString()
  question_en: string;

  @ApiProperty()
  @IsString()
  answer_uz: string;
  @ApiProperty()
  @IsString()
  answer_ru: string;
  @ApiProperty()
  @IsString()
  answer_en: string;
}

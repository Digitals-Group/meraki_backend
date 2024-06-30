import { ApiProperty } from '@nestjs/swagger';
import { Faq } from '@prisma/client';

export class FaqEntity implements Faq {
  @ApiProperty()
  id: string;
  @ApiProperty()
  question_uz: string;
  @ApiProperty()
  question_ru: string;
  @ApiProperty()
  question_en: string;
  @ApiProperty()
  answer_uz: string;
  @ApiProperty()
  answer_ru: string;
  @ApiProperty()
  answer_en: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

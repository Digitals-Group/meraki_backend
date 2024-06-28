import { ApiProperty } from '@nestjs/swagger';
import { Faq } from '@prisma/client';

export class FaqEntity implements Faq {
  @ApiProperty()
  id: string;
  @ApiProperty()
  question: string;
  @ApiProperty()
  answer: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

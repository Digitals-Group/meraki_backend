import { ApiProperty } from '@nestjs/swagger';
import { Review } from '@prisma/client';

export class ReviewEntity implements Review {
  @ApiProperty()
  id: string;
  @ApiProperty()
  video: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  name_uz: string;
  @ApiProperty()
  name_ru: string;
  @ApiProperty()
  name_en: string;
  @ApiProperty()
  company_name: string;
  @ApiProperty()
  position: string;
  @ApiProperty()
  review_text: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

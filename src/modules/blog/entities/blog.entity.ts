import { ApiProperty } from '@nestjs/swagger';
import { Blog } from '@prisma/client';

export class BlogEntity implements Blog {
  @ApiProperty()
  id: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  title_uz: string;
  @ApiProperty()
  title_ru: string;
  @ApiProperty()
  title_en: string;
  @ApiProperty()
  description_uz: string;
  @ApiProperty()
  description_ru: string;
  @ApiProperty()
  description_en: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

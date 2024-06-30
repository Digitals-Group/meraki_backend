import { ApiProperty } from '@nestjs/swagger';

export class ArticleEntity {
  @ApiProperty()
  id: string;

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
  content: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

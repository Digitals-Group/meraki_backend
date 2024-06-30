import { ApiProperty } from '@nestjs/swagger';

export class ProjectEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title_uz: string;
  @ApiProperty()
  title_ru: string;
  @ApiProperty()
  title_en: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  description_uz: string;
  @ApiProperty()
  description_ru: string;
  @ApiProperty()
  description_en: string;

  @ApiProperty()
  resultDescription_uz: string;
  @ApiProperty()
  resultDescription_ru: string;
  @ApiProperty()
  resultDescription_en: string;

  @ApiProperty()
  projectCategoryId: string;
}

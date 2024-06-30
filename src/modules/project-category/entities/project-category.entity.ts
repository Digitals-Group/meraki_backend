import { ApiProperty } from '@nestjs/swagger';

export class ProjectCategoryEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title_uz: string;
  @ApiProperty()
  title_ru: string;
  @ApiProperty()
  title_en: string;
}

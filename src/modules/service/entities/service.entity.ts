import { ApiProperty } from '@nestjs/swagger';

export class ServiceEntity {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title_uz: string;
  @ApiProperty()
  title_ru: string;
  @ApiProperty()
  title_en: string;
  @ApiProperty()
  video: string;
  @ApiProperty()
  serviceCategoryId: string;
  @ApiProperty()
  contactId: string;
}

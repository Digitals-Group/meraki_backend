import { ApiProperty } from '@nestjs/swagger';
import { Awards } from '@prisma/client';

export class AwardEntity implements Awards {
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
  image: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

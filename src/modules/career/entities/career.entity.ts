import { ApiProperty } from '@nestjs/swagger';
import { Career } from '@prisma/client';

export class CareerEntity implements Career {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name_uz: string;
  @ApiProperty()
  name_ru: string;
  @ApiProperty()
  name_en: string;
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

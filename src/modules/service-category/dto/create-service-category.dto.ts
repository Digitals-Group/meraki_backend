import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateServiceCategoryDto {
  @ApiProperty()
  @IsString()
  title_uz: string;
  @IsString()
  title_ru: string;
  @IsString()
  title_en: string;
  @ApiProperty()
  @IsString()
  image: string;
}

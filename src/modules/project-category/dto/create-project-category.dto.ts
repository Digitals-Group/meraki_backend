import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title_uz: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title_ru: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title_en: string;
}

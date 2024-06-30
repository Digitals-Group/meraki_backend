import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCareerDto {
  @ApiProperty()
  @IsString()
  name_uz: string;
  @ApiProperty()
  @IsString()
  name_ru: string;
  @ApiProperty()
  @IsString()
  name_en: string;

  @ApiProperty()
  @IsString()
  description_uz: string;

  @ApiProperty()
  @IsString()
  description_ru: string;

  @ApiProperty()
  @IsString()
  description_en: string;
}

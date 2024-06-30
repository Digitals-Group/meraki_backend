import { ApiProperty } from '@nestjs/swagger';
import { IsString, isString } from 'class-validator';

export class CreateAwardDto {
  @ApiProperty()
  @IsString()
  title_uz: string;
  @ApiProperty()
  @IsString()
  title_ru: string;
  @ApiProperty()
  @IsString()
  title_en: string;

  @ApiProperty()
  @IsString()
  description_uz: string;
  @ApiProperty()
  @IsString()
  description_ru: string;
  @ApiProperty()
  @IsString()
  description_en: string;

  @ApiProperty()
  @IsString()
  image: string;
}

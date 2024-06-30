import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty()
  @IsString()
  video: string;

  @ApiProperty()
  @IsString()
  image: string;

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
  company_name: string;

  @ApiProperty()
  @IsString()
  position: string;

  @ApiProperty()
  @IsString()
  review_text: string;
}

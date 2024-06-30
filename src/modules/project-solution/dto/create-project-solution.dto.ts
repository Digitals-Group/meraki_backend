import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectSolutionDto {
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

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description_uz: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description_ru: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description_en: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  projectId: string;
}

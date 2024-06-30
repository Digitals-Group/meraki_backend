import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ description: 'The title of the project' })
  @IsString()
  @IsNotEmpty()
  title_uz: string;

  @ApiProperty({ description: 'The title of the project' })
  @IsString()
  @IsNotEmpty()
  title_ru: string;
  @ApiProperty({ description: 'The title of the project' })
  @IsString()
  @IsNotEmpty()
  title_en: string;

  @ApiProperty({ description: 'The URL of the image for the project' })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({ description: 'The description of the project' })
  @IsString()
  @IsNotEmpty()
  description_uz: string;

  @ApiProperty({ description: 'The description of the project' })
  @IsString()
  @IsNotEmpty()
  description_ru: string;

  @ApiProperty({ description: 'The description of the project' })
  @IsString()
  @IsNotEmpty()
  description_en: string;

  @ApiProperty({ description: 'The result description of the project' })
  @IsString()
  @IsNotEmpty()
  resultDescription_uz: string;

  @ApiProperty({ description: 'The result description of the project' })
  @IsString()
  @IsNotEmpty()
  resultDescription_ru: string;

  @ApiProperty({ description: 'The result description of the project' })
  @IsString()
  @IsNotEmpty()
  resultDescription_en: string;

  @ApiProperty({ description: 'The ID of the related project category' })
  @IsString()
  @IsNotEmpty()
  projectCategoryId: string;
}

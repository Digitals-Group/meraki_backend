import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ description: 'The title of the project' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'The URL of the image for the project' })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({ description: 'The description of the project' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'The result description of the project' })
  @IsString()
  @IsNotEmpty()
  resultDescription: string;

  @ApiProperty({ description: 'The ID of the related project category' })
  @IsString()
  @IsNotEmpty()
  projectCategoryId: string;
}

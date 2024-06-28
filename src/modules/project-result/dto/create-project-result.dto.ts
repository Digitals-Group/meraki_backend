import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectResultDto {
  @ApiProperty({ description: 'The URL of the image for the project result' })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({ description: 'The ID of the related project' })
  @IsString()
  @IsNotEmpty()
  projectId: string;
}

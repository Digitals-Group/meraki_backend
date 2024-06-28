import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;
}

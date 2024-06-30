import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty()
  @IsString()
  title_uz: string;
  @IsString()
  title_ru: string;
  @IsString()
  title_en: string;
  @ApiProperty()
  @IsString()
  video: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  serviceCategoryId: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  contactId: string;
}

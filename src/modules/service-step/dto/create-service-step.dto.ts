import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateServiceStepDto {
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
  @IsNotEmpty()
  serviceId: string;
}

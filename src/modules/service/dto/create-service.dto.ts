import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty()
  @IsString()
  title: string;
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

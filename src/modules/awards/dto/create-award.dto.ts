import { ApiProperty } from '@nestjs/swagger';
import { IsString, isString } from 'class-validator';

export class CreateAwardDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  image: string;
}

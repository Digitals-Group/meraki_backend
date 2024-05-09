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
  name: string;

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

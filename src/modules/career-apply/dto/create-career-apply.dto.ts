import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateCareerApplyDto {
  @ApiProperty()
  @IsString()
  first_name: string;

  @ApiProperty()
  @IsString()
  last_name: string;

  @ApiProperty()
  @IsString()
  phone_number: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  career_id: string;

  @ApiProperty()
  @IsString()
  resume: string;

  @ApiProperty()
  @IsString()
  cover_letter: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  is_Called?: boolean;
}

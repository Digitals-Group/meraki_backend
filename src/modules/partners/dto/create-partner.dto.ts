import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePartnerDto {
  @ApiProperty()
  @IsString()
  image: string;
}

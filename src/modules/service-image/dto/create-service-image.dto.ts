import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateServiceImageDto {
  @ApiProperty()
  @IsString()
  image: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  serviceId: string;
}

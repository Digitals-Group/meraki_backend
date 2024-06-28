import { ApiProperty } from '@nestjs/swagger';
import { Awards } from '@prisma/client';

export class AwardEntity implements Awards {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

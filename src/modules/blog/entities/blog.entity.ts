import { ApiProperty } from '@nestjs/swagger';
import { Blog } from '@prisma/client';

export class BlogEntity implements Blog {
  @ApiProperty()
  id: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

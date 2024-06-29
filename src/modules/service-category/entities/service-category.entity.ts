import { ApiProperty } from '@nestjs/swagger';

export class ServiceCategoryEntity {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  image: string;
}

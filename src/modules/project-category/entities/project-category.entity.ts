import { ApiProperty } from '@nestjs/swagger';

export class ProjectCategoryEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;
}

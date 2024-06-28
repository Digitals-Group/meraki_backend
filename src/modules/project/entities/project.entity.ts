import { ApiProperty } from '@nestjs/swagger';

export class ProjectEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  resultDescription: string;

  @ApiProperty()
  projectCategoryId: string;
}

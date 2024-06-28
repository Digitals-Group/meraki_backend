import { ApiProperty } from '@nestjs/swagger';

export class ProjectSolutionEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  projectId: string;
}

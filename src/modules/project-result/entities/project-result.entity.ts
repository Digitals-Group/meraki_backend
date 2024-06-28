import { ApiProperty } from '@nestjs/swagger';

export class ProjectResultEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  image: string;

  @ApiProperty()
  projectId: string;
}

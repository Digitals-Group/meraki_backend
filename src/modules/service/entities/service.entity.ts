import { ApiProperty } from '@nestjs/swagger';

export class ServiceEntity {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  video: string;
  @ApiProperty()
  serviceCategoryId: string;
  @ApiProperty()
  contactId: string;
}

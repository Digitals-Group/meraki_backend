import { ApiProperty } from '@nestjs/swagger';

export class ServiceImageEntity {
  @ApiProperty()
  id: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  serviceId: string;
}

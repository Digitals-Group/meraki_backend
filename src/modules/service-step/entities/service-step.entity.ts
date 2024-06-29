import { ApiProperty } from '@nestjs/swagger';

export class ServiceStepEntity {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  serviceId: string;
}

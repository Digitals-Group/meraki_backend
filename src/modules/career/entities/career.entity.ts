import { ApiProperty } from '@nestjs/swagger';
import { Career } from '@prisma/client';

export class CareerEntity implements Career {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

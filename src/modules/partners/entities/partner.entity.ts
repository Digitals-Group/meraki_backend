import { ApiProperty } from '@nestjs/swagger';
import { Partners } from '@prisma/client';

export class PartnerEntity implements Partners {
  @ApiProperty()
  id: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

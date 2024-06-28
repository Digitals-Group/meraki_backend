import { ApiProperty } from '@nestjs/swagger';
import { CareerApply } from '@prisma/client';

export class CareerApplyEntity implements CareerApply {
  @ApiProperty()
  id: string;
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  phone_number: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  career_id: string;
  @ApiProperty()
  resume: string;
  @ApiProperty()
  cover_letter: string;
  @ApiProperty()
  is_Called: boolean;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

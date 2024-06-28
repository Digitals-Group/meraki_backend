import { ApiProperty } from '@nestjs/swagger';
import { Contact } from '@prisma/client';

export class ContactEntity implements Contact {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  company_name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone_number: string;
  @ApiProperty()
  service: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  take_info: string;
  @ApiProperty()
  is_Called: boolean;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

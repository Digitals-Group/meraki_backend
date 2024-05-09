import { Contact } from '@prisma/client';

export class ContactEntity implements Contact {
  id: string;
  name: string;
  company_name: string;
  email: string;
  phone_number: string;
  service: string;
  description: string;
  take_info: string;
  is_Called: boolean;
  createdAt: Date;
  updatedAt: Date;
}

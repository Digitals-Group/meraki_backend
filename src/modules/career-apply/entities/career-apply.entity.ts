import { CareerApply } from '@prisma/client';

export class CareerApplyEntity implements CareerApply {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  career_id: string;
  resume: string;
  cover_letter: string;
  is_Called: boolean;
  createdAt: Date;
  updatedAt: Date;
}

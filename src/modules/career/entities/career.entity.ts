import { Career } from '@prisma/client';

export class CareerEntity implements Career {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

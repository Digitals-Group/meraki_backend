import { Partners } from '@prisma/client';

export class PartnerEntity implements Partners {
  id: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

import { Awards } from '@prisma/client';

export class AwardEntity implements Awards {
  id: string;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

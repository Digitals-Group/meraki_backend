import { Faq } from '@prisma/client';

export class FaqEntity implements Faq {
  id: string;
  question: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
}

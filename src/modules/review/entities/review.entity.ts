import { Review } from '@prisma/client';

export class ReviewEntity implements Review {
  id: string;
  video: string;
  image: string;
  name: string;
  company_name: string;
  position: string;
  review_text: string;
  createdAt: Date;
  updatedAt: Date;
}

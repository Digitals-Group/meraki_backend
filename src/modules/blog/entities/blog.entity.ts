import { Blog } from '@prisma/client';

export class BlogEntity implements Blog {
  id: string;
  image: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

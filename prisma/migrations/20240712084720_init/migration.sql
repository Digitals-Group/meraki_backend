/*
  Warnings:

  - You are about to drop the column `contactId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `facebook` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `jobPosition` on the `Team` table. All the data in the column will be lost.
  - Added the required column `jobPosition_en` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobPosition_ru` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobPosition_uz` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_contactId_fkey";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "contactId";

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "facebook",
DROP COLUMN "jobPosition",
ADD COLUMN     "facebookLink" TEXT,
ADD COLUMN     "jobPosition_en" TEXT NOT NULL,
ADD COLUMN     "jobPosition_ru" TEXT NOT NULL,
ADD COLUMN     "jobPosition_uz" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_ServiceContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceContacts_AB_unique" ON "_ServiceContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceContacts_B_index" ON "_ServiceContacts"("B");

-- AddForeignKey
ALTER TABLE "_ServiceContacts" ADD CONSTRAINT "_ServiceContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceContacts" ADD CONSTRAINT "_ServiceContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `JobPosition` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `SocialMedia` on the `Team` table. All the data in the column will be lost.
  - Added the required column `jobPosition` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_en` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_uz` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "JobPosition",
DROP COLUMN "SocialMedia",
ADD COLUMN     "facebook" TEXT,
ADD COLUMN     "instagramLink" TEXT,
ADD COLUMN     "jobPosition" TEXT NOT NULL,
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_ru" TEXT NOT NULL,
ADD COLUMN     "name_uz" TEXT NOT NULL,
ADD COLUMN     "telegramLink" TEXT;

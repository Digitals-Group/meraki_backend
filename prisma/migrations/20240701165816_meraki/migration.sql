/*
  Warnings:

  - You are about to drop the column `description` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Career` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Career` table. All the data in the column will be lost.
  - You are about to drop the column `answer` on the `Faq` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `Faq` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `resultDescription` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `ProjectCategory` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ProjectSolution` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `ProjectSolution` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `ServiceCategory` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ServiceStep` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `ServiceStep` table. All the data in the column will be lost.
  - You are about to drop the `Awards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Partners` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Permissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceImages` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[title_uz]` on the table `Article` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title_ru]` on the table `Article` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title_en]` on the table `Article` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title_uz]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title_ru]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title_en]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description_en` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_ru` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_uz` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_en` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_ru` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_uz` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_en` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_ru` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_uz` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_en` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_ru` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_uz` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_en` to the `Career` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_ru` to the `Career` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_uz` to the `Career` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_en` to the `Career` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `Career` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_uz` to the `Career` table without a default value. This is not possible if the table is not empty.
  - Added the required column `answer_en` to the `Faq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `answer_ru` to the `Faq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `answer_uz` to the `Faq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question_en` to the `Faq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question_ru` to the `Faq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question_uz` to the `Faq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_en` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_ru` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_uz` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resultDescription_en` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resultDescription_ru` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resultDescription_uz` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_en` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_ru` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_uz` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_en` to the `ProjectCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_ru` to the `ProjectCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_uz` to the `ProjectCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_eng` to the `ProjectSolution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_ru` to the `ProjectSolution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_uz` to the `ProjectSolution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_en` to the `ProjectSolution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_ru` to the `ProjectSolution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_uz` to the `ProjectSolution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_en` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_uz` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_en` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_ru` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_uz` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_en` to the `ServiceCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_ru` to the `ServiceCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_uz` to the `ServiceCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_en` to the `ServiceStep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_ru` to the `ServiceStep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_uz` to the `ServiceStep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_en` to the `ServiceStep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_ru` to the `ServiceStep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_uz` to the `ServiceStep` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Permissions" DROP CONSTRAINT "Permissions_role_id_fkey";

-- DropForeignKey
ALTER TABLE "ServiceImages" DROP CONSTRAINT "ServiceImages_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_role_id_fkey";

-- DropIndex
DROP INDEX "Article_title_key";

-- DropIndex
DROP INDEX "Blog_title_key";

-- AlterTable
ALTER TABLE "Article" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "description_en" TEXT NOT NULL,
ADD COLUMN     "description_ru" TEXT NOT NULL,
ADD COLUMN     "description_uz" TEXT NOT NULL,
ADD COLUMN     "title_en" TEXT NOT NULL,
ADD COLUMN     "title_ru" TEXT NOT NULL,
ADD COLUMN     "title_uz" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "description_en" TEXT NOT NULL,
ADD COLUMN     "description_ru" TEXT NOT NULL,
ADD COLUMN     "description_uz" TEXT NOT NULL,
ADD COLUMN     "title_en" TEXT NOT NULL,
ADD COLUMN     "title_ru" TEXT NOT NULL,
ADD COLUMN     "title_uz" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Career" DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "description_en" TEXT NOT NULL,
ADD COLUMN     "description_ru" TEXT NOT NULL,
ADD COLUMN     "description_uz" TEXT NOT NULL,
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_ru" TEXT NOT NULL,
ADD COLUMN     "name_uz" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Faq" DROP COLUMN "answer",
DROP COLUMN "question",
ADD COLUMN     "answer_en" TEXT NOT NULL,
ADD COLUMN     "answer_ru" TEXT NOT NULL,
ADD COLUMN     "answer_uz" TEXT NOT NULL,
ADD COLUMN     "question_en" TEXT NOT NULL,
ADD COLUMN     "question_ru" TEXT NOT NULL,
ADD COLUMN     "question_uz" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "description",
DROP COLUMN "resultDescription",
DROP COLUMN "title",
ADD COLUMN     "description_en" TEXT NOT NULL,
ADD COLUMN     "description_ru" TEXT NOT NULL,
ADD COLUMN     "description_uz" TEXT NOT NULL,
ADD COLUMN     "resultDescription_en" TEXT NOT NULL,
ADD COLUMN     "resultDescription_ru" TEXT NOT NULL,
ADD COLUMN     "resultDescription_uz" TEXT NOT NULL,
ADD COLUMN     "title_en" TEXT NOT NULL,
ADD COLUMN     "title_ru" TEXT NOT NULL,
ADD COLUMN     "title_uz" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProjectCategory" DROP COLUMN "title",
ADD COLUMN     "title_en" TEXT NOT NULL,
ADD COLUMN     "title_ru" TEXT NOT NULL,
ADD COLUMN     "title_uz" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProjectSolution" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "description_eng" TEXT NOT NULL,
ADD COLUMN     "description_ru" TEXT NOT NULL,
ADD COLUMN     "description_uz" TEXT NOT NULL,
ADD COLUMN     "title_en" TEXT NOT NULL,
ADD COLUMN     "title_ru" TEXT NOT NULL,
ADD COLUMN     "title_uz" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "name",
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_ru" TEXT NOT NULL,
ADD COLUMN     "name_uz" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "title",
ADD COLUMN     "title_en" TEXT NOT NULL,
ADD COLUMN     "title_ru" TEXT NOT NULL,
ADD COLUMN     "title_uz" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ServiceCategory" DROP COLUMN "title",
ADD COLUMN     "title_en" TEXT NOT NULL,
ADD COLUMN     "title_ru" TEXT NOT NULL,
ADD COLUMN     "title_uz" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ServiceStep" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "description_en" TEXT NOT NULL,
ADD COLUMN     "description_ru" TEXT NOT NULL,
ADD COLUMN     "description_uz" TEXT NOT NULL,
ADD COLUMN     "title_en" TEXT NOT NULL,
ADD COLUMN     "title_ru" TEXT NOT NULL,
ADD COLUMN     "title_uz" TEXT NOT NULL;

-- DropTable
DROP TABLE "Awards";

-- DropTable
DROP TABLE "Partners";

-- DropTable
DROP TABLE "Permissions";

-- DropTable
DROP TABLE "Roles";

-- DropTable
DROP TABLE "ServiceImages";

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "write" BOOLEAN NOT NULL DEFAULT false,
    "update" BOOLEAN NOT NULL DEFAULT false,
    "delete" BOOLEAN NOT NULL DEFAULT false,
    "role_id" TEXT NOT NULL,
    "table_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Award" (
    "id" TEXT NOT NULL,
    "title_uz" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "description_uz" TEXT NOT NULL,
    "description_ru" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Award_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceImage" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Award_title_uz_key" ON "Award"("title_uz");

-- CreateIndex
CREATE UNIQUE INDEX "Award_title_ru_key" ON "Award"("title_ru");

-- CreateIndex
CREATE UNIQUE INDEX "Award_title_en_key" ON "Award"("title_en");

-- CreateIndex
CREATE UNIQUE INDEX "Article_title_uz_key" ON "Article"("title_uz");

-- CreateIndex
CREATE UNIQUE INDEX "Article_title_ru_key" ON "Article"("title_ru");

-- CreateIndex
CREATE UNIQUE INDEX "Article_title_en_key" ON "Article"("title_en");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_title_uz_key" ON "Blog"("title_uz");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_title_ru_key" ON "Blog"("title_ru");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_title_en_key" ON "Blog"("title_en");

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceImage" ADD CONSTRAINT "ServiceImage_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

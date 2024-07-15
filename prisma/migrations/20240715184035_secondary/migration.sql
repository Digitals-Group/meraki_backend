-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_contactId_fkey";

-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "contactId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

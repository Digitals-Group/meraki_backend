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
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "username" TEXT NOT NULL,
    "phone_number" TEXT,
    "password" TEXT NOT NULL,
    "role_id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title_uz" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "description_uz" TEXT NOT NULL,
    "description_ru" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name_uz" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "review_text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" TEXT NOT NULL,
    "question_uz" TEXT NOT NULL,
    "question_ru" TEXT NOT NULL,
    "question_en" TEXT NOT NULL,
    "answer_uz" TEXT NOT NULL,
    "answer_ru" TEXT NOT NULL,
    "answer_en" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Career" (
    "id" TEXT NOT NULL,
    "name_uz" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "description_uz" TEXT NOT NULL,
    "description_ru" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CareerApply" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "career_id" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "cover_letter" TEXT NOT NULL,
    "is_Called" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CareerApply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "title_uz" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "description_uz" TEXT NOT NULL,
    "description_ru" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectCategory" (
    "id" TEXT NOT NULL,
    "title_uz" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectSolution" (
    "id" TEXT NOT NULL,
    "title_uz" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "description_uz" TEXT NOT NULL,
    "description_ru" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectSolution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectResult" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title_uz" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description_uz" TEXT NOT NULL,
    "description_ru" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "resultDescription_uz" TEXT NOT NULL,
    "resultDescription_ru" TEXT NOT NULL,
    "resultDescription_en" TEXT NOT NULL,
    "projectCategoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceCategory" (
    "id" TEXT NOT NULL,
    "title_uz" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceCategory_pkey" PRIMARY KEY ("id")
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

-- CreateTable
CREATE TABLE "ServiceStep" (
    "id" TEXT NOT NULL,
    "title_uz" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "description_uz" TEXT NOT NULL,
    "description_ru" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "title_uz" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "serviceCategoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "take_info" TEXT NOT NULL,
    "is_Called" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceContact" (
    "id" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name_uz" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "jobPosition_uz" TEXT NOT NULL,
    "jobPosition_en" TEXT NOT NULL,
    "jobPosition_ru" TEXT NOT NULL,
    "instagramLink" TEXT,
    "telegramLink" TEXT,
    "facebookLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_title_uz_key" ON "Blog"("title_uz");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_title_ru_key" ON "Blog"("title_ru");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_title_en_key" ON "Blog"("title_en");

-- CreateIndex
CREATE UNIQUE INDEX "Award_title_uz_key" ON "Award"("title_uz");

-- CreateIndex
CREATE UNIQUE INDEX "Award_title_ru_key" ON "Award"("title_ru");

-- CreateIndex
CREATE UNIQUE INDEX "Award_title_en_key" ON "Award"("title_en");

-- CreateIndex
CREATE UNIQUE INDEX "CareerApply_email_key" ON "CareerApply"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Article_title_uz_key" ON "Article"("title_uz");

-- CreateIndex
CREATE UNIQUE INDEX "Article_title_ru_key" ON "Article"("title_ru");

-- CreateIndex
CREATE UNIQUE INDEX "Article_title_en_key" ON "Article"("title_en");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceContact_serviceId_contactId_key" ON "ServiceContact"("serviceId", "contactId");

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CareerApply" ADD CONSTRAINT "CareerApply_career_id_fkey" FOREIGN KEY ("career_id") REFERENCES "Career"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectSolution" ADD CONSTRAINT "ProjectSolution_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectResult" ADD CONSTRAINT "ProjectResult_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_projectCategoryId_fkey" FOREIGN KEY ("projectCategoryId") REFERENCES "ProjectCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceImage" ADD CONSTRAINT "ServiceImage_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceStep" ADD CONSTRAINT "ServiceStep_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_serviceCategoryId_fkey" FOREIGN KEY ("serviceCategoryId") REFERENCES "ServiceCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceContact" ADD CONSTRAINT "ServiceContact_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceContact" ADD CONSTRAINT "ServiceContact_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

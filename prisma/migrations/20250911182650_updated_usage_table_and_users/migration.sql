/*
  Warnings:

  - You are about to drop the column `apiKeyId` on the `api_usage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."api_usage" DROP CONSTRAINT "api_usage_apiKeyId_fkey";

-- AlterTable
ALTER TABLE "public"."api_usage" DROP COLUMN "apiKeyId";

-- CreateTable
CREATE TABLE "public"."Facts" (
    "id" SERIAL NOT NULL,
    "fact" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "created-at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Facts_pkey" PRIMARY KEY ("id")
);

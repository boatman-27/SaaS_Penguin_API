/*
  Warnings:

  - You are about to drop the column `apiKeyId` on the `api_usage` table. All the data in the column will be lost.
  - You are about to drop the column `apiKeysId` on the `api_usage` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `api_usage` table. All the data in the column will be lost.
  - You are about to drop the column `ipAddress` on the `api_usage` table. All the data in the column will be lost.
  - You are about to drop the column `statusCode` on the `api_usage` table. All the data in the column will be lost.
  - You are about to drop the `api_keys` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `api_key_id` to the `api_usage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status_code` to the `api_usage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."api_keys" DROP CONSTRAINT "api_keys_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."api_usage" DROP CONSTRAINT "api_usage_apiKeyId_fkey";

-- DropIndex
DROP INDEX "public"."api_usage_apiKeyId_createdAt_idx";

-- AlterTable
ALTER TABLE "public"."api_usage" DROP COLUMN "apiKeyId",
DROP COLUMN "apiKeysId",
DROP COLUMN "createdAt",
DROP COLUMN "ipAddress",
DROP COLUMN "statusCode",
ADD COLUMN     "api_key_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "ip_address" TEXT,
ADD COLUMN     "status_code" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."api_keys";

-- CreateTable
CREATE TABLE "public"."api_key" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "key_hash" TEXT NOT NULL,
    "key_lookup" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_used_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rateLimit" INTEGER NOT NULL DEFAULT 1000,
    "usageCount" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "api_key_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "api_key_key_hash_key" ON "public"."api_key"("key_hash");

-- CreateIndex
CREATE UNIQUE INDEX "api_key_key_lookup_key" ON "public"."api_key"("key_lookup");

-- CreateIndex
CREATE INDEX "api_usage_api_key_id_created_at_idx" ON "public"."api_usage"("api_key_id", "created_at");

-- AddForeignKey
ALTER TABLE "public"."api_key" ADD CONSTRAINT "api_key_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."api_usage" ADD CONSTRAINT "api_usage_api_key_id_fkey" FOREIGN KEY ("api_key_id") REFERENCES "public"."api_key"("id") ON DELETE CASCADE ON UPDATE CASCADE;

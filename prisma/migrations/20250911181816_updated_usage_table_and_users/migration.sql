/*
  Warnings:

  - You are about to drop the column `api_key_id` on the `api_usage` table. All the data in the column will be lost.
  - You are about to drop the `Facts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `api_key` to the `api_usage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `api_usage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."api_usage" DROP CONSTRAINT "api_usage_api_key_id_fkey";

-- DropIndex
DROP INDEX "public"."api_usage_api_key_id_created_at_idx";

-- AlterTable
ALTER TABLE "public"."api_usage" DROP COLUMN "api_key_id",
ADD COLUMN     "apiKeyId" TEXT,
ADD COLUMN     "api_key" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Facts";

-- CreateIndex
CREATE INDEX "api_usage_user_id_created_at_idx" ON "public"."api_usage"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "api_usage_api_key_created_at_idx" ON "public"."api_usage"("api_key", "created_at");

-- AddForeignKey
ALTER TABLE "public"."api_usage" ADD CONSTRAINT "api_usage_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."api_usage" ADD CONSTRAINT "api_usage_apiKeyId_fkey" FOREIGN KEY ("apiKeyId") REFERENCES "public"."api_key"("id") ON DELETE SET NULL ON UPDATE CASCADE;

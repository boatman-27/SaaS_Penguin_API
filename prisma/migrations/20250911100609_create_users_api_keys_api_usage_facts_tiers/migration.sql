/*
  Warnings:

  - A unique constraint covering the columns `[key_lookup]` on the table `api_keys` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `key_lookup` to the `api_keys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."api_keys" ADD COLUMN     "key_lookup" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "api_keys_key_lookup_key" ON "public"."api_keys"("key_lookup");

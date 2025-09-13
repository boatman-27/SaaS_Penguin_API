/*
  Warnings:

  - You are about to drop the column `commonName` on the `diet_items` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `diet_items` table. All the data in the column will be lost.
  - You are about to drop the column `foodType` on the `diet_items` table. All the data in the column will be lost.
  - You are about to drop the column `scientificName` on the `diet_items` table. All the data in the column will be lost.
  - You are about to drop the column `speciesId` on the `diet_items` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `diet_items` table. All the data in the column will be lost.
  - You are about to drop the column `breedingMonths` on the `distribution` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `distribution` table. All the data in the column will be lost.
  - You are about to drop the column `populationEstimate` on the `distribution` table. All the data in the column will be lost.
  - You are about to drop the column `speciesId` on the `distribution` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `distribution` table. All the data in the column will be lost.
  - You are about to drop the column `ageGroup` on the `migrations` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `migrations` table. All the data in the column will be lost.
  - You are about to drop the column `distanceKm` on the `migrations` table. All the data in the column will be lost.
  - You are about to drop the column `fromLocation` on the `migrations` table. All the data in the column will be lost.
  - You are about to drop the column `migrationPeriod` on the `migrations` table. All the data in the column will be lost.
  - You are about to drop the column `speciesId` on the `migrations` table. All the data in the column will be lost.
  - You are about to drop the column `toLocation` on the `migrations` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `migrations` table. All the data in the column will be lost.
  - You are about to drop the column `commonName` on the `species` table. All the data in the column will be lost.
  - You are about to drop the column `conservationStatus` on the `species` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `species` table. All the data in the column will be lost.
  - You are about to drop the column `favouriteFood` on the `species` table. All the data in the column will be lost.
  - You are about to drop the column `nestType` on the `species` table. All the data in the column will be lost.
  - You are about to drop the column `scientificName` on the `species` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `species` table. All the data in the column will be lost.
  - You are about to drop the column `weightFemale` on the `species` table. All the data in the column will be lost.
  - You are about to drop the column `weightMale` on the `species` table. All the data in the column will be lost.
  - You are about to drop the `images` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[common_name]` on the table `species` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[scientific_name]` on the table `species` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `food_type` to the `diet_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `species_id` to the `diet_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `diet_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `species_id` to the `distribution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `distribution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `from_location` to the `migrations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `migration_period` to the `migrations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `species_id` to the `migrations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `migrations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `common_name` to the `species` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scientific_name` to the `species` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `species` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."diet_items" DROP CONSTRAINT "diet_items_speciesId_fkey";

-- DropForeignKey
ALTER TABLE "public"."distribution" DROP CONSTRAINT "distribution_speciesId_fkey";

-- DropForeignKey
ALTER TABLE "public"."images" DROP CONSTRAINT "images_speciesId_fkey";

-- DropForeignKey
ALTER TABLE "public"."migrations" DROP CONSTRAINT "migrations_speciesId_fkey";

-- DropIndex
DROP INDEX "public"."species_commonName_key";

-- DropIndex
DROP INDEX "public"."species_scientificName_key";

-- AlterTable
ALTER TABLE "public"."diet_items" DROP COLUMN "commonName",
DROP COLUMN "createdAt",
DROP COLUMN "foodType",
DROP COLUMN "scientificName",
DROP COLUMN "speciesId",
DROP COLUMN "updatedAt",
ADD COLUMN     "common_name" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "food_type" TEXT NOT NULL,
ADD COLUMN     "scientific_name" TEXT,
ADD COLUMN     "species_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."distribution" DROP COLUMN "breedingMonths",
DROP COLUMN "createdAt",
DROP COLUMN "populationEstimate",
DROP COLUMN "speciesId",
DROP COLUMN "updatedAt",
ADD COLUMN     "breeding_months" JSONB,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "population_estimate" INTEGER,
ADD COLUMN     "species_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."migrations" DROP COLUMN "ageGroup",
DROP COLUMN "createdAt",
DROP COLUMN "distanceKm",
DROP COLUMN "fromLocation",
DROP COLUMN "migrationPeriod",
DROP COLUMN "speciesId",
DROP COLUMN "toLocation",
DROP COLUMN "updatedAt",
ADD COLUMN     "age_group" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "distance_km" INTEGER,
ADD COLUMN     "from_location" TEXT NOT NULL,
ADD COLUMN     "migration_period" TEXT NOT NULL,
ADD COLUMN     "species_id" TEXT NOT NULL,
ADD COLUMN     "to_location" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."species" DROP COLUMN "commonName",
DROP COLUMN "conservationStatus",
DROP COLUMN "createdAt",
DROP COLUMN "favouriteFood",
DROP COLUMN "nestType",
DROP COLUMN "scientificName",
DROP COLUMN "updatedAt",
DROP COLUMN "weightFemale",
DROP COLUMN "weightMale",
ADD COLUMN     "common_name" TEXT NOT NULL,
ADD COLUMN     "conservation_status" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "favourite_food" TEXT,
ADD COLUMN     "nest_type" TEXT,
ADD COLUMN     "scientific_name" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "weight_female" DOUBLE PRECISION,
ADD COLUMN     "weight_male" DOUBLE PRECISION;

-- DropTable
DROP TABLE "public"."images";

-- CreateIndex
CREATE INDEX "diet_items_food_type_idx" ON "public"."diet_items"("food_type");

-- CreateIndex
CREATE INDEX "diet_items_species_id_food_type_idx" ON "public"."diet_items"("species_id", "food_type");

-- CreateIndex
CREATE INDEX "diet_items_percentage_idx" ON "public"."diet_items"("percentage");

-- CreateIndex
CREATE INDEX "distribution_region_idx" ON "public"."distribution"("region");

-- CreateIndex
CREATE INDEX "distribution_location_idx" ON "public"."distribution"("location");

-- CreateIndex
CREATE INDEX "distribution_species_id_region_idx" ON "public"."distribution"("species_id", "region");

-- CreateIndex
CREATE INDEX "migrations_migration_period_idx" ON "public"."migrations"("migration_period");

-- CreateIndex
CREATE INDEX "migrations_from_location_idx" ON "public"."migrations"("from_location");

-- CreateIndex
CREATE INDEX "migrations_to_location_idx" ON "public"."migrations"("to_location");

-- CreateIndex
CREATE INDEX "migrations_species_id_migration_period_idx" ON "public"."migrations"("species_id", "migration_period");

-- CreateIndex
CREATE UNIQUE INDEX "species_common_name_key" ON "public"."species"("common_name");

-- CreateIndex
CREATE UNIQUE INDEX "species_scientific_name_key" ON "public"."species"("scientific_name");

-- CreateIndex
CREATE INDEX "species_conservation_status_idx" ON "public"."species"("conservation_status");

-- CreateIndex
CREATE INDEX "species_common_name_idx" ON "public"."species"("common_name");

-- CreateIndex
CREATE INDEX "species_scientific_name_idx" ON "public"."species"("scientific_name");

-- AddForeignKey
ALTER TABLE "public"."distribution" ADD CONSTRAINT "distribution_species_id_fkey" FOREIGN KEY ("species_id") REFERENCES "public"."species"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."diet_items" ADD CONSTRAINT "diet_items_species_id_fkey" FOREIGN KEY ("species_id") REFERENCES "public"."species"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."migrations" ADD CONSTRAINT "migrations_species_id_fkey" FOREIGN KEY ("species_id") REFERENCES "public"."species"("id") ON DELETE CASCADE ON UPDATE CASCADE;

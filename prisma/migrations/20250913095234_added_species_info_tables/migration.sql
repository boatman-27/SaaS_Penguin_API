-- CreateTable
CREATE TABLE "public"."species" (
    "id" TEXT NOT NULL,
    "commonName" TEXT NOT NULL,
    "scientificName" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "weightMale" DOUBLE PRECISION,
    "weightFemale" DOUBLE PRECISION,
    "nestType" TEXT,
    "favouriteFood" TEXT,
    "conservationStatus" TEXT,
    "identification" TEXT,
    "habits" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "species_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."distribution" (
    "id" TEXT NOT NULL,
    "speciesId" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "breedingMonths" JSONB,
    "habitat" TEXT,
    "populationEstimate" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "distribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."diet_items" (
    "id" TEXT NOT NULL,
    "speciesId" TEXT NOT NULL,
    "foodType" TEXT NOT NULL,
    "scientificName" TEXT,
    "commonName" TEXT,
    "percentage" DOUBLE PRECISION,
    "seasonal" BOOLEAN NOT NULL DEFAULT false,
    "location" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "diet_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."migrations" (
    "id" TEXT NOT NULL,
    "speciesId" TEXT NOT NULL,
    "migrationPeriod" TEXT NOT NULL,
    "fromLocation" TEXT NOT NULL,
    "toLocation" TEXT,
    "distanceKm" INTEGER,
    "duration" TEXT,
    "ageGroup" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "migrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."images" (
    "id" TEXT NOT NULL,
    "speciesId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "altText" TEXT,
    "caption" TEXT,
    "imageType" TEXT NOT NULL,
    "isMain" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "species_commonName_key" ON "public"."species"("commonName");

-- CreateIndex
CREATE UNIQUE INDEX "species_scientificName_key" ON "public"."species"("scientificName");

-- AddForeignKey
ALTER TABLE "public"."distribution" ADD CONSTRAINT "distribution_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "public"."species"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."diet_items" ADD CONSTRAINT "diet_items_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "public"."species"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."migrations" ADD CONSTRAINT "migrations_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "public"."species"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."images" ADD CONSTRAINT "images_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "public"."species"("id") ON DELETE CASCADE ON UPDATE CASCADE;

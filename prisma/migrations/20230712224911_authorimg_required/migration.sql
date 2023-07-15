/*
  Warnings:

  - Made the column `authorImg` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "authorImg" SET NOT NULL;

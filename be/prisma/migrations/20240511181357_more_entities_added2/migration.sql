/*
  Warnings:

  - A unique constraint covering the columns `[authorId]` on the table `games` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorId` to the `games` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `games` ADD COLUMN `authorId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `games_authorId_key` ON `games`(`authorId`);

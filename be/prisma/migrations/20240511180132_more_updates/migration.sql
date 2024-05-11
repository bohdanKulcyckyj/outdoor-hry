/*
  Warnings:

  - You are about to drop the column `password` on the `games` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `games` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `games` DROP COLUMN `password`,
    DROP COLUMN `role`,
    MODIFY `description` TEXT NOT NULL;

-- CreateTable
CREATE TABLE `Checkpoint` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gameId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `imageId` INTEGER NOT NULL,

    UNIQUE INDEX `Checkpoint_gameId_key`(`gameId`),
    UNIQUE INDEX `Checkpoint_imageId_key`(`imageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Checkpoint` ADD CONSTRAINT `Checkpoint_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `files`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Checkpoint` ADD CONSTRAINT `Checkpoint_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `games`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

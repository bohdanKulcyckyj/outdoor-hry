-- CreateTable
CREATE TABLE `badges` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `minExperience` INTEGER NOT NULL,
    `imageId` INTEGER NOT NULL,

    UNIQUE INDEX `badges_imageId_key`(`imageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `emailVerified` DATETIME(3) NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'CREATOR', 'USER') NOT NULL DEFAULT 'USER',
    `isAlive` BOOLEAN NOT NULL DEFAULT true,
    `photoId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `experience` INTEGER NOT NULL DEFAULT 0,
    `coins` INTEGER NOT NULL DEFAULT 0,
    `badgeId` INTEGER NOT NULL,
    `deliveryInfo` JSON NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    UNIQUE INDEX `users_photoId_key`(`photoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purchased_games` (
    `userId` INTEGER NOT NULL,
    `gameId` INTEGER NOT NULL,
    `played` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`userId`, `gameId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `games` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `place` VARCHAR(191) NOT NULL,
    `dificultness` ENUM('EASY', 'NORMAL', 'HARD') NOT NULL DEFAULT 'NORMAL',
    `startingCheckpointId` INTEGER NOT NULL,
    `endingCheckpointId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `imageId` INTEGER NOT NULL,
    `authorId` INTEGER NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `price` INTEGER NOT NULL DEFAULT 299,
    `maxPoints` INTEGER NOT NULL,

    UNIQUE INDEX `games_imageId_key`(`imageId`),
    FULLTEXT INDEX `games_title_place_idx`(`title`, `place`),
    FULLTEXT INDEX `games_title_idx`(`title`),
    FULLTEXT INDEX `games_place_idx`(`place`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `game_tags_on_game` (
    `tagId` INTEGER NOT NULL,
    `gameId` INTEGER NOT NULL,

    PRIMARY KEY (`tagId`, `gameId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `game_tags` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `checkpoints` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gameId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `imageId` INTEGER NOT NULL,
    `mapId` INTEGER NOT NULL,
    `riddle` TEXT NOT NULL,
    `answer` JSON NOT NULL,
    `gpsCoordinates` VARCHAR(191) NOT NULL,
    `reachDescription` TEXT NOT NULL,
    `maxPoints` INTEGER NOT NULL,
    `pointsPenalty` INTEGER NOT NULL,
    `order` INTEGER NOT NULL,

    UNIQUE INDEX `checkpoints_imageId_key`(`imageId`),
    UNIQUE INDEX `checkpoints_mapId_key`(`mapId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hints` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `checkpointId` INTEGER NOT NULL,
    `label` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `game_records` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `inviteCode` VARCHAR(10) NOT NULL,
    `gameId` INTEGER NOT NULL,
    `state` ENUM('CREATED', 'PENDING', 'FINISHED', 'TIMEOUT') NOT NULL DEFAULT 'CREATED',
    `team` VARCHAR(191) NOT NULL,
    `start` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `finish` DATETIME(3) NULL,
    `earnedPoints` INTEGER NOT NULL DEFAULT 0,
    `duration` INTEGER NOT NULL DEFAULT 0,
    `checkpointId` INTEGER NOT NULL,
    `revealedHints` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `participants` (
    `userId` INTEGER NOT NULL,
    `gameRecordId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `gameRecordId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `generatedName` VARCHAR(191) NOT NULL,
    `originalName` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contracts` (
    `gameId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `fileId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `contracts_fileId_key`(`fileId`),
    PRIMARY KEY (`gameId`, `userId`, `fileId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderUuid` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `invoiceId` INTEGER NULL,
    `status` ENUM('DRAFT', 'CREATED', 'PENDING', 'PAID', 'CANCELED', 'TIMEOUT') NOT NULL DEFAULT 'CREATED',
    `gopayId` INTEGER NULL,
    `gatewayUrl` VARCHAR(191) NULL,
    `fakturoidInvoiceId` INTEGER NOT NULL,
    `hasInvoice` BOOLEAN NOT NULL DEFAULT false,
    `emailSent` BOOLEAN NOT NULL DEFAULT false,
    `total` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `products` JSON NOT NULL,
    `deliveryInfo` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `orders_invoiceId_key`(`invoiceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `badges` ADD CONSTRAINT `badges_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `files`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_badgeId_fkey` FOREIGN KEY (`badgeId`) REFERENCES `badges`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_photoId_fkey` FOREIGN KEY (`photoId`) REFERENCES `files`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purchased_games` ADD CONSTRAINT `purchased_games_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purchased_games` ADD CONSTRAINT `purchased_games_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `games`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `games` ADD CONSTRAINT `games_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `files`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `game_tags_on_game` ADD CONSTRAINT `game_tags_on_game_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `game_tags`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `game_tags_on_game` ADD CONSTRAINT `game_tags_on_game_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `games`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `checkpoints` ADD CONSTRAINT `checkpoints_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `files`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `checkpoints` ADD CONSTRAINT `checkpoints_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `games`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hints` ADD CONSTRAINT `hints_checkpointId_fkey` FOREIGN KEY (`checkpointId`) REFERENCES `checkpoints`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `game_records` ADD CONSTRAINT `game_records_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `games`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `game_records` ADD CONSTRAINT `game_records_checkpointId_fkey` FOREIGN KEY (`checkpointId`) REFERENCES `checkpoints`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `participants` ADD CONSTRAINT `participants_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `participants` ADD CONSTRAINT `participants_gameRecordId_fkey` FOREIGN KEY (`gameRecordId`) REFERENCES `game_records`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contracts` ADD CONSTRAINT `contracts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contracts` ADD CONSTRAINT `contracts_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `games`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contracts` ADD CONSTRAINT `contracts_fileId_fkey` FOREIGN KEY (`fileId`) REFERENCES `files`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

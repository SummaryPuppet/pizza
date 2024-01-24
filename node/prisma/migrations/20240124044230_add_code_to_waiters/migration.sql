/*
  Warnings:

  - You are about to drop the column `latname` on the `Waiter` table. All the data in the column will be lost.
  - Added the required column `code` to the `Waiter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Waiter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Waiter` DROP COLUMN `latname`,
    ADD COLUMN `code` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastname` VARCHAR(191) NOT NULL;

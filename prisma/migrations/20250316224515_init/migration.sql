/*
  Warnings:

  - You are about to drop the column `context` on the `AlgorithmLog` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `AlgorithmLog` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `AlgorithmLog` table. All the data in the column will be lost.
  - You are about to drop the column `pid` on the `AlgorithmLog` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `AlgorithmLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AlgorithmLog" DROP COLUMN "context",
DROP COLUMN "level",
DROP COLUMN "message",
DROP COLUMN "pid",
DROP COLUMN "timestamp";

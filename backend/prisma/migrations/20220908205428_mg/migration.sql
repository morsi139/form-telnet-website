/*
  Warnings:

  - Added the required column `idtable` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "client" ADD COLUMN     "idtable" TEXT NOT NULL;

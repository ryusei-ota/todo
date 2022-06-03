/*
  Warnings:

  - You are about to drop the column `deadline` on the `todo` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `todo` table. All the data in the column will be lost.
  - You are about to drop the column `note` on the `todo` table. All the data in the column will be lost.
  - Added the required column `limit` to the `todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `todo` to the `todo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "todo" TEXT NOT NULL,
    "limit" DATETIME NOT NULL,
    "done_at" BOOLEAN NOT NULL
);
INSERT INTO "new_todo" ("done_at", "id") SELECT "done_at", "id" FROM "todo";
DROP TABLE "todo";
ALTER TABLE "new_todo" RENAME TO "todo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

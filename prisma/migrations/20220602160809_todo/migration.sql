-- CreateTable
CREATE TABLE "todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "deadline" DATETIME NOT NULL,
    "done_at" BOOLEAN NOT NULL,
    "note" TEXT NOT NULL
);

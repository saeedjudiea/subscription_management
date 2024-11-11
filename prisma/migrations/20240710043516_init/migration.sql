/*
  Warnings:

  - Added the required column `pass` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Subscription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "service" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "price" REAL NOT NULL,
    "url" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "pass" TEXT NOT NULL,
    "newPassword" TEXT,
    "expiresOn" DATETIME,
    "hostingName" TEXT,
    "kind" TEXT,
    "nameOfDevelopmentTool" TEXT
);
INSERT INTO "new_Subscription" ("endDate", "id", "price", "service", "startDate") SELECT "endDate", "id", "price", "service", "startDate" FROM "Subscription";
DROP TABLE "Subscription";
ALTER TABLE "new_Subscription" RENAME TO "Subscription";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

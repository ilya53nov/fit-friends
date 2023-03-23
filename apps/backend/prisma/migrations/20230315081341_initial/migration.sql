-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "refreshTokenHash" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "dateBirth" TIMESTAMP(3),
    "role" TEXT NOT NULL,
    "locationDefault" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "exerciseLevel" TEXT NOT NULL,
    "exerciseTypes" TEXT[],
    "durationTraining" TEXT,
    "caloriesResetCount" INTEGER,
    "caloriesSpendPerDayCount" INTEGER,
    "isReadyUser" BOOLEAN,
    "comment" TEXT,
    "certificate" TEXT,
    "isReadyCoach" BOOLEAN,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

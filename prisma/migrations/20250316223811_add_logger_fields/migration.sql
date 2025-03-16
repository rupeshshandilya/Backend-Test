-- CreateTable
CREATE TABLE "AlgorithmLog" (
    "id" TEXT NOT NULL,
    "algorithmName" TEXT NOT NULL,
    "input" JSONB NOT NULL,
    "output" JSONB NOT NULL,
    "level" TEXT NOT NULL,
    "pid" INTEGER NOT NULL,
    "timestamp" BIGINT NOT NULL,
    "message" TEXT NOT NULL,
    "context" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AlgorithmLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AlgorithmLog_algorithmName_idx" ON "AlgorithmLog"("algorithmName");

-- CreateIndex
CREATE INDEX "AlgorithmLog_createdAt_idx" ON "AlgorithmLog"("createdAt");

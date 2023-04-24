-- CreateTable
CREATE TABLE "EmailAllowlist" (
    "email" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailAllowlist_email_key" ON "EmailAllowlist"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EmailAllowlist_createdAt_key" ON "EmailAllowlist"("createdAt");

-- CreateIndex
CREATE INDEX "EmailAllowlist_email_createdAt_idx" ON "EmailAllowlist"("email", "createdAt" DESC);

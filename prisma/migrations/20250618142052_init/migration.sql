-- CreateTable
CREATE TABLE "strategy" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" BYTEA,
    "description" TEXT NOT NULL,
    "fullDescription" TEXT,
    "slug" TEXT NOT NULL,
    "icon" TEXT,
    "activities" TEXT[],
    "visionText" TEXT,
    "involvedText" TEXT,
    "impactQuote" TEXT,

    CONSTRAINT "strategy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "shortBio" TEXT,
    "fullBio" TEXT,
    "image" BYTEA,
    "location" TEXT,
    "qualification" TEXT,
    "website" TEXT,
    "experience" TEXT,
    "years" TEXT,
    "mission" TEXT,
    "focus" TEXT,
    "status" TEXT,
    "prayerRequests" TEXT[],
    "recentUpdates" JSONB,
    "supportNeeds" JSONB,
    "type" TEXT,
    "role" TEXT,
    "strategyId" TEXT,
    "livesImpacted" INTEGER,
    "communitiesServed" INTEGER,
    "projectsCompleted" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "image" BYTEA,
    "category" TEXT,
    "location" TEXT,
    "duration" TEXT,
    "teamSize" TEXT,
    "fundingGoal" TEXT,
    "fundingRaised" TEXT,
    "beneficiaries" TEXT,
    "problem" TEXT,
    "solution" TEXT,
    "urgency" TEXT,
    "urgencyFactors" TEXT[],
    "impact" TEXT[],
    "timeLine" JSONB,
    "testimonials" JSONB,
    "strategyId" TEXT,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "strategy_slug_key" ON "strategy"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_slug_key" ON "Projects"("slug");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_strategyId_fkey" FOREIGN KEY ("strategyId") REFERENCES "strategy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_strategyId_fkey" FOREIGN KEY ("strategyId") REFERENCES "strategy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

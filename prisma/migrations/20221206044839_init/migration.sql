-- CreateTable
CREATE TABLE "Quotes" (
    "id" SERIAL NOT NULL,
    "quote" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "esrb" TEXT NOT NULL,
    "release" INTEGER NOT NULL,

    CONSTRAINT "Quotes_pkey" PRIMARY KEY ("id")
);

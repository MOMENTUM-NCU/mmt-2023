-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'participant',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tag" TEXT DEFAULT '',
    "tagnum" SERIAL NOT NULL,
    "fname" TEXT DEFAULT '',
    "lname" TEXT DEFAULT '',
    "pnumber" TEXT DEFAULT '',
    "address" TEXT DEFAULT '',
    "dob" TEXT DEFAULT '',
    "gender" TEXT DEFAULT 'Male',
    "yearOfStudy" TEXT DEFAULT '',
    "college" TEXT DEFAULT '',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "t_verify_user" BOOLEAN NOT NULL DEFAULT false,
    "t_verify_user_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "t_verify_rpay" BOOLEAN NOT NULL DEFAULT false,
    "team_name" TEXT NOT NULL DEFAULT '',
    "userId" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_userId_eventId_key" ON "Payment"("userId", "eventId");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;


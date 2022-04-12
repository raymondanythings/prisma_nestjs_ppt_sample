import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const member = await prisma.member.findMany({
    id: 1,
  });
  console.log(member);
}

main();

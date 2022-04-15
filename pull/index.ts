import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "hi",
      age: 11,
    },
  });
  console.log(user);
}

main();

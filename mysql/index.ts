import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  // await prisma.member.create({
  //   data: {
  //     name: "test",
  //   },
  // });

  const post = await prisma.member.update({
    where: { id: 1 },
    data: { name: "Change" },
  });
  console.log(post);
  const allUsers = await prisma.member.findMany();
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

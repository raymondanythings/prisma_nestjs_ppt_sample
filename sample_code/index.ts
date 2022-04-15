import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  try {
    const allUsers = await prisma.user.findMany({});
    console.log("Before Create : ", allUsers);
    const user = await prisma.user.create({
      data: {
        name: "test",
        age: 28,
      },
    });
    console.log("Create : ", user);
    const allUsersAfter = await prisma.user.findMany({});
    console.log("After Create : ", allUsersAfter);
  } catch (err) {
    console.error(err);
  } finally {
    // await prisma.user.deleteMany({});
    await prisma.$disconnect();
  }
};

main();

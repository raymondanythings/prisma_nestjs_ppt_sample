import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

prisma.user.create({
  data: {
    name: "Hi",
    age: 20,
  },
});

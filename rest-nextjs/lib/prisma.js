import { PrismaClient } from "@prisma/client";
let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({
    rejectOnNotFound: true,
  });
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      rejectOnNotFound: true,
    });
  }
  prisma = global.prisma;
}
export default prisma;

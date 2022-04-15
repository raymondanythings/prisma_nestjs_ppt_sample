import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  try {
    const allUsers = await prisma.user.findMany({});
    console.log("Before User Craete : ", allUsers);
    const user = await prisma.user.create({
      data: {
        name: "hi",
        age: 20,
      },
    });
    console.log("Created User : ", user);
    console.log("After Creating User : ", await prisma.user.findMany({}));

    const post = await prisma.post.create({
      data: {
        authorId: user.id,
        content: "Content",
        title: "title",
      },
    });
    console.log("Created Post : ", post);

    const users = await prisma.user.findMany({
      include: {
        Posts: true,
        reply: true,
      },
    });
    console.log("After Creating Post");
    console.dir(users, { depth: null });
    const replyId = users.find((m) => m.id === 1).id;
    const reply = await prisma.reple.create({
      data: {
        userId: replyId,
        postId: post.id,
        content: "Reply",
      },
    });
    console.log(reply);
    const last = await prisma.user.findMany({
      include: {
        Posts: true,
        reply: true,
      },
    });
    console.dir(last, { depth: null });
  } catch (error) {
    console.error(error);
  }
};

main();

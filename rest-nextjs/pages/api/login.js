import prisma from "../../lib/prisma";

// POST /api/user
// Required fields in body: name, email
export default async function handle(req, res) {
  const {
    body: { email, name },
  } = req;
  try {
    const result = await prisma.user.findFirst({
      where: {
        AND: [
          {
            email,
          },
          {
            name,
          },
        ],
      },
    });
    console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err, "ERRRRORRORRO");
    return res.status(500).send("123123123123123123");
  }
}

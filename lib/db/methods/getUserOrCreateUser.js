import getInstance from "./_getInstance";
import sendEmail from "lib/mailer/sendmail";
import generateTag from "utils/generateTag";

const getUserOrCreateUser = async (userEmail, name) => {
  const prisma = getInstance();
  let user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });
  let userWithTag = null;
  if (user == null) {
    user = await prisma.user.create({
      data: {
        email: userEmail,
      },
    });
    userWithTag = await prisma.user.update({
      where: {
        email: userEmail,
      },
      data: {
        tag: await generateTag({
          email: userEmail,
          fname: "XX",
          lname: "XX",
          college: "XX",
        }),
      },
    });
    sendEmail(userEmail, name);
  }
  return user;
};
export { getUserOrCreateUser };

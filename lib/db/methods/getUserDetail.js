import getInstance from "./_getInstance";

const getUserDetail = async (userEmail) => {
  const prisma = getInstance();
  let user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });
  return user;
};
export { getUserDetail };

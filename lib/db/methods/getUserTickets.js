import getInstance from "./_getInstance";

const getUserTickets = async (userId) => {
  const prisma = getInstance();
  const tickets = await prisma.payment.findMany({
    where: {
      userId,
      status: "PAID",
    },
  });
  return tickets;
};
export { getUserTickets };

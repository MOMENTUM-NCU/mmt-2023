import getInstance from "./_getInstance";

const getEventTicketOfUser = async (userId, eventId) => {
  const prisma = getInstance();
  userId.toString();
  eventId.toString();
  const ticket = await prisma.payment.findUnique({
    where: {
      userId_eventId: {
        userId,
        eventId,
      },
    },
  });
  return ticket;
};
export { getEventTicketOfUser };

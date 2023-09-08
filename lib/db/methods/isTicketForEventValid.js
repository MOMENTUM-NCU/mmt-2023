import getInstance from "./_getInstance";

const isTicketForEventValid = async (userId, eventId) => {
  const prisma = getInstance();
  eventId.toString();
  const ticket = await prisma.payment.findUnique({
    where: {
      userId_eventId: {
        userId,
        eventId,
      },
    },
  });
  if (ticket == null) return false;
  if (ticket.status == "PAID") return true;
  return false;
};
export { isTicketForEventValid };

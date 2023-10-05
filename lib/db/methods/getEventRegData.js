import getInstance from "./_getInstance";

const getEventRegData = async (eventId) => {
  const prisma = getInstance();
  eventId.toString();
  const regData = await prisma.payment.findMany({
    where: {
      status: "PAID",
      eventId: eventId,
    },
    orderBy: {
      user: {
        tagnum: "asc",
      },
    },
    include: {
      user: true,
    },
  });
  return regData;
};
export { getEventRegData };

import getInstance from "./_getInstance";
import { getUserDetail } from "./getUserDetail";

const setUserEventTeamName = async (userId, eventId, teamName) => {
  const prisma = getInstance();
  eventId.toString();
  let ticket = null;
  ticket = await prisma.payment.findUnique({
    where: {
      userId_eventId: {
        userId,
        eventId,
      },
    },
  });
  if (ticket) {
    //Update
    ticket = await prisma.payment.update({
      where: {
        userId_eventId: {
          userId,
          eventId,
        },
      },
      data: {
        team_name: teamName,
      },
    });
  }
  return ticket;
};

export { setUserEventTeamName };

import DB from "@db";
import { getEventById } from "lib/eventList";
import getUserFromToken from "utils/getUserFromToken";

const handler = async (req, res) => {
  const user = await getUserFromToken(req);
  if (user == null) return res.status(401).json({ error: "unauthorised" });

  const { eventId } = req.query;
  if (isNaN(eventId)) return res.status(400).json({ error: "Invalid Id" });
  const event = await getEventById(eventId);
  if (event == null) return res.status(404).json({ error: "No event found" });

  const eventTicket = await DB.getEventTicketOfUser(user.userId, eventId);
  if (eventTicket) {
    const bodyReq = JSON.parse(req.body);
    const teamName = bodyReq.teamName || "";
    const updatedEventTicket = await DB.setUserEventTeamName(
      user.userId,
      eventId,
      teamName
    );
    return res.status(200).json(updatedEventTicket);
  } else {
    res.status(400).json({ error: "No Ticket" });
  }
};
export default handler;

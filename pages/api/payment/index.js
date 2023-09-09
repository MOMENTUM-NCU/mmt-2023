import getUserFromToken from "utils/getUserFromToken";
import { getEventById } from "lib/eventList";
import DB from "@db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const user = await getUserFromToken(req);

    if (user == null) return res.status(401).json({ error: "unauthorised" });
    const bodyReq = JSON.parse(req.body);
    const eventId = bodyReq.eventId;

    if (isNaN(eventId))
      return res.status(400).json({ error: "Invalid eventId" });
    const event = await getEventById(eventId);
    if (event == null)
      return res.status(400).json({ error: "Event does not exist" });
    const order = await DB.getOrCreateOrder(user.userId, eventId.toString());
    if (order == null)
      return res.status(400).json({ error: "Payment gateway error" });
    return res.status(200).json(order);
  } else {
    res.status(400).json({});
  }
}

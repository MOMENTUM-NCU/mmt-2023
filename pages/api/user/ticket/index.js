import DB from "@db";
import getUserFromToken from "utils/getUserFromToken";

const handler = async (req, res) => {
  const user = await getUserFromToken(req);
  if (user == null) return res.status(401).json({ error: "unauthorised" });
  const tickets = await DB.getUserTickets(user.userId);
  res.status(200).json(tickets);
};
export default handler;

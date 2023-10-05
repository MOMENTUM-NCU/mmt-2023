import DB from "@db";
import getUserFromToken from "utils/getUserFromToken";

const handler = async (req, res) => {
  const user = await getUserFromToken(req);
  if (user == null) return res.status(401).json({ error: "unauthorised" });

  const userDetail = await DB.getUserDetail(user.email);
  res.status(200).json(userDetail);
};
export default handler;

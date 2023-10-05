import DB from "@db";
import getUserFromToken from "utils/getUserFromToken";

const handler = async (req, res) => {
  const user = await getUserFromToken(req);
  if (user == null) return res.status(401).json({ error: "unauthorised" });

  const bodyReq = JSON.parse(req.body);
  const userDetailReq = {
    id: user.userId,
    email: user.email,
    fname: bodyReq.fname || "",
    lname: bodyReq.lname || "",
    pnumber: bodyReq.pnumber || "",
    address: bodyReq.address || "",
    college: bodyReq.college || "",
    dob: bodyReq.dob || "",
    gender: bodyReq.gender || "",
    yearOfStudy: bodyReq.yearOfStudy || "",
  };
  const userDetail = await DB.setUserDetail(userDetailReq);
  res.status(200).json(userDetail);
};
export default handler;

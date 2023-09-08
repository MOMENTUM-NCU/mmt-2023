import { getToken } from "next-auth/jwt";

const getUserFromToken = async (req) => {
  const secret = process.env.JWT_SECRET;
  const token = await getToken({ req, secret });
  return token;
};

export default getUserFromToken;

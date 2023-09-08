import { PrismaClient } from "@prisma/client";

let db = null;
const getInstance = () => {
  if (db == null) db = new PrismaClient();
  return db;
};
export default getInstance;

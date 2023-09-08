import DB from "@db";

const f2name = (name) => {
  name = name.replace(/ /g,'');
  if (name.length >= 2) return (name[0] + name[1] + "").toUpperCase();
  if (name.length >= 1) return (name[0] + "X").toUpperCase();
  return "XX".toUpperCase();
};

const t3digit = (tagnum) => {
  if (tagnum < 10) return "000" + tagnum;
  if (tagnum < 100) return "00" + tagnum;
  if (tagnum < 1000) return "0" + tagnum;
  return tagnum;
};

const generateTag = async (userDetail) => {
  const { email, fname, lname, college } = userDetail;
  const userDetailDb = await DB.getUserDetail(email);
  let p1 = "MMT";
  let p2 = "";
  if (userDetailDb.role == "organiser") p2 = "OG";
  if (userDetailDb.role == "campus_ambassador") p2 = "CA";
  if (userDetailDb.role == "participant") {
    if (college == "The Northcap University (Formerly ITM University)")
      p2 = "IN";
    else p2 = "ON";
  }
  return `${p1}-${p2}-${f2name(fname)}${f2name(lname)}${t3digit(
    userDetailDb.tagnum
  )}`;
};

export default generateTag;

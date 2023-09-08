import getInstance from "./_getInstance";
import generateTag from "utils/generateTag";

const setUserDetail = async (userDetail) => {
  const prisma = getInstance();
  const {
    id,
    fname,
    lname,
    pnumber,
    address,
    dob,
    gender,
    yearOfStudy,
    college,
  } = userDetail;
  let user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      fname,
      lname,
      pnumber,
      address,
      dob,
      gender,
      yearOfStudy,
      college,
      tag: await generateTag(userDetail),
    },
  });
  return user;
};
export { setUserDetail };

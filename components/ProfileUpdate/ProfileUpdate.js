import { useEffect, useState } from "react";

const getDetails = async () => {
  const response = await fetch(`/api/user/profile/`);
  const userDetail = await response.json();
  return userDetail;
};

const ProfileUpdate = ({ email }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const updateState = (userDetail) => {
    const { fname, lname, pnumber, address, dob, gender, yearOfStudy } =
      userDetail;
    setFname(fname || "");
    setLname(lname || "");
    setPnumber(pnumber || "");
    setAddress(address || "");
    setDob(dob || "");
    setGender(gender || "");
    setYearOfStudy(yearOfStudy || "");
  };
  const updateProfile = async () => {
    const response = await fetch("/api/user/profile/update", {
      method: "POST",
      body: JSON.stringify({
        fname,
        lname,
        pnumber,
        address,
        dob,
        gender,
        yearOfStudy,
      }),
    });
    const userDetail = await response.json();
    updateState(userDetail);
  };
  useEffect(() => {
    getDetails().then(updateState);
  }, [email]);
  return (
    <>
      <form>
        <label>
          fname:
          <input
            className="bg-gray-50 border border-gray-900"
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </label>

        <label>
          lname:
          <input
            className="bg-gray-50 border border-gray-900"
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </label>

        <label>
          pnumber:
          <input
            className="bg-gray-50 border border-gray-900"
            type="text"
            value={pnumber}
            onChange={(e) => setPnumber(e.target.value)}
          />
        </label>
      </form>
      <button
        onClick={updateProfile}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Button
      </button>
    </>
  );
};

export default ProfileUpdate;

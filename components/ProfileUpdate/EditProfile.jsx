import fuzzysort from "fuzzysort";
import { useState, useEffect } from "react";
import collegeList from "./college";
import Spinner from "../Spinner";
import Image from "next/image";
import { signOut } from "next-auth/react";
const getDetails = async () => {
  const response = await fetch(`/api/user/profile/`);
  const userDetail = await response.json();
  return userDetail;
};

export default function Account({ user }) {
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [college, setCollege] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [tag, setTag] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Male");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [profileUpdating, setProfileUpdating] = useState(false);
  const suggestionHandler = (e) => {
    const val = e.target.innerText;
    console.log(val);
    setCollege(val);
  };
  const makeLi = (name) => {
    return (
      <li onClick={suggestionHandler} className="p-1 cursor-pointer">
        <p className="py-2 px-4 hover:bg-gray-600 hover:text-white">{name}</p>
      </li>
    );
  };
  const collegeListFilter = (collegeName) => {
    const results = fuzzysort.go(collegeName, collegeList, {
      limit: 5,
    });
    const filterNames = [];
    results.forEach((e) => {
      filterNames.push(e.target);
    });
    setSuggestion(filterNames);
  };
  const updateState = (userDetail) => {
    const {
      fname,
      lname,
      pnumber,
      address,
      dob,
      gender,
      yearOfStudy,
      college,
      tag,
    } = userDetail;
    setFname(fname || "");
    setLname(lname || "");
    setTag(tag || "");
    setPnumber(pnumber || "");
    setAddress(address || "");
    setDob(dob || "");
    setGender(gender || "");
    setYearOfStudy(yearOfStudy || "");
    setCollege(college || "");
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
        college,
      }),
    });
    const userDetail = await response.json();
    updateState(userDetail);
    setProfileUpdating(false);
    location.reload();
  };

  useEffect(() => {
    getDetails().then(updateState);
  }, [user]);
  return (
    <>
      <div className="lg:w-4/12 bg-[#1f2937] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative shadow-md">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-24 rounded">
              <Image height={96} width={96} src={user.image} alt={"pp"}></Image>
            </div>
          </div>
          <h2 className="ml-4 text-xl font-bold text-white">{tag}</h2>
        </div>
        <p className="mt-4 text-xl text-gray-100">{fname + " " + lname}</p>
        <p className="mt-4 text-xl text-gray-100">{user.email}</p>
        <div
          className="justify-center px-4 py-2 cursor-pointer max-w-min mt-8 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600"
          onClick={() => signOut()}
        >
          Logout
        </div>
      </div>

      <div className="lg:w-7/12 bg-[#1f2937] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative shadow-md">
        <div className="">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setProfileUpdating(true);
              updateProfile();
            }}
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required={true}
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                <p className="invisible peer-invalid:visible text-red-400">
                  This field cannot be empty
                </p>
                <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  First name
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required={true}
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
                <p className="invisible peer-invalid:visible text-red-400">
                  This field cannot be empty
                </p>
                <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Last name
                </label>
              </div>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                pattern="[0-9]{10}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required={true}
                value={pnumber}
                onChange={(e) => setPnumber(e.target.value)}
              />
              <p className="invisible peer-invalid:visible text-red-400">
                Must be 10 digit number
              </p>
              <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Phone number [ 10 digit ]
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <label className="block mb-2 text-sm font-medium text-gray-400">
                  Gender
                </label>
                <select
                  id="gender"
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  value={gender}
                  required={true}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <label className="block mb-2 text-sm font-medium text-gray-400">
                  Date Of Birth
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    datepicker=""
                    type="date"
                    className="border sm:text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 datepicker-input"
                    placeholder="Select date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <label className="block mb-2 text-sm font-medium text-gray-400">
                  Year Of Study
                </label>
                <select
                  id="gender"
                  className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  value={yearOfStudy}
                  onChange={(e) => setYearOfStudy(e.target.value)}
                >
                  <option>1 st</option>
                  <option>2 nd</option>
                  <option>3 rd</option>
                  <option>4 th</option>
                  <option>5 th</option>
                </select>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <label className="block mb-2 text-sm font-medium text-gray-400">
                  College Name
                </label>
                <input
                  type="text"
                  id="base-input"
                  onChange={(e) => {
                    setCollege(e.target.value);
                    collegeListFilter(college);
                  }}
                  value={college}
                  onFocus={() => {
                    setShowSuggestion(true);
                  }}
                  onBlur={
                    // Dirty Hack
                    () => {
                      setTimeout(() => {
                        setShowSuggestion(false);
                      }, 250);
                    }
                  }
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="z-10 w-auto absolute rounded divide-y divide-gray-100 shadow bg-gray-700">
                  {showSuggestion && (
                    <ul
                      className="py-1 text-sm text-gray-200"
                      aria-labelledby="dropdownDefault"
                    >
                      {suggestion.map((e, idx) => {
                        return <div key={idx}>{makeLi(e)}</div>;
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center"></div>
            <div className="z-10 mb-6 w-full group">
              <label className="block mb-2 text-sm font-medium text-gray-400">
                Address
              </label>
              <textarea
                id="message"
                rows="4"
                className="z-10 block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>

            <button className="text-whitefocus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
              {profileUpdating ? <Spinner /> : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

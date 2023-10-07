import getUserFromToken from "utils/getUserFromToken";
import { getEvents } from "lib/eventList";
import Image from "next/image";
import QRCode from "qrcode";
import crypto from "crypto";
import DB from "@db";

export default function Profile({ session, email, events, eventsData, qrUrl }) {
  if (session) {
    return (
      <div className="bg-1 h-screen w-full flex">
        <div className="px-5 mx-auto flex items-start flex-wrap justify-around">
          <div className="grid place-items-center h-full w-full">
            {events.length < 1 ? (
              <div>
                <div className="alert alert-warning shadow-lg max-w-fit mx-auto">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span>You are not eligible for entry</span>
                  </div>
                </div>
                <h1 className="p-5 text-lg mx-auto text-white text-center">
                  You must register for at least 1 <br /> event to be eligible
                  for entry
                </h1>
              </div>
            ) : (
              <div>
                <h1 className="mt-4 pb-5 text-2xl text-center text-bold  text-gray-200">
                  Show code at entry
                </h1>
                <div className="h-64 w-64 relative mx-auto">
                  <Image src={qrUrl} alt="USER_QR_CODE" fill sizes="100vw"></Image>
                </div>
                <h1 className="mt-4 p-5 text-lg text-center text-white break-all">
                  {email}
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full min-w-screen min-h-screen flex flex-col justify-center items-center bg-[#332851]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-9xl sm:text-[15vw] font-bold text-[#ca3074] leading-none">
            403
          </h1>
          <h2 className="uppercase text-[#ca3074] font-bold text-base sm:text-3xl">
            Access Forbidden
          </h2>
          <h5 className="text-sm sm:text-lg text-[#f6c667] font-normal">
            (Sorry buddy...)
          </h5>
        </div>
      </div>
    );
  }
}

const replaceSpecialChars = (b64string) => {
  return b64string.replace(/[=+/]/g, (charToBeReplaced) => {
    switch (charToBeReplaced) {
      case "=":
        return "";
      case "+":
        return "-";
      case "/":
        return "_";
    }
  });
};

const toBase64 = (obj) => {
  const str = JSON.stringify(obj);
  return replaceSpecialChars(Buffer.from(str).toString("base64"));
};

const encodeData = (header, payload) => {
  const secret = process.env.QR_JWT_SECRET;
  const signature = replaceSpecialChars(
    crypto
      .createHmac("sha256", secret)
      .update(toBase64(header) + "." + toBase64(payload))
      .digest("base64")
  );
  return toBase64(header) + "." + toBase64(payload) + "." + signature;
};

export async function getServerSideProps({ req }) {
  const user = await getUserFromToken(req);
  let session = true;

  let email = "admin@admin.com";
  let userDetails = null;
  let eventsData = [];
  let userEvents = [];
  let events = [];
  let eventsIdArr = [];
  if (user == null) session = false;
  else {
    email = user.email;
    eventsData = await getEvents();
    userEvents = await DB.getUserTickets(user.userId);
    userDetails = await DB.getUserDetail(user.email);
  }
  userEvents.forEach((event) => {
    events.push({
      eventId: event.eventId,
    });
    eventsIdArr.push(event.eventId);
  });

  const qrConfig = {
    quality: 0.9,
    margin: 1,
    color: {
      dark: "#000",
      light: "#fff",
    },
  };

  const header = { alg: "HS256", type: userDetails.role };
  const payload = {
    name: userDetails.fname + " " + userDetails.lname,
    email: user.email,
    tag: userDetails.tag,
    eventsArr: eventsIdArr,
  };

  const qrData = encodeData(header, payload);
  let qrUrl = await QRCode.toDataURL(qrData, qrConfig);

  return {
    props: {
      session,
      email,
      events,
      eventsData,
      qrUrl,
    },
  };
}

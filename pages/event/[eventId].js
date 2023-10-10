import { getEvents, getEventById } from "lib/eventList";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";
import Image from "next/image";
import TeamName from "@/components/eventPageComp/TeamName";
import Link from "next/link";

const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const sendDetailsForVerification = async (details) => {
  const response = await fetch("/api/payment/verify", {
    method: "POST",
    body: JSON.stringify(details),
  });
  if (response.status == 200) return true;
  else return false;
};

const makePayment = async (eventId) => {
  const res = await initializeRazorpay();

  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }

  const response = await fetch("/api/payment/", {
    method: "POST",
    body: JSON.stringify({
      eventId,
    }),
  });
  if (response.status != 200) {
    const error = await response.json();
    alert(`[Error]\n${error.error}\nReload Page`);
    return null;
  }
  const data = await response.json();
  var options = {
    key: process.env.RPAY_KEY,
    name: "Momentum 2023",
    currency: data.currency,
    amount: data.amount,
    order_id: data.id,
    description: "Event Ticket",
    image: "/ncu-logo-small.png",
    handler: function (response) {
      sendDetailsForVerification(response).then((verificationStatus) => {
        if (!verificationStatus) alert("Payment Verification Failed");
        location.reload();
      });
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const getDetails = async () => {
  const response = await fetch(`/api/user/profile/`);
  const userDetail = await response.json();
  return userDetail;
};
const checkDoesProfileNeedUpdate = async () => {
  const { fname, lname, pnumber } = await getDetails();
  let ret = false;
  if (fname == "" || fname == null) ret = true;
  if (lname == "" || lname == null) ret = true;
  if (pnumber == "" || pnumber == null) ret = true;
  return ret;
};

export default function EventPage({ event }) {
  const [comp, setComp] = useState(
    <div className="flex justify-center">
      <Spinner />
    </div>
  );
  const [teamName, setTeamName] = useState("");
  const getComp = async (eventId, isRegOpen) => {
    const response = await fetch(`/api/user/ticket/event/${eventId}`);
    let login = (
      <div className="max-w-fit flex rounded-lg bg-yellow-300 text-black px-4 py-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current flex-shrink-0 w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <span>Login to register in {event.name}</span>
      </div>
    );
    let buy = (
      <button
        onClick={() => makePayment(eventId)}
        className="bg-green-600 hover:bg-green-800 px-4 py-2 rounded-lg text-white"
      >
        Buy Ticket
      </button>
    );

    let warnprofileupdate = (
      <div className="alert alert-warning shadow-lg max-w-fit rounded-lg">
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
        <span>Update your profile to buy ticket</span>
      </div>
    );

    let noReg = (
      <div className="  flex items-center justify-center ">
        <div className="text-xl font-bold rounded-md bg-slate-700 p-4 text-white">
          {" "}
          Currently Not Taking Registrations
        </div>
      </div>
    );

    if (response.status == 401)
      return <div className="flex justify-center">{login}</div>;
    if (response.status == 200) {
      const data = await response.json();
      const isTeamEvent = event.teamSizeMin > 1;
      let view = (
        <>
          <div>
            <div className="bg-blue-400 flex px-4 py-2 rounded-lg text-white shadow-lg min-w-fit">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="mx-2">
                You have already Registered for this event!
              </span>
            </div>
            <Link href={event.whatsappLink}>
              <div className="mt-5 rounded-xl flex bg-green-500 text-white px-6 py-4 shadow-lg">
                <svg
                  className=" fill-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Click To Join Whatsapp group
              </div>
            </Link>
            {isTeamEvent && (
              <Link href={event.teamFormLink ?? ""} target="_blank">
                <div className="rounded-lg bg-purple-500 text-white px-4 py-2 mt-2">
                  Fill in the team details
                </div>
              </Link>
              // <TeamName prevName={data["team_name"]} eventId={eventId} />
            )}
          </div>
        </>
      );
      // const eventDetail = await getEventById(eventId);

      return (
        <>
          <div className="flex justify-center">{view}</div>
        </>
      );
    }
    const x = await checkDoesProfileNeedUpdate();
    if (x) {
      return <div className="flex justify-center">{warnprofileupdate}</div>;
    }
    if (isRegOpen) {
      return <div className="flex justify-center">{buy}</div>;
    } else {
      return <div className="flex justify-center">{noReg}</div>;
    }
  };

  useEffect(() => {
    getComp(event.id, event.isRegOpen).then(setComp);
  }, [event.id]);
  const bucketImageUrl = `https://momentum23-bukcet.blr1.digitaloceanspaces.com/poster/${event.id}.webp`;
  const onstage_link =
    "https://drive.google.com/file/d/1PrH3qPp-KKA1LFGBdbtE0reQTZa7dL-Y/view?usp=sharing";
  const offstage_link =
    "https://drive.google.com/file/d/1PQJIn8ymDnEzCn140blcrlBnCjd2x8ea/view?usp=sharing";
  var rules = [];
  if (event.rules) {
    rules = event.rules.split("#");
    rules.shift();
  }
  rules;

  return (
    <div className=" min-h-[calc(100vh_-_68px)] pt-32 md:px-48 px-8 pb-32 ">
      <div
        id="top-section"
        className="flex flex-wrap flex-col-reverse md:flex-row mb-8 md:mb-0 "
      >
        <div className=" md:w-3/4 w-full">
          <h1 className=" font-bold text-3xl pb-4 text-white md:text-start text-center">
            {event.name}
          </h1>
          <p>
            Date:{" "}
            <span className=" text-white font-thin">
              {event.date ? event.date : "3 - 4 November, 2023"}
            </span>
          </p>
          <p>
            Venue:{" "}
            <span className=" text-white font-thin">
              {event.venue
                ? event.venue
                : "The NorthCap University, Sector 23-A, Gurgaon"}
            </span>
          </p>
          <p>
            Registration Fee:{" "}
            <span className=" text-white font-thin">
              ₹ {event.amount ? event.amount : "TBD"}
            </span>
          </p>
          <p>
            Team Size:{" "}
            <span className=" text-white font-thin">
              {event.teamSizeMax == 1
                ? "Individual"
                : `${event.teamSizeMin} - ${event.teamSizeMax}`}
            </span>
          </p>
        </div>
        <div className="md:w-1/4 w-full overflow-hidden rounded-md flex justify-center items-center mb-8 ">
          <Image
            src={bucketImageUrl}
            height={240}
            width={240}
            alt={event.id}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div id="Description" className=" mb-6">
        <h1 className=" font-bold text-2xl text-white">Description</h1>
        <p>{event.desc}</p>
      </div>
      <div id="Rules" className="mb-6">
        <h1 className=" font-bold text-2xl text-white">Rules</h1>
        {/* <Link
          href={event.eventType == "ONSTAGE" ? onstage_link : offstage_link}
          rel="noreferrer"
          target="_blank"
        >
          <button
            type="button"
            className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
          >
            Event Rulebook
          </button>
        </Link> */}
        <ul className="list-disc">
          {rules.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {comp}
    </div>
  );
}

export async function getStaticPaths() {
  const events = await getEvents();
  const paths = events.map((event) => ({
    params: { eventId: event.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const event = await getEventById(params.eventId);
  const ONE_MINUTES = 1 * 60;
  return {
    props: {
      event,
    },
    revalidate: ONE_MINUTES,
  };
}

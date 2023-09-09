import MyTickets from "@/components/MyTickets";
import getUserFromToken from "utils/getUserFromToken";
import { getEvents } from "lib/eventList";
import DB from "@db";

export default function Profile({ session, email, events, eventsData }) {
  if (session) {
    return (
      <div className="bg-profile bg-gray-700 max-w-full min-h-[100vh]">
        <div className="pt-20">
          <MyTickets events={events} email={email} eventsData={eventsData} />
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

export async function getServerSideProps({ req }) {
  const user = await getUserFromToken(req);
  let session = true;
  let email = "admin@admin.com";
  let eventsData = [];
  let userEvents = [];
  let events = [];

  if (user == null) session = false;
  else {
    email = user.email;
    eventsData = await getEvents();
    userEvents = await DB.getUserTickets(user.userId);
  }
  userEvents.forEach((event) => {
    events.push({
      eventId: event.eventId,
    });
  });

  return {
    props: {
      session,
      email,
      events,
      eventsData,
    },
  };
}

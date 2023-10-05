import getUserFromToken from "utils/getUserFromToken";
import { getEvents } from "lib/eventList";
import Link from "next/link";
import DB from "@db";

export default function Admin({ isAdmin, eventsData }) {
  if (!isAdmin)
    return (
      <div className="h-full min-h-screen pt-[80px] w-full">
        <div className="flex flex-col items-center justify-center h-full pb-10">
          <h1 className="p-5 text-lg mx-auto text-white text-center">
            Comming Soon
          </h1>
        </div>
      </div>
    );
  return (
    <div className="h-full min-h-screen pt-[80px] w-full">
      <div className="flex flex-col items-center justify-center h-full pb-10">
        <h1 className="p-5 text-lg mx-auto text-white text-center">Events</h1>
        <div className="grid m-5 grid-cols-2 sm:grid-cols-4 gap-4">
          {eventsData.map((item) => (
            <a key={item.id} href={`/admin/${item.id}`}>
              <button className="btn btn-primary">
                {`[${item.id}] ${item.name}`}
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const user = await getUserFromToken(req);

  let session = true;
  let email = "";
  let isAdmin = false;
  let userDetails;
  let eventsData;
  if (user == null) session = false;
  else {
    email = user.email;
    userDetails = await DB.getUserDetail(user.email);
    if (userDetails.role == "organiser") {
      isAdmin = true;
      eventsData = await getEvents();
    }
  }
  return {
    props: { isAdmin, eventsData },
  };
}

import getUserFromToken from "utils/getUserFromToken";
import { getEventById } from "lib/eventList";
import Link from "next/link";
import DB from "@db";

export default function Admin({ isAdmin, event, eventRegDataJson }) {
  let statusOpen = (
    <div className="alert alert-success shadow-lg max-w-fit mx-auto">
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>OPEN</span>
      </div>
    </div>
  );
  let statusClosed = (
    <div className="alert alert-error shadow-lg max-w-fit mx-auto">
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
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>CLOSED</span>
      </div>
    </div>
  );
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
        <h1 className="p-5 text-xl mx-auto text-white text-center">
          Event {`[${event.id}] ${event.name}`}
        </h1>
        {event.isRegOpen ? statusOpen : statusClosed}
        <div className="mt-10 border-gray-300 border-2 max-w-full overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>TAG</th>
                <th>NAME</th>
                <th>PHONE</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody>
              {}
              {eventRegDataJson.map(({ user }, idx) => (
                <tr key={idx}>
                  <th>{user.tagnum}</th>
                  <th>{user.tag}</th>
                  <td>{`${user.fname} ${user.lname}`}</td>
                  <td>{user.pnumber}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, query }) {
  let user = await getUserFromToken(req);

  let session = true;
  let email = "";
  let isAdmin = false;
  let userDetails;
  let eventRegData;
  let eventRegDataJson;

  let eventId = query.eventId;
  if (isNaN(eventId)) user = null;
  const event = await getEventById(eventId);
  if (event == null) user = null;

  if (user == null) session = false;
  else {
    email = user.email;
    userDetails = await DB.getUserDetail(user.email);
    if (userDetails.role == "organiser") {
      isAdmin = true;
      eventRegData = await DB.getEventRegData(eventId);
      eventRegDataJson = eventRegData.map((reg) => {
        return {
          user: {
            tagnum: reg.user.tagnum,
            tag: reg.user.tag,
            fname: reg.user.fname,
            lname: reg.user.lname,
            pnumber: reg.user.pnumber,
            email: reg.user.email,
          },
        };
      });
    }
  }
  return {
    props: { isAdmin, event, eventRegDataJson },
  };
}

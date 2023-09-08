import { useState, useEffect } from "react";
import { getEvents } from "lib/eventList";
import Link from "next/link";

// TODO: check later
let eventsData = [];

const getDetails = async () => {
  const response = await fetch(`/api/user/ticket/`);
  const userDetail = await response.json();
  eventsData = await getEvents();
  return userDetail;
};

const getTR = (index, eventId) => {
  const event = eventsData.find((e) => e.id == eventId);
  const eventLink = `/event/${eventId}`;
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{event.name}</td>
      <td>{event.amount}</td>
      <td>
        <Link href={eventLink}>
          <a className="link link-accent">View</a>
        </Link>
      </td>
    </tr>
  );
};

export default function Account({ user }) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getDetails().then(setEvents);
  }, [user]);
  return (
    <>
      <div className="lg:w-3/6 bg-[#2a303c] rounded-lg py-4 flex flex-col w-full mt-10 md:mt-0 relative shadow-md">
        <h1 className="mt-4 pb-2 text-2xl mx-auto text-white">
          Your Event Tickets
        </h1>
        <h1 className="mt-4 p-5 text-lg mx-auto text-white break-all">
          {user.email}
        </h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Event Name</th>
                <th>Paid</th>
                <th>View Event</th>
              </tr>
            </thead>
            <tbody>
              {events.map(({ eventId }, idx) => getTR(idx, eventId))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

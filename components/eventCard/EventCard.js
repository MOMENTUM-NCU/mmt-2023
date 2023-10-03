import Link from "next/link";

const EventCard = ({ event }) => {
  const eventLink = "/event/" + event.id;
  const eventTeamType =
    event.teamSizeMax == 1
      ? "Individual"
      : `Team ${event.teamSizeMin} - ${event.teamSizeMax}`;
  return (
    <div className="card w-80 sm:w-96 bg-[#1f242d] text-gray-300 shadow-xl ">
      <div className="card-body">
        <h2 className="card-title text-gray-200">{event.name}</h2>
        <div className="flex gap-3">
          <div className="badge badge-primary"> Rs {event.amount}</div>
          <div className="badge badge-primary"> {eventTeamType} </div>
          {false && <div className="badge badge-success"> Purchased </div>}
        </div>
        <p className="min-h-12">{event.shortDesc}</p>
        <div className="card-actions justify-end">
          <Link href={eventLink}>
            <span className="btn btn-primary">Know More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

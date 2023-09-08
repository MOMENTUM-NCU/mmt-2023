import { getEvents, getEventById } from "lib/eventList";
import Image from "next/image";

export default function EventPage({ event }) {
  const s3url = `https://momentum-poster-s3.s3.ap-south-1.amazonaws.com/poster/${event.id}.webp`;
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
              {event.date ? event.date : "4 - 5 November, 2022"}
            </span>
          </p>
          <p>
            Venue:{" "}
            <span className=" text-white font-thin">
              {event.venue
                ? event.venue
                : "The Northcap University, Sector 23-A, Gurgaon"}
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
          <Image src={s3url} height={240} width={240} alt={event.id} />
        </div>
      </div>
      <div id="Description" className=" mb-6">
        <h1 className=" font-bold text-2xl text-white">Description</h1>
        <p>{event.desc}</p>
      </div>
      <div id="Rules" className="mb-6">
        <h1 className=" font-bold text-2xl text-white">Rules</h1>
        <a
          href={event.eventType == "ONSTAGE" ? onstage_link : offstage_link}
          rel="noreferrer"
          target="_blank"
        >
          <button
            type="button"
            className=" focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Event Rulebook
          </button>
        </a>
        <ul className="list-disc">
          {rules.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
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

import Link from "next/link";
import Image from "next/image";
export default function EventCard(e) {
  const event = e.event;
  const s3url = `https://momentum-poster-s3.s3.ap-south-1.amazonaws.com/poster/${event.id}.webp`;
  return (
    <Link href={`./event/${event.id}`}>
      <div>
        <div className="relative h-60 w-60 bg-transparent cursor-pointer group drop-shadow-lg rounded-md overflow-hidden shadow-sm">
          <div className=" absolute w-full h-full overflow-clip hover:backdrop-blur-sm">
            <Image src={s3url} layout="fill" alt="event_poster" />
          </div>
          <div className="absolute opacity-0 hover:opacity-100  w-full h-full flex justify-center items-center flex-col hover:backdrop-blur-md hover:backdrop-brightness-75 duration-150">
            <h1 className=" text-3xl text-white font-bold text-center ">{event.name}</h1>
            <p className=" text-white ">{event.shortDesc}</p>
          </div>
        </div>
        {/* <div className="flex flex-row-reverse">
          {event.amount}
        </div> */}
      </div>
    </Link>
  );
}

import { Tab } from "@headlessui/react";
import EventCard from "./EventCard";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const data = [
  {},
  {
    img: "https://picsum.photos/400",
    position: "#postion",
    name: "Sid",
    desc: "",
  },
  {
    img: "https://picsum.photos/400",
    position: "#postion",
    name: "Sid",
    desc: "",
  },
  {
    img: "https://picsum.photos/400",
    position: "#postion",
    name: "Sid",
    desc: "",
  },
];

export default function EventsSection() {
  let [events] = useState({
    onStage: [
      {
        id: 1,
        title: "Event 1",
        date: "04/11",
        desc: "",
        img: "https://picsum.photos/400",
      },
      {
        id: 2,
        title: "Event 2",
        date: "04/11 ",
        desc: "",
        img: "https://picsum.photos/400",
      },
    ],
    offStage: [
      {
        id: 1,
        title: "Offstage Event 1",
        date: "04/11",
        desc: "",
        img: "https://picsum.photos/400",
      },
      {
        id: 2,
        title: "Offstage Event 2",
        date: "04/11",
        desc: "",
        img: "https://picsum.photos/400",
      },
    ],
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center container mx-auto max-w-full  ">
        <Tab.Group>
          <Tab.List className="flex justify-around items-center space-x-1 rounded-xl w-3/4 sm:w-2/4 bg-blue-900/20 p-2">
            {Object.keys(events).map((eventType) => (
              <Tab
                key={eventType}
                className={({ selected }) =>
                  classNames("event-tab", selected ? "bg-white" : "")
                }
              >
                {eventType}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="w-full mt-5">
            {Object.values(events).map((eventType, idx) => (
              <Tab.Panel
                key={idx}
                className="grid grid-flow-col auto-cols-max gap-4 w-full bg-gray-400 p-2"
              >
                {eventType.map((e, idx) => (
                  <EventCard key={idx} event={e} />
                  // <EventCard key={idx} props={e} />
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}

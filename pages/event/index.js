import { getEvents } from "lib/eventList";
import EventCard from "@/components/newUI/eventCard";
import PageWrapper from "@/components/PageWrapper";
import { useRef, useState } from "react";

export default function Events({ events }) {
  const [eventFilter, setEventFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Music",
    "Dance",
    "Entertainment",
    "Quizzing",
    "Fun Activities",
    "Fashion",
    "Culinary",
    "Sports",
    "Esports",
    "Technical",
    "Non Technical",
    "Creative",
    "Comic",
    "Finance",
    "Literary",
  ];
  return (
    <div className="h-full min-h-screen py-[80px] bg-[#1a1a1a]">
      <div className="sm:hidden block px-8 py-8">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          Event Categories
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={eventFilter}
          onChange={(e) => {
            setEventFilter(e.target.value);
            setSearchQuery("");
          }}
        >
          <option value="All">All</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="h-full flex gap-8 items-start ">
        <div className=" hidden  sm:flex item-start flex-col gap-6  min-w-[175px] ml-8">
          <div>
            <h1 className=" text-white font-bold text-2xl">Events</h1>
          </div>
          <div className="flex item-start flex-col gap-2">
            <a
              className=" cursor-pointer hover:text-white"
              onClick={() => {
                setEventFilter("All");
                setSearchQuery("");
              }}
            >
              All
            </a>
            {categories.map((item) => (
              <a
                key={item}
                className=" cursor-pointer hover:text-white"
                onClick={() => {
                  setEventFilter(item);
                  setSearchQuery("");
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div id="events">
          <div className="px-8 pb-4  md:w-[420px]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSearchQuery(e.target.search.value);
              }}
            >
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-purple-600 hover:bg-purple-800 font-medium rounded-lg text-sm px-3 py-1 "
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-wrap gap-14 justify-center md:justify-start  px-8">
            {events
              .filter((event) => {
                if (searchQuery == "") {
                  if (eventFilter == "All") {
                    return true;
                  }
                  return event["categories"].includes(eventFilter);
                } else {
                  return (
                    event["name"]
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()) ||
                    event["shortDesc"]
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  );
                }
              })
              .map((e) => {
                const eventUrl = "/event/" + e.id;
                return (
                  <div key={e.id}>
                    <EventCard event={e} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const events = await getEvents();
  const TEN_MINUTES = 10 * 60;
  return {
    props: {
      events,
    },
    revalidate: TEN_MINUTES,
  };
}

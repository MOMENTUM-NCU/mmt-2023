const URL = "https://momentum-poster-s3.s3.ap-south-1.amazonaws.com/data.json";

let cache = null;
let cacheTime = 0;

const getEvents = async () => {
  // Cache for one minute
  let cacheTimeDiffSec = (Date.now() - cacheTime) / 1000;
  if (cache != null && cacheTimeDiffSec < 60) return cache;

  const res = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  });
  const eventList = await res.json();

  // const eventList = [
  //   {
  //     id: 1,
  //     name: "Event 1",
  //     eventType: "ONSTAGE",
  //     shortDesc: "Description for Event 1",
  //     amount: "$10",
  //     teamSizeMin: 1,
  //     teamSizeMax: 1,
  //     categories: "Music",
  //   },
  //   {
  //     id: 2,
  //     name: "Event 2",
  //     eventType: "ONSTAGE",
  //     shortDesc: "Description for Event 2",
  //     amount: "$20",
  //     teamSizeMin: 1,
  //     teamSizeMax: 1,
  //     categories: "Entertainment",
  //   },
  //   {
  //     id: 3,
  //     name: "Event 3",
  //     eventType: "ONSTAGE",
  //     shortDesc: "Description for Event 3",
  //     amount: "$30",
  //     teamSizeMin: 1,
  //     teamSizeMax: 1,
  //     categories: "Dance",
  //   },
  // ];
  // Update cache
  cache = eventList;
  cacheTime = Date.now();

  return eventList;
};

const getEventById = async (eventId) => {
  const eventList = await getEvents();
  const event = eventList.find((e) => e.id == eventId);
  return event ? event : null;
};

export { getEvents, getEventById };

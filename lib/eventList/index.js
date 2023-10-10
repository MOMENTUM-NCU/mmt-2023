const URL =
  "https://momentum23-bukcet.blr1.digitaloceanspaces.com/eventList.json";

let cache = null;
let cacheTime = 0;

const getEvents = async () => {
  // Cache for one minute
  let cacheTimeDiffSec = (Date.now() - cacheTime) / 1000;
  if (cache != null && cacheTimeDiffSec < 60) return cache;

  const res = await fetch(URL);
  const eventList = await res.json();

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

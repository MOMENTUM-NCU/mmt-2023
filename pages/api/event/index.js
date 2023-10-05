import { getEvents } from "lib/eventList";

const handler = async (req, res) => {
  try {
    const data = await getEvents();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "failed to load events data" });
  }
};

export default handler;

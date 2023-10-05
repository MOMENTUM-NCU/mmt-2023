import { getEventById } from "lib/eventList";

const handler = async (req, res) => {
  const { eventId } = req.query;
  if (isNaN(eventId)) return res.status(400).json({});
  const event = await getEventById(eventId);
  if (event == null) return res.status(404).json({});
  res.status(200).json(event);
};
export default handler;

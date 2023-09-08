import getInstance from "./_getInstance";
import Razorpay from "razorpay";
import shortid from "shortid";
import { getEventById } from "lib/eventList";

const getOrCreateOrder = async (userId, eventId) => {
  const prisma = getInstance();
  eventId.toString();
  let payment = await prisma.payment.findUnique({
    where: {
      userId_eventId: {
        userId,
        eventId,
      },
    },
  });

  if (payment == null) {
    const event = await getEventById(eventId);
    const order = await razorpayGenerateOrder(event.amount, userId);
    if (order == null) {
      return null;
    }
    payment = await prisma.payment.create({
      data: {
        id: order.id,
        status: "UNPAID",
        eventId: eventId,
        userId: userId,
        currency: order.currency,
        amount: order.amount.toString(),
      },
    });
  }
  if (payment.status == "PAID") return null;
  return payment;
};

export { getOrCreateOrder };

const razorpayGenerateOrder = async (eventAmount, userId) => {
  const razorpay = new Razorpay({
    key_id: process.env.RPAY_KEY,
    key_secret: process.env.RPAY_SECRET,
  });

  const payment_capture = 1;
  const amount = eventAmount;
  const currency = "INR";
  const options = {
    amount: (amount * 100).toString(),
    currency,
    receipt: shortid.generate(),
    payment_capture,
    notes: {
      userId,
    },
  };

  try {
    return await razorpay.orders.create(options);
  } catch (err) {
    console.log(err);
    return null;
  }
};

import DB from "@db";
import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const reqBody = JSON.stringify(req.body) || "XXX";
    const signature = req.headers["x-razorpay-signature"] || "XXX";
    const secret = process.env.RPAY_SECRET;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(reqBody)
      .digest("hex");
    if (expectedSignature == signature) {
      const orderId = JSON.parse(reqBody).payload.order.entity.id;
      const orderStatus = JSON.parse(reqBody).payload.order.entity.status;
      if (orderStatus == "paid") {
        const order = await DB.setOrderPaid(orderId, "hook");
      }
    }
  }
  res.status(200).json({ status: "ok" });
}

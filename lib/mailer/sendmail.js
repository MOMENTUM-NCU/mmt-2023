import nodemailer from "nodemailer";
import getHtml from "./template/reg";
const cb = (err, info) => {
  // if (err) {
  //   console.log("##ERR");
  //   console.log(err);
  // } else {
  //   console.log("##SUP?");
  //   console.log(info);
  // }
};

export default function sendEmail(email, name) {
  const transporterOptions = {
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_USERNAME,
      pass: process.env.NODEMAILER_PASSWORD,
    },
    from: "Momentum 2023",
  };
  let transporter = nodemailer.createTransport(transporterOptions);
  const mail = {
    to: email,
    subject: "[Momentum] Registration Successfull!",
    replyTo: "registration-momentum2022@ncuindia.edu",
    html: getHtml(name),
  };
  transporter.sendMail(mail, cb);
}

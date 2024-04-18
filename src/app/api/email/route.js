import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// npm i nodemailer
// You have to create an app password to use this feature. Visit the below link.
// myaccount.google.com/apppasswords 

// Create a .env.local file in the parent directory, there write MY_EMAIL, and MY_PASSWORD(app password).

export async function POST(request) {
  const { name, email, subject, message } = await request.json();
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: subject,
    text: `Name: ${name}, \n${message}`,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent Successfully.");
        } else {
          reject("There was an error.");
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent successfully." });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

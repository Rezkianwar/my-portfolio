import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// configure email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_SENDER_USER,
    pass: process.env.NEXT_PUBLIC_SENDER_PASS,
  },
});

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email, and Message are required fields!" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_SENDER_USER,
      to: process.env.NEXT_PUBLIC_RECIEVER_USER,
      subject: " New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed processing contact form!" },
      { status: 500 }
    );
  }
}

// import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export default async function handler(req: Request) {
  // if (req.method !== "POST") {
  //   return res.status(405).json({ error: "Method Not Allowed" });
  // }

  // try {
  //   const data = await req.json();

  //   return NextResponse.json({ success: true, message: "Form submitted successfully!", data });
  // } catch (error) {
  //   return NextResponse.json({ success: false, error: "Error processing request" }, { status: 500 });
  // }

  
  try {
    console.log("📩 Incoming request...");

    const { firstName, lastName, email, phone, message } = await req.json();
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "oluwapelumifafiyebi@gmail.com",
        pass: "lalv dmqe bxpv empv",
      },
    });

    const mailOptions = {
      from: email,
      to: "oluwapelumifafiyebi@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    
    return NextResponse.json({ success: true, message: "Email sent successfully!" });
    // res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
    // res.status(500).json({ error: "Failed to send email" });
  }
}

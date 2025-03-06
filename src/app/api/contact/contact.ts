// import { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   try {
//     // Create transporter for sending emails
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,  
//         pass: process.env.EMAIL_PASS,  
//       },
//     });

//     // Email content
//     const mailOptions = {
//       from: email,
//       to: process.env.RECIPIENT_EMAIL, 
//       subject: `New Contact Form Submission from ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     await transporter.sendMail(mailOptions);

//     return res.status(200).json({ success: "Message sent successfully!" });
//   } catch (error) {
//     console.error("Email sending error:", error);
//     return res.status(500).json({ error: "Failed to send message" });
//   }
// }

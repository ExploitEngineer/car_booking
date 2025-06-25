import nodemailer from "nodemailer";

export async function POST(req) {
  const { firstName, lastName, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "laeeq8005@gmail.com",
      subject: "New Contact Form Submission",
      text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
    });
  }
}

require("dotenv").config();
export async function POST(req, res) {
  const { email, discord, message, name } = await req.json();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "keyhelp.service.nexocrew.space",
    auth: {
      user: "noreply@jesperrichert.xyz",
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });


    console.log(process.env.EMAIL_PASSWORD);
    

  const mailData = {
    from: "noreply@jesperrichert.xyz",
    to: "contact@jesperrichert.xyz",
    subject: `Message From ${name} - ${email}`,
    text: message,
    html: `<h4><b>Message from</b> ${name}</h4>
    <hr />
    <p><b>Name</b>: <b>${name}</b></p>
    <p><b>Email</b>: <b><a href="mailto:${email}">${email}</a></b></p>
    <p><b>Discord</b>: <b>${discord ? discord : "No discord name added"}</b></p>
    <p><b>Message</b></p>
    <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailData);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

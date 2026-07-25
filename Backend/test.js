import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,

  auth: {
    user: "support@hamstruk.com",
    pass: "Hamstruk@123",
  },
});

async function test() {
  try {
    const info = await transporter.sendMail({
      from: "support@hamstruk.com",
      to: "YOUR_GMAIL@gmail.com",
      subject: "SMTP Test",
      text: "Hello from Node",
    });

    console.log(info);
  } catch (err) {
    console.log(err);
  }
}

test();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

module.exports = async (email, eventName) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Registration Successful",
    html: `<h2>You registered for ${eventName}</h2>`
  });
};
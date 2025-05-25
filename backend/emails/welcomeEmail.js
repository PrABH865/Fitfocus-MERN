const { createTransport } = require("nodemailer");

const welcomeMail = async (email) => {
  const config = {
    service: "gmail",
    auth: {
      user: "prabhjotsingh6840@gmail.com",
      pass: "eopcgpzmjccvvdai",
    },
  };

  const welcomeTransport = createTransport(config);

  const message = {
    from: '"FitFocus" <FitFocus@noreply.com>',
    to: email,
    subject: "Welcome to FitFocus",
    text: "Welcome to FitFocus! We're excited to have you on board.",
    html: "<strong>Welcome to FitFocus! We're excited to have you on board.</strong>",
  };

  try {
    await welcomeTransport.sendMail(message);
    console.log("Welcome email sent successfully");
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }
};

module.exports = welcomeMail;

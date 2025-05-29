const nodemailer = require("nodemailer");

const nodemailerWrapper = async (email, otp, subject, res) => {
  let config = {
    service: "Gmail",
    auth: {
      user: "prabhjotsingh6840@gmail.com",
      pass: "eopcgpzmjccvvdai",
    },
  };

  let transporter = nodemailer.createTransport(config);

  //   const otp = Math.floor(Math.random() * (9999 - 1000) + 1000);

  let message = {
    from: '"FitFocus" <no-reply@fitfocus.com>',
    to: email,
    subject: "Reset your password",
    text: `<a href="http://localhost:5173/auth/reset-password/${otp}">Click here to reset your password</a>`,
    html: `<b><a href="http://localhost:5173/auth/reset-password/${otp}">Click here to reset your password</a>b>`,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(200).json({
        msg: "Reset email successfully!",
        email: email,
        success: true,
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};

module.exports = nodemailerWrapper;

const nodemailer = require("nodemailer");

const nodemailerWrapper = async (email, otp, subject) => {
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
    subject: "Please verify your account",
    text: `Your OTP is: ${otp}`,
    html: `<b>Your OTP is: ${otp}</b>`,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(200).json({
        msg: "OTP sent to your email successfully!",
        email: email,
        success: true,
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};

module.exports = nodemailerWrapper;

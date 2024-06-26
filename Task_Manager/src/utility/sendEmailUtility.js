const nodeMailer = require("nodemailer");

const SendEmailUtility = async (emailTo,emailText,emailSubject) => {
  let transporter = nodeMailer.createTransport({
    host: 'mail.teamrabbil.com',
    port: 25,
    secure: false,
    auth: {
      user: 'info@teamrabbil.com',
      pass: '~sR4[bhaC[Qs',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: "MERN......",
    to: emailTo,
    subject: emailSubject,
    text: emailText,
  };
  return await transporter.sendMail(mailOptions);
};

module.exports = SendEmailUtility;

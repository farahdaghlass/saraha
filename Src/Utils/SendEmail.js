import nodemailer from "nodemailer"

 export async function sendEmail (to,subject, html){

    const transporter = nodemailer.createTransport({
      service: "gmail",
        auth: {
          user: process.env.EMAIL_SENDER,
          pass: process.env.PASSWORD_SENDER,
        },
      });

      const info = await transporter.sendMail({
        from: `farah daghlass  <${process.env.EMAIL_SENDER} > `, // sender address
        to, // list of receivers
        subject, // Subject line
        html, // html body
      });
};
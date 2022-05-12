import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9e53203cafa3df",
    pass: "f4a56b4b70d189",
  },
});

export class NodemailerAdapter implements MailAdapter{
        
    async sendEmail({subject , body}: SendMailData) {
         await transport.sendMail({
      from: "Equipe Widget <oi@feedget.com>",
      to: "Rodrigo Monteiro <rodrigomonteiiro17@gmail.com>",
      subject,
      html: body 
      ,
    });

    };
}
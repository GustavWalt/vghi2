const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

export default function sendMail() {
  const mailersend = new MailerSend({
    api_key: process.env.API_KEY,
  });

  const recipients = [new Recipient("gustav@vghi.se", "Gustav")];

  const emailParams = new EmailParams()
    .setFrom("frida@vghi.se")
    .setFromName("Frida Walter")
    .setRecipients(recipients)
    .setTemplateId("k68zxl2em5lj9057")
    .setSubject("Tack för din beställning!");

  mailersend.send(emailParams);
}

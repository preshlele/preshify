import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import handlebars from "handlebars";

export const sendTemplatedEmail = async ({
  to,
  subject,
  templateName,
  context,
}: {
  to: string;
  subject: string;
  templateName: string;
  context: Record<string, string>;
}) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const templatePath = path.resolve(`server/templates/${templateName}.hbs`);
  const templateSource = fs.readFileSync(templatePath, "utf8");
  const compiledTemplate = handlebars.compile(templateSource);
  const html = compiledTemplate(context);

  await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    to,
    subject,
    html,
  });
};

'use server';

import nodemailer from 'nodemailer';

export async function sendRegistrationEmail(formData: {
  name: string;
  email: string;
  phone: string;
  comment: string;
}) {
  const { name, email, phone, comment } = formData;

  const mailHost = process.env.SMTP_HOST;
  const mailPort = parseInt(process.env.SMTP_PORT || '587');
  const mailUser = process.env.SMTP_USER;
  const mailPass = process.env.SMTP_PASSWORD;

  if (!mailHost || !mailUser || !mailPass) {
    console.warn('SMTP environment variables are not fully configured. Email was not sent, but details are logged:');
    console.log({ name, email, phone, comment });
    return { success: true, message: 'SMTP not configured, but simulation succeeded.' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: mailHost,
      port: mailPort,
      secure: mailPort === 465,
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    const mailOptions = {
      from: `"Avenir Souriant Registration" <${mailUser}>`,
      to: 'administration@avenirsouriant.com',
      replyTo: email,
      subject: `New Student Registration: ${name}`,
      text: `
New Student Registration Details:
---------------------------------
Full Name: ${name}
Email: ${email}
Phone Number: ${phone}
Comment: ${comment}
`,
      html: `
<h3>New Student Registration Details</h3>
<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; font-family: sans-serif;">
  <tr>
    <td><strong>Full Name</strong></td>
    <td>${name}</td>
  </tr>
  <tr>
    <td><strong>Email</strong></td>
    <td><a href="mailto:${email}">${email}</a></td>
  </tr>
  <tr>
    <td><strong>Phone Number</strong></td>
    <td><a href="tel:${phone}">${phone}</a></td>
  </tr>
  <tr>
    <td><strong>Comment</strong></td>
    <td>${comment}</td>
  </tr>
</table>
`,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error('Error sending registration email:', error);
    return { success: false, error: error.message || 'Failed to send email.' };
  }
}

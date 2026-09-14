import path from 'path';
import fs from 'fs';
import nodemailer from 'nodemailer';
import {
  generateConfirmationEmail,
  generateAdminRegistrationEmail,
  generateAdminContactEmail,
  type RegistrationBody,
  type ContactBody,
} from '@/lib/emailTemplates';

type RequestBody = RegistrationBody | ContactBody;

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s+/g, '') : '';

  if (!user || !pass) {
    throw new Error(
      'SMTP credentials are missing. Please configure SMTP_USER and SMTP_PASS in your environment variables (or Vercel project settings).'
    );
  }

  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10000,
  });
}

function getLogoAttachments() {
  const logoPath = path.join(process.cwd(), 'public', 'images', 'logo.png');
  if (fs.existsSync(logoPath)) {
    return [
      {
        filename: 'logo.png',
        path: logoPath,
        cid: 'as-logo',
      },
    ];
  }
  return [];
}

export async function POST(request: Request) {
  try {
    const transporter = getTransporter();
    const body: RequestBody = await request.json();
    const attachments = getLogoAttachments();

    if (body.type === 'contact') {
      // Validate required fields
      if (!body.name || !body.email || !body.phone) {
        return Response.json(
          { error: 'Please fill in all required fields.' },
          { status: 400 }
        );
      }

      const htmlContent = generateAdminContactEmail(body);
      const recipient = process.env.CONTACT_EMAIL || 'administration@avenirsouriant.com';
      const ccRecipient =
        process.env.SMTP_USER && process.env.SMTP_USER.toLowerCase() !== recipient.toLowerCase()
          ? process.env.SMTP_USER
          : undefined;

      await transporter.sendMail({
        from: `"Avenir Souriant Website" <${process.env.SMTP_USER || 'avenirsouriant313@gmail.com'}>`,
        to: recipient,
        cc: ccRecipient,
        replyTo: body.email,
        subject: `New Contact Message — ${body.name}`,
        html: htmlContent,
        attachments,
      });

      return Response.json({ success: true, message: 'Message sent successfully!' });

    } else if (body.type === 'registration') {
      // Validate required fields
      const isAdultSelf = body.relationship === 'Does not apply';
      if (!body.email || !body.relationship) {
        return Response.json(
          { error: 'Please fill in all required fields.' },
          { status: 400 }
        );
      }
      if (!isAdultSelf && (!body.guardianName || !body.phone)) {
        return Response.json(
          { error: 'Please fill in all guardian details.' },
          { status: 400 }
        );
      }

      if (!body.students || body.students.length === 0) {
        return Response.json(
          { error: 'Please add at least one student.' },
          { status: 400 }
        );
      }

      const recipient = process.env.CONTACT_EMAIL || 'administration@avenirsouriant.com';
      const ccRecipient =
        process.env.SMTP_USER && process.env.SMTP_USER.toLowerCase() !== recipient.toLowerCase()
          ? process.env.SMTP_USER
          : undefined;

      const subjectName = isAdultSelf
        ? (body.students[0]?.fullName || 'Adult Student')
        : (body.guardianName || 'Registrant');

      // 1. Send notification to administration
      const adminHtmlContent = generateAdminRegistrationEmail(body);
      await transporter.sendMail({
        from: `"Avenir Souriant Website" <${process.env.SMTP_USER || 'avenirsouriant313@gmail.com'}>`,
        to: recipient,
        cc: ccRecipient,
        replyTo: body.email,
        subject: `New Course Registration — ${subjectName} (${body.students.length} student${body.students.length > 1 ? 's' : ''})`,
        html: adminHtmlContent,
        attachments,
      });

      // 2. Generate and send confirmation of receipt to the registrant
      const confirmationHtml = generateConfirmationEmail(body);
      try {
        await transporter.sendMail({
          from: `"Avenir Souriant" <${process.env.SMTP_USER || 'avenirsouriant313@gmail.com'}>`,
          to: body.email,
          replyTo: process.env.CONTACT_EMAIL || 'administration@avenirsouriant.com',
          subject: 'Confirmation of Registration Receipt — Avenir Souriant',
          html: confirmationHtml,
          attachments,
        });
      } catch (confirmError) {
        console.error('Confirmation email send error:', confirmError);
        // Note: logged, admin notification was already sent
      }

      return Response.json({ success: true, message: 'Registration submitted successfully!' });

    } else {
      return Response.json(
        { error: 'Invalid request type.' },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Email send error:', error);
    const message = error?.message || '';
    const isConfigError = message.includes('SMTP credentials');

    return Response.json(
      {
        error: isConfigError
          ? message
          : process.env.NODE_ENV === 'development'
          ? `Failed to send email: ${message}`
          : 'Failed to send email. Please try again later.',
      },
      { status: 500 }
    );
  }
}

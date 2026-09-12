import nodemailer from 'nodemailer';

interface StudentData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  currentGrade?: string;
  course: string;
  addAnotherStudent?: string;
}

interface RegistrationBody {
  type: 'registration';
  guardianName: string;
  email: string;
  phone: string;
  relationship: string;
  relationshipOther?: string;
  students: StudentData[];
}

interface ContactBody {
  type: 'contact';
  name: string;
  email: string;
  phone: string;
  comment: string;
}

type RequestBody = RegistrationBody | ContactBody;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s+/g, '') : '',
  },
});

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();

    if (body.type === 'contact') {
      // Validate required fields
      if (!body.name || !body.email || !body.phone) {
        return Response.json(
          { error: 'Please fill in all required fields.' },
          { status: 400 }
        );
      }

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1abc9c, #16a085); padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📬 New Contact Message</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0;">From Avenir Souriant Website</p>
          </div>
          <div style="background: #f8f9fa; padding: 24px; border: 1px solid #e9ecef; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #dee2e6; font-weight: bold; color: #495057; width: 120px;">Name</td>
                <td style="padding: 12px; border-bottom: 1px solid #dee2e6; color: #212529;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #dee2e6; font-weight: bold; color: #495057;">Email</td>
                <td style="padding: 12px; border-bottom: 1px solid #dee2e6; color: #212529;"><a href="mailto:${body.email}">${body.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #dee2e6; font-weight: bold; color: #495057;">Phone</td>
                <td style="padding: 12px; border-bottom: 1px solid #dee2e6; color: #212529;"><a href="tel:${body.phone}">${body.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; color: #495057; vertical-align: top;">Comment</td>
                <td style="padding: 12px; color: #212529;">${body.comment || '<em style="color: #6c757d;">No comment provided</em>'}</td>
              </tr>
            </table>
          </div>
        </div>
      `;

      const recipient = process.env.CONTACT_EMAIL || 'administration@avenirsouriant.com';
      const ccRecipient = process.env.SMTP_USER && process.env.SMTP_USER.toLowerCase() !== recipient.toLowerCase() ? process.env.SMTP_USER : undefined;

      await transporter.sendMail({
        from: `"Avenir Souriant Website" <${process.env.SMTP_USER || 'avenirsouriant313@gmail.com'}>`,
        to: recipient,
        cc: ccRecipient,
        replyTo: body.email,
        subject: `New Contact Message — ${body.name}`,
        html: htmlContent,
      });

      return Response.json({ success: true, message: 'Message sent successfully!' });

    } else if (body.type === 'registration') {
      // Validate required fields
      if (!body.guardianName || !body.email || !body.phone || !body.relationship) {
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

      const relationshipDisplay = body.relationship === 'Other' && body.relationshipOther
        ? body.relationshipOther
        : body.relationship;

      const studentsHtml = body.students.map((student, index) => `
        <div style="background: white; border: 1px solid #dee2e6; border-radius: 8px; padding: 16px; margin-bottom: 12px;">
          <h3 style="color: #1abc9c; margin: 0 0 12px; font-size: 16px;">🎓 Student ${index + 1}: ${student.fullName}</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #495057; width: 140px;">Date of Birth</td>
              <td style="padding: 8px 12px; color: #212529;">${student.dateOfBirth}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #495057;">Gender</td>
              <td style="padding: 8px 12px; color: #212529;">${student.gender}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #495057;">Current Grade</td>
              <td style="padding: 8px 12px; color: #212529;">${student.currentGrade || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #495057;">Course</td>
              <td style="padding: 8px 12px; color: #212529;">${student.course}</td>
            </tr>
          </table>
        </div>
      `).join('');

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #ff9f43, #e67e22); padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📝 New Course Registration — Fall 2026</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0;">From Avenir Souriant Website</p>
          </div>
          <div style="background: #f8f9fa; padding: 24px; border: 1px solid #e9ecef; border-top: none;">
            <h2 style="color: #343a40; font-size: 18px; margin: 0 0 16px; border-bottom: 2px solid #1abc9c; padding-bottom: 8px;">👤 Guardian Information</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; color: #495057; width: 140px;">Full Name</td>
                <td style="padding: 10px 12px; color: #212529;">${body.guardianName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; color: #495057;">Email</td>
                <td style="padding: 10px 12px; color: #212529;"><a href="mailto:${body.email}">${body.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; color: #495057;">Phone</td>
                <td style="padding: 10px 12px; color: #212529;"><a href="tel:${body.phone}">${body.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; color: #495057;">Relationship</td>
                <td style="padding: 10px 12px; color: #212529;">${relationshipDisplay}</td>
              </tr>
            </table>

            <h2 style="color: #343a40; font-size: 18px; margin: 0 0 16px; border-bottom: 2px solid #ff9f43; padding-bottom: 8px;">📚 Student(s) — ${body.students.length} registered</h2>
            ${studentsHtml}
          </div>
          <div style="background: #e8f8f5; padding: 16px; border: 1px solid #e9ecef; border-top: none; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="margin: 0; color: #495057; font-size: 14px;">This registration was submitted via the Avenir Souriant website.</p>
          </div>
        </div>
      `;

      const recipient = process.env.CONTACT_EMAIL || 'administration@avenirsouriant.com';
      const ccRecipient = process.env.SMTP_USER && process.env.SMTP_USER.toLowerCase() !== recipient.toLowerCase() ? process.env.SMTP_USER : undefined;

      await transporter.sendMail({
        from: `"Avenir Souriant Website" <${process.env.SMTP_USER || 'avenirsouriant313@gmail.com'}>`,
        to: recipient,
        cc: ccRecipient,
        replyTo: body.email,
        subject: `New Course Registration — ${body.guardianName} (${body.students.length} student${body.students.length > 1 ? 's' : ''})`,
        html: htmlContent,
      });

      return Response.json({ success: true, message: 'Registration submitted successfully!' });

    } else {
      return Response.json(
        { error: 'Invalid request type.' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

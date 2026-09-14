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
  guardianName?: string;
  email: string;
  phone?: string;
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

      const relationshipDisplay = isAdultSelf
        ? 'Self (Adult Student)'
        : body.relationship === 'Other' && body.relationshipOther
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
            <h2 style="color: #343a40; font-size: 18px; margin: 0 0 16px; border-bottom: 2px solid #1abc9c; padding-bottom: 8px;">👤 ${isAdultSelf ? 'Registrant Information' : 'Guardian Information'}</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              ${!isAdultSelf ? `
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; color: #495057; width: 140px;">Full Name</td>
                <td style="padding: 10px 12px; color: #212529;">${body.guardianName || ''}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; color: #495057;">Email</td>
                <td style="padding: 10px 12px; color: #212529;"><a href="mailto:${body.email}">${body.email}</a></td>
              </tr>
              ${!isAdultSelf ? `
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; color: #495057;">Phone</td>
                <td style="padding: 10px 12px; color: #212529;"><a href="tel:${body.phone}">${body.phone || ''}</a></td>
              </tr>
              ` : ''}
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
      const subjectName = isAdultSelf
        ? (body.students[0]?.fullName || 'Adult Student')
        : (body.guardianName || 'Registrant');
      const recipientGreetingName = isAdultSelf
        ? (body.students[0]?.fullName || 'Student')
        : (body.guardianName || 'Parent / Guardian');

      // 1. Send notification to administration
      await transporter.sendMail({
        from: `"Avenir Souriant Website" <${process.env.SMTP_USER || 'avenirsouriant313@gmail.com'}>`,
        to: recipient,
        cc: ccRecipient,
        replyTo: body.email,
        subject: `New Course Registration — ${subjectName} (${body.students.length} student${body.students.length > 1 ? 's' : ''})`,
        html: htmlContent,
      });

      // 2. Generate and send confirmation of receipt to the registrant
      const studentConfirmationHtml = body.students.map((student, index) => `
        <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 12px;">
          <h4 style="margin: 0 0 10px; color: #1abc9c; font-size: 15px; font-weight: 700;">
            🎓 Student ${index + 1}: ${student.fullName}
          </h4>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #718096; width: 120px; font-weight: 600;">Course:</td>
              <td style="padding: 6px 0; color: #1a202c; font-weight: 700;">${student.course}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #718096;">Date of Birth:</td>
              <td style="padding: 6px 0; color: #2d3748;">${student.dateOfBirth}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #718096;">Gender:</td>
              <td style="padding: 6px 0; color: #2d3748;">${student.gender}</td>
            </tr>
            ${student.currentGrade ? `
            <tr>
              <td style="padding: 6px 0; color: #718096;">Grade Level:</td>
              <td style="padding: 6px 0; color: #2d3748;">${student.currentGrade}</td>
            </tr>
            ` : ''}
          </table>
        </div>
      `).join('');

      const confirmationHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px;">
          <div style="background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1abc9c 0%, #16a085 100%); padding: 32px 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">Avenir Souriant</h1>
              <p style="color: #e6fffa; margin: 8px 0 0; font-size: 15px; font-weight: 500;">Registration Receipt & Confirmation</p>
            </div>

            <!-- Body Content -->
            <div style="padding: 32px 24px;">
              <p style="margin: 0 0 16px; font-size: 16px; color: #1a202c; font-weight: 600;">
                Dear ${recipientGreetingName},
              </p>
              <p style="margin: 0 0 20px; font-size: 15px; color: #4a5568; line-height: 1.6;">
                Thank you for registering with <strong>Avenir Souriant</strong>! We have received your course registration details.
              </p>

              <!-- Status Alert -->
              <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                <div style="display: flex; align-items: center; margin-bottom: 6px;">
                  <span style="display: inline-block; width: 10px; height: 10px; background-color: #22c55e; border-radius: 50%; margin-right: 8px;"></span>
                  <span style="font-size: 14px; font-weight: 700; color: #15803d; text-transform: uppercase; letter-spacing: 0.5px;">Status: Registration Received</span>
                </div>
                <p style="margin: 0; font-size: 14px; color: #166534; line-height: 1.5;">
                  Our administrative team will review your application and reach out to you within <strong>24 hours</strong> to finalize schedule details and complete enrollment.
                </p>
              </div>

              <!-- Summary -->
              <h2 style="font-size: 16px; color: #1a202c; margin: 0 0 16px; border-bottom: 2px solid #ff9f43; padding-bottom: 8px; font-weight: 700;">
                Registered Course${body.students.length > 1 ? 's' : ''} & Student Details
              </h2>

              ${studentConfirmationHtml}

              <!-- Next Steps -->
              <div style="margin-top: 24px; padding: 18px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <h3 style="margin: 0 0 8px; font-size: 14px; font-weight: 700; color: #2d3748;">What happens next?</h3>
                <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #4a5568; line-height: 1.6;">
                  <li>We confirm class availability and cohort placement.</li>
                  <li>You will receive final schedule details and instructions.</li>
                </ul>
              </div>

              <!-- Support / Questions -->
              <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #edf2f7; text-align: center;">
                <p style="margin: 0 0 6px; font-size: 14px; color: #718096;">Have questions or need to make changes?</p>
                <p style="margin: 0; font-size: 14px; color: #2d3748;">
                  Simply reply directly to this email or contact us at <a href="mailto:administration@avenirsouriant.com" style="color: #1abc9c; font-weight: 600; text-decoration: none;">administration@avenirsouriant.com</a>.
                </p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 24px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #a0aec0;">
                Avenir Souriant • Empowering Youth & Building Futures
              </p>
              <p style="margin: 4px 0 0; font-size: 12px; color: #a0aec0;">
                This is an automated confirmation of your registration receipt.
              </p>
            </div>

          </div>
        </div>
      `;

      try {
        await transporter.sendMail({
          from: `"Avenir Souriant" <${process.env.SMTP_USER || 'avenirsouriant313@gmail.com'}>`,
          to: body.email,
          replyTo: process.env.CONTACT_EMAIL || 'administration@avenirsouriant.com',
          subject: 'Confirmation of Registration Receipt — Avenir Souriant',
          html: confirmationHtml,
        });
      } catch (confirmError) {
        console.error('Confirmation email send error:', confirmError);
        // Note: logged, but admin mail was sent successfully
      }

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

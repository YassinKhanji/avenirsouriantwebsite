export interface StudentData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  currentGrade?: string;
  course: string;
  addAnotherStudent?: string;
}

export interface RegistrationBody {
  type: 'registration';
  guardianName?: string;
  email: string;
  phone?: string;
  relationship: string;
  relationshipOther?: string;
  students: StudentData[];
}

export interface ContactBody {
  type: 'contact';
  name: string;
  email: string;
  phone: string;
  comment: string;
}

// Common styles & reset
const emailStyles = `
  body, table, td, p, a, li, blockquote {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  table, td {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
    border-collapse: collapse !important;
  }
  img {
    -ms-interpolation-mode: bicubic;
    border: 0;
    height: auto;
    line-height: 100%;
    outline: none;
    text-decoration: none;
  }
  body {
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    background-color: #f4f6f8;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }
  @media screen and (max-width: 620px) {
    .template-container {
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 auto !important;
    }
    .content-padding {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    .mobile-col {
      display: block !important;
      width: 100% !important;
      box-sizing: border-box !important;
    }
  }
`;

/**
 * 1. Confirmation Email sent to the Registrant (Parent or Adult Student)
 */
export function generateConfirmationEmail(body: RegistrationBody): string {
  const isAdultSelf = body.relationship === 'Does not apply';
  const recipientGreetingName = isAdultSelf
    ? (body.students[0]?.fullName || 'Student')
    : (body.guardianName || 'Parent / Guardian');

  const relationshipDisplay = isAdultSelf
    ? 'Self (Adult Student)'
    : body.relationship === 'Other' && body.relationshipOther
    ? body.relationshipOther
    : body.relationship;

  const studentsCards = body.students.map((student, index) => `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 16px; overflow: hidden;">
      <tr>
        <td style="background-color: #0f172a; padding: 12px 18px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="font-size: 14px; font-weight: 700; color: #ffffff; letter-spacing: 0.2px;">
                🎓 Student ${index + 1}: ${student.fullName}
              </td>
              <td align="right">
                <span style="background-color: #1abc9c; color: #ffffff; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                  Enrolled
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding: 16px 18px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 130px; border-bottom: 1px solid #f1f5f9;">Selected Course:</td>
              <td style="padding: 8px 0; color: #1abc9c; font-weight: 700; border-bottom: 1px solid #f1f5f9;">${student.course}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Date of Birth:</td>
              <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${student.dateOfBirth}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Gender:</td>
              <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${student.gender}</td>
            </tr>
            ${student.currentGrade ? `
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Grade Level:</td>
              <td style="padding: 8px 0; color: #1e293b;">${student.currentGrade}</td>
            </tr>
            ` : ''}
          </table>
        </td>
      </tr>
    </table>
  `).join('');

  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!--<![endif]-->
  <title>Registration Confirmation — Avenir Souriant</title>
  <style type="text/css">
    ${emailStyles}
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f8; -webkit-text-size-adjust: 100%;">
  <!-- Preheader preview text -->
  <span style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">
    Thank you for registering with Avenir Souriant! We have received your submission and our team will contact you within the next 24 hours.
  </span>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f6f8; padding: 35px 10px;">
    <tr>
      <td align="center" valign="top">
        
        <!-- Main Card Container (600px) -->
        <table role="presentation" class="template-container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); margin: 0 auto;">
          
          <!-- Logo Brand Header -->
          <tr>
            <td align="center" style="padding: 30px 24px 22px; background-color: #ffffff; border-bottom: 1px solid #f1f5f9;">
              <a href="https://avenirsouriant.com" target="_blank" style="text-decoration: none; display: inline-block;">
                <img src="cid:as-logo" alt="Avenir Souriant" width="150" style="display: block; width: 150px; max-width: 150px; height: auto; margin: 0 auto; border: 0;" />
              </a>
            </td>
          </tr>

          <!-- Hero Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #1abc9c 0%, #16a085 100%); padding: 32px 28px; text-align: center;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin: 0 auto 12px;">
                <tr>
                  <td style="background-color: rgba(255, 255, 255, 0.2); padding: 5px 14px; border-radius: 20px; font-size: 11px; font-weight: 700; color: #ffffff; letter-spacing: 0.8px; text-transform: uppercase;">
                    Registration Receipt
                  </td>
                </tr>
              </table>
              <h1 style="color: #ffffff; margin: 0 0 6px; font-size: 24px; font-weight: 700; line-height: 32px; letter-spacing: -0.3px;">
                Course Registration Received
              </h1>
              <p style="color: #e6fffa; margin: 0; font-size: 14px; font-weight: 500;">
                Empowering Youth & Building Futures • Fall 2026
              </p>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td class="content-padding" style="padding: 32px 28px; background-color: #ffffff;">
              
              <p style="margin: 0 0 14px; font-size: 16px; font-weight: 600; color: #1e293b;">
                Dear ${recipientGreetingName},
              </p>
              <p style="margin: 0 0 24px; font-size: 15px; color: #475569; line-height: 24px;">
                Thank you for registering with <strong>Avenir Souriant</strong>! We are excited to welcome your student to our upcoming Fall 2026 courses. We have securely received your registration details.
              </p>

              <!-- 24-HOUR NOTICE CALLOUT BOX -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f0fdf4; border-left: 4px solid #1abc9c; border-top: 1px solid #bbf7d0; border-right: 1px solid #bbf7d0; border-bottom: 1px solid #bbf7d0; border-radius: 8px; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 18px 20px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="28" valign="top" style="padding-top: 2px;">
                          <span style="display: inline-block; width: 20px; height: 20px; line-height: 20px; text-align: center; background-color: #1abc9c; color: #ffffff; border-radius: 50%; font-size: 12px; font-weight: bold;">✓</span>
                        </td>
                        <td valign="top">
                          <p style="margin: 0 0 6px; font-size: 13px; font-weight: 700; color: #166534; text-transform: uppercase; letter-spacing: 0.6px;">
                            Application Under Review — Response within 24 Hours
                          </p>
                          <p style="margin: 0; font-size: 14px; color: #15803d; line-height: 22px;">
                            Our administrative and admissions team is currently reviewing your application and checking cohort availability. <strong>You should expect to hear from our team within the next 24 hours</strong> to finalize your schedule, confirm placement, and guide you through the remaining enrollment steps.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Student Details Section -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 14px;">
                <tr>
                  <td style="border-bottom: 2px solid #ff9f43; padding-bottom: 8px;">
                    <h2 style="margin: 0; font-size: 15px; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.5px;">
                      📚 Registered Student(s) — ${body.students.length} ${body.students.length > 1 ? 'Students' : 'Student'}
                    </h2>
                  </td>
                </tr>
              </table>

              ${studentsCards}

              <!-- Registrant / Guardian Details Section -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 28px 0 14px;">
                <tr>
                  <td style="border-bottom: 2px solid #1abc9c; padding-bottom: 8px;">
                    <h2 style="margin: 0; font-size: 15px; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.5px;">
                      👤 ${isAdultSelf ? 'Registrant Information' : 'Guardian Information'}
                    </h2>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 28px;">
                <tr>
                  <td style="padding: 16px 18px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 14px;">
                      ${!isAdultSelf ? `
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 130px; border-bottom: 1px solid #f1f5f9;">Full Name:</td>
                        <td style="padding: 8px 0; color: #1e293b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">${body.guardianName || ''}</td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 130px; border-bottom: 1px solid #f1f5f9;">Email Address:</td>
                        <td style="padding: 8px 0; color: #1abc9c; font-weight: 600; border-bottom: 1px solid #f1f5f9;">
                          <a href="mailto:${body.email}" style="color: #1abc9c; text-decoration: none;">${body.email}</a>
                        </td>
                      </tr>
                      ${!isAdultSelf && body.phone ? `
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Phone Number:</td>
                        <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">
                          <a href="tel:${body.phone}" style="color: #1e293b; text-decoration: none;">${body.phone}</a>
                        </td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Relationship:</td>
                        <td style="padding: 8px 0; color: #1e293b;">${relationshipDisplay}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What Happens Next? (3 Steps Roadmap) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 28px;">
                <tr>
                  <td style="padding: 20px 22px;">
                    <p style="margin: 0 0 14px; font-size: 15px; font-weight: 700; color: #1e293b;">
                      What happens next?
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 14px; color: #475569;">
                      <tr>
                        <td width="28" valign="top" style="padding-bottom: 10px; color: #1abc9c; font-weight: bold;">1.</td>
                        <td valign="top" style="padding-bottom: 10px; line-height: 20px;">
                          <strong>Application Review:</strong> We verify course prerequisites and cohort availability for your chosen program.
                        </td>
                      </tr>
                      <tr>
                        <td width="28" valign="top" style="padding-bottom: 10px; color: #1abc9c; font-weight: bold;">2.</td>
                        <td valign="top" style="padding-bottom: 10px; line-height: 20px;">
                          <strong>Contact Within 24 Hours:</strong> Our admissions team will reach out to confirm your timing, answer questions, and finalize placement.
                        </td>
                      </tr>
                      <tr>
                        <td width="28" valign="top" style="color: #1abc9c; font-weight: bold;">3.</td>
                        <td valign="top" style="line-height: 20px;">
                          <strong>Orientation & Start:</strong> You will receive class orientation details and start dates ready for day one!
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Support & CTA -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="text-align: center; padding-top: 6px;">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 16px; font-size: 14px; color: #64748b; line-height: 22px;">
                      Have questions or need to make adjustments to your submission?<br />
                      Simply reply to this email or reach us at <a href="mailto:administration@avenirsouriant.com" style="color: #1abc9c; font-weight: 600; text-decoration: none;">administration@avenirsouriant.com</a>.
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin: 0 auto;">
                      <tr>
                        <td align="center" style="background-color: #1abc9c; border-radius: 8px;">
                          <a href="https://avenirsouriant.com" target="_blank" style="display: inline-block; padding: 12px 28px; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; letter-spacing: 0.3px;">
                            Visit Avenir Souriant Website →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 24px 28px; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 13px; font-weight: 700; color: #334155;">
                Avenir Souriant • Empowering Youth & Building Futures
              </p>
              <p style="margin: 0 0 12px; font-size: 12px; color: #64748b; line-height: 18px;">
                <a href="https://avenirsouriant.com" style="color: #1abc9c; text-decoration: none;">Home</a> &nbsp;•&nbsp; 
                <a href="https://avenirsouriant.com/programs" style="color: #1abc9c; text-decoration: none;">Programs</a> &nbsp;•&nbsp; 
                <a href="https://avenirsouriant.com/register" style="color: #1abc9c; text-decoration: none;">Contact Us</a>
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8; line-height: 16px;">
                This automated confirmation was sent to <strong style="color: #64748b;">${body.email}</strong>.<br />
                © 2026 Avenir Souriant. All rights reserved.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * 2. Notification Email sent to Administration
 */
export function generateAdminRegistrationEmail(body: RegistrationBody): string {
  const isAdultSelf = body.relationship === 'Does not apply';
  const subjectName = isAdultSelf
    ? (body.students[0]?.fullName || 'Adult Student')
    : (body.guardianName || 'Registrant');

  const relationshipDisplay = isAdultSelf
    ? 'Self (Adult Student)'
    : body.relationship === 'Other' && body.relationshipOther
    ? body.relationshipOther
    : body.relationship;

  const studentsCards = body.students.map((student, index) => `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 16px; overflow: hidden;">
      <tr>
        <td style="background-color: #1e293b; padding: 12px 18px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="font-size: 14px; font-weight: 700; color: #ffffff;">
                🎓 Student ${index + 1}: ${student.fullName}
              </td>
              <td align="right">
                <span style="background-color: #ff9f43; color: #ffffff; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 12px; text-transform: uppercase;">
                  Registration
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding: 16px 18px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 130px; border-bottom: 1px solid #f1f5f9;">Course:</td>
              <td style="padding: 8px 0; color: #1e293b; font-weight: 700; border-bottom: 1px solid #f1f5f9;">${student.course}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Date of Birth:</td>
              <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${student.dateOfBirth}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Gender:</td>
              <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${student.gender}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Current Grade:</td>
              <td style="padding: 8px 0; color: #1e293b;">${student.currentGrade || 'Not provided'}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `).join('');

  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Course Registration — ${subjectName}</title>
  <style type="text/css">
    ${emailStyles}
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f8; -webkit-text-size-adjust: 100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f6f8; padding: 35px 10px;">
    <tr>
      <td align="center" valign="top">
        
        <!-- Main Card Container -->
        <table role="presentation" class="template-container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); margin: 0 auto;">
          
          <!-- Logo Brand Header -->
          <tr>
            <td align="center" style="padding: 28px 24px 20px; background-color: #ffffff; border-bottom: 1px solid #f1f5f9;">
              <a href="https://avenirsouriant.com" target="_blank" style="text-decoration: none; display: inline-block;">
                <img src="cid:as-logo" alt="Avenir Souriant" width="150" style="display: block; width: 150px; max-width: 150px; height: auto; margin: 0 auto; border: 0;" />
              </a>
            </td>
          </tr>

          <!-- Hero Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #ff9f43 0%, #e67e22 100%); padding: 32px 28px; text-align: center;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin: 0 auto 12px;">
                <tr>
                  <td style="background-color: rgba(255, 255, 255, 0.25); padding: 5px 14px; border-radius: 20px; font-size: 11px; font-weight: 700; color: #ffffff; letter-spacing: 0.8px; text-transform: uppercase;">
                    Incoming Registration
                  </td>
                </tr>
              </table>
              <h1 style="color: #ffffff; margin: 0 0 6px; font-size: 24px; font-weight: 700; line-height: 32px; letter-spacing: -0.3px;">
                New Course Registration
              </h1>
              <p style="color: #fff4e6; margin: 0; font-size: 14px; font-weight: 500;">
                Submitted via Avenir Souriant Website
              </p>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td class="content-padding" style="padding: 32px 28px; background-color: #ffffff;">

              <!-- Registrant / Guardian Card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 14px;">
                <tr>
                  <td style="border-bottom: 2px solid #1abc9c; padding-bottom: 8px;">
                    <h2 style="margin: 0; font-size: 15px; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.5px;">
                      👤 ${isAdultSelf ? 'Registrant Details' : 'Parent / Guardian Details'}
                    </h2>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 28px;">
                <tr>
                  <td style="padding: 16px 18px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 14px;">
                      ${!isAdultSelf ? `
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 130px; border-bottom: 1px solid #f1f5f9;">Full Name:</td>
                        <td style="padding: 8px 0; color: #1e293b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">${body.guardianName || ''}</td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 130px; border-bottom: 1px solid #f1f5f9;">Email Address:</td>
                        <td style="padding: 8px 0; color: #1abc9c; font-weight: 600; border-bottom: 1px solid #f1f5f9;">
                          <a href="mailto:${body.email}" style="color: #1abc9c; text-decoration: none;">${body.email}</a>
                        </td>
                      </tr>
                      ${!isAdultSelf && body.phone ? `
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Phone Number:</td>
                        <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">
                          <a href="tel:${body.phone}" style="color: #1e293b; text-decoration: none;">${body.phone}</a>
                        </td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Relationship:</td>
                        <td style="padding: 8px 0; color: #1e293b;">${relationshipDisplay}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Student(s) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 14px;">
                <tr>
                  <td style="border-bottom: 2px solid #ff9f43; padding-bottom: 8px;">
                    <h2 style="margin: 0; font-size: 15px; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.5px;">
                      📚 Student(s) — ${body.students.length} Registered
                    </h2>
                  </td>
                </tr>
              </table>

              ${studentsCards}

              <!-- Direct Reply Action -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="text-align: center; padding-top: 10px;">
                <tr>
                  <td align="center">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
                      <tr>
                        <td align="center" style="background-color: #ff9f43; border-radius: 8px;">
                          <a href="mailto:${body.email}?subject=Regarding%20your%20Avenir%20Souriant%20Course%20Registration" style="display: inline-block; padding: 12px 28px; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; letter-spacing: 0.3px;">
                            Reply to Registrant (${body.email}) →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 28px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">
                Avenir Souriant Website Administration System
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * 3. Notification Email for General Contact Form Submissions
 */
export function generateAdminContactEmail(body: ContactBody): string {
  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message — ${body.name}</title>
  <style type="text/css">
    ${emailStyles}
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f8; -webkit-text-size-adjust: 100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f6f8; padding: 35px 10px;">
    <tr>
      <td align="center" valign="top">
        
        <table role="presentation" class="template-container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); margin: 0 auto;">
          
          <!-- Logo Brand Header -->
          <tr>
            <td align="center" style="padding: 28px 24px 20px; background-color: #ffffff; border-bottom: 1px solid #f1f5f9;">
              <a href="https://avenirsouriant.com" target="_blank" style="text-decoration: none; display: inline-block;">
                <img src="cid:as-logo" alt="Avenir Souriant" width="150" style="display: block; width: 150px; max-width: 150px; height: auto; margin: 0 auto; border: 0;" />
              </a>
            </td>
          </tr>

          <!-- Hero Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #1abc9c 0%, #16a085 100%); padding: 32px 28px; text-align: center;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin: 0 auto 12px;">
                <tr>
                  <td style="background-color: rgba(255, 255, 255, 0.25); padding: 5px 14px; border-radius: 20px; font-size: 11px; font-weight: 700; color: #ffffff; letter-spacing: 0.8px; text-transform: uppercase;">
                    Inquiry Received
                  </td>
                </tr>
              </table>
              <h1 style="color: #ffffff; margin: 0 0 6px; font-size: 24px; font-weight: 700; line-height: 32px; letter-spacing: -0.3px;">
                New Contact Message
              </h1>
              <p style="color: #e6fffa; margin: 0; font-size: 14px; font-weight: 500;">
                Submitted via Avenir Souriant Website
              </p>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td class="content-padding" style="padding: 32px 28px; background-color: #ffffff;">

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 18px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 14px;">
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 130px; border-bottom: 1px solid #f1f5f9;">Name:</td>
                        <td style="padding: 8px 0; color: #1e293b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">${body.name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Email:</td>
                        <td style="padding: 8px 0; color: #1abc9c; font-weight: 600; border-bottom: 1px solid #f1f5f9;">
                          <a href="mailto:${body.email}" style="color: #1abc9c; text-decoration: none;">${body.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Phone:</td>
                        <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">
                          <a href="tel:${body.phone}" style="color: #1e293b; text-decoration: none;">${body.phone}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0 6px; color: #64748b; font-weight: 600; vertical-align: top;" colspan="2">Message / Comment:</td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding: 12px 14px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; color: #1e293b; line-height: 22px;">
                          ${body.comment ? body.comment.replace(/\n/g, '<br />') : '<em style="color: #94a3b8;">No comment provided</em>'}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Action Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="text-align: center; padding-top: 8px;">
                <tr>
                  <td align="center">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
                      <tr>
                        <td align="center" style="background-color: #1abc9c; border-radius: 8px;">
                          <a href="mailto:${body.email}?subject=Regarding%20your%20message%20to%20Avenir%20Souriant" style="display: inline-block; padding: 12px 28px; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; letter-spacing: 0.3px;">
                            Reply to ${body.name} (${body.email}) →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 28px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">
                Avenir Souriant Website Contact System
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export interface StudentData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  currentGrade?: string;
  courses: string[];
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

/**
 * 1. Confirmation Email sent to the Registrant
 * Designed strictly following free-html-email-template
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

  const studentsHtml = body.students.map((student, index) => {
    const [y, m, d] = (student.dateOfBirth || '').split('-');
    const formattedDob = y && m && d ? `${d}/${m}/${y}` : student.dateOfBirth || '';
    const coursesDisplay = Array.isArray(student.courses)
      ? student.courses.join(', ')
      : (student as unknown as { course?: string }).course || '';
    return `
    <table align="center" style="width: 100%; border-collapse: collapse; text-align: left; font-family: 'Helvetica', Arial, sans-serif; font-size: 14px; margin-bottom: 16px; border: 1px solid #e5e5e5; background-color: #ffffff;">
      <tbody>
        <tr style="background-color: #f8f9fa;">
          <td colspan="2" style="padding: 10px 14px; font-weight: 600; color: #000000; border-bottom: 1px solid #e5e5e5; font-size: 15px;">
            Student ${index + 1}: ${student.fullName}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Course(s)</td>
          <td style="padding: 10px 14px; font-weight: 600; color: #000000; border-bottom: 1px solid #eeeeee;">${coursesDisplay}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Date of Birth</td>
          <td style="padding: 10px 14px; color: #000000; border-bottom: 1px solid #eeeeee;">${formattedDob}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Gender</td>
          <td style="padding: 10px 14px; color: #000000; border-bottom: 1px solid #eeeeee;">${student.gender}</td>
        </tr>
        ${student.currentGrade ? `
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px;">Current Grade</td>
          <td style="padding: 10px 14px; color: #000000;">${student.currentGrade}</td>
        </tr>
        ` : ''}
      </tbody>
    </table>
  `;
  }).join('');

  return `<!-- Free to use, HTML email template designed & built by FullSphere. Learn more about us at www.fullsphere.co.uk -->

<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>

  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->

  <title>Course Registration Confirmation — Avenir Souriant</title>

  <!-- Start stylesheet -->
  <style type="text/css">
    a,a[href],a:hover, a:link, a:visited {
      text-decoration: none!important;
      color: #0000EE;
    }
    .link {
      text-decoration: underline!important;
    }
    p, p:visited {
      font-size:15px;
      line-height:24px;
      font-family:'Helvetica', Arial, sans-serif;
      font-weight:300;
      text-decoration:none;
      color: #000000;
    }
    h1 {
      font-size:22px;
      line-height:28px;
      font-family:'Helvetica', Arial, sans-serif;
      font-weight:normal;
      text-decoration:none;
      color: #000000;
    }
    .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
    .ExternalClass {width: 100%;}
  </style>
  <!-- End stylesheet -->

</head>

  <body style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000" align="center">
  
  <div style="text-align: center;">

    <!-- Start container for logo -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 25px; padding-bottom: 20px;" width="596">
            <a href="https://avenirsouriant.com" target="_blank" style="text-decoration: none;">
              <img style="width: 180px; max-width: 180px; height: auto; text-align: center;" alt="Avenir Souriant" src="cid:as-logo" align="center" width="180">
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End container for logo -->

    <!-- Start single column section -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 10px; padding-bottom: 40px;" width="596">

            <h1 style="font-size: 22px; line-height: 28px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000; margin: 0 0 16px; text-align: left;">
              Registration Confirmation
            </h1>

            <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #000000; text-align: left; margin: 0 0 12px;">
              Dear ${recipientGreetingName},
            </p>

            <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #555555; text-align: left; margin: 0 0 20px;">
              Thank you for registering with <strong>Avenir Souriant</strong>! We have successfully received your registration details.
            </p>

            <!-- 24-HOUR NOTICE BOX -->
            <table align="center" style="width: 100%; border-collapse: collapse; text-align: left; margin: 0 0 24px;">
              <tbody>
                <tr>
                  <td style="background-color: #f8f9fa; border-left: 4px solid #000000; padding: 16px 20px;">
                    <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; color: #000000; margin: 0;">
                      Our administrative team is currently reviewing your registration details. <strong>You should hear from us within the next 24 hours</strong> to finalize your schedule, confirm class placement, and complete enrollment.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Student(s) Heading -->
            <h2 style="font-size: 17px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000; text-align: left; margin: 24px 0 12px; border-bottom: 1px solid #e5e5e5; padding-bottom: 8px;">
              Student Information (${body.students.length})
            </h2>

            ${studentsHtml}

            <!-- Guardian Details Heading -->
            <h2 style="font-size: 17px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000; text-align: left; margin: 28px 0 12px; border-bottom: 1px solid #e5e5e5; padding-bottom: 8px;">
              ${isAdultSelf ? 'Registrant Information' : 'Guardian Information'}
            </h2>

            <table align="center" style="width: 100%; border-collapse: collapse; text-align: left; font-family: 'Helvetica', Arial, sans-serif; font-size: 14px; margin-bottom: 24px; border: 1px solid #e5e5e5; background-color: #ffffff;">
              <tbody>
                ${!isAdultSelf ? `
                <tr>
                  <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Full Name</td>
                  <td style="padding: 10px 14px; color: #000000; border-bottom: 1px solid #eeeeee;">${body.guardianName || ''}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Email</td>
                  <td style="padding: 10px 14px; color: #000000; border-bottom: 1px solid #eeeeee;">
                    <a href="mailto:${body.email}" style="color: #0000EE; text-decoration: underline;">${body.email}</a>
                  </td>
                </tr>
                ${!isAdultSelf && body.phone ? `
                <tr>
                  <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Phone</td>
                  <td style="padding: 10px 14px; color: #000000; border-bottom: 1px solid #eeeeee;">${body.phone}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px;">Relationship</td>
                  <td style="padding: 10px 14px; color: #000000;">${relationshipDisplay}</td>
                </tr>
              </tbody>
            </table>

            <!-- Button -->
            <table align="center" style="width: 100%; border-collapse: collapse; text-align: center; margin: 30px 0 10px;">
              <tbody>
                <tr>
                  <td align="center">
                    <a href="https://avenirsouriant.com" target="_blank" style="background-color: #000000; font-size: 15px; line-height: 22px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; padding: 12px 25px; color: #ffffff; border-radius: 4px; display: inline-block; mso-padding-alt: 0;">
                      <!--[if mso]>
                      <i style="letter-spacing: 25px; mso-font-width: -100%; mso-text-raise: 30pt;">&nbsp;</i>
                      <![endif]-->
                      <span style="mso-text-raise: 15pt; color: #ffffff;">Visit Website</span>
                      <!--[if mso]>
                      <i style="letter-spacing: 25px; mso-font-width: -100%;">&nbsp;</i>
                      <![endif]-->
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

          </td>
        </tr>
      </tbody>
    </table>
    <!-- End single column section -->

    <!-- Start footer -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #000000;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">

            <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #ffffff; margin: 0 0 6px;">
              Avenir Souriant
            </p>

            <p style="font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #cccccc; margin: 0 0 6px;">
              Empowering Youth & Building Futures
            </p>

            <p style="margin-bottom: 0; font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
              <a target="_blank" style="text-decoration: underline; color: #ffffff;" href="https://avenirsouriant.com">
                www.avenirsouriant.com
              </a>
            </p>

          </td>
        </tr>
      </tbody>
    </table>
    <!-- End footer -->

    <!-- Start sub-footer section -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 20px; padding-bottom: 30px;" width="596">
            <p style="font-size: 12px; line-height: 18px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; color: #919293; margin: 0;">
              This is an automated confirmation of your course registration sent to ${body.email}.<br />
              Have questions? Contact us at <a style="text-decoration: underline; color: #000000;" href="mailto:administration@avenirsouriant.com"><u>administration@avenirsouriant.com</u></a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End sub-footer section -->

  </div>

  </body>
</html>
  `;
}

/**
 * 2. Notification Email sent to Administration
 * Designed strictly following free-html-email-template
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

  const studentsHtml = body.students.map((student, index) => {
    const [y, m, d] = (student.dateOfBirth || '').split('-');
    const formattedDob = y && m && d ? `${d}/${m}/${y}` : student.dateOfBirth || '';
    const coursesDisplay = Array.isArray(student.courses)
      ? student.courses.join(', ')
      : (student as unknown as { course?: string }).course || '';
    return `
    <table align="center" style="width: 100%; border-collapse: collapse; text-align: left; font-family: 'Helvetica', Arial, sans-serif; font-size: 14px; margin-bottom: 16px; border: 1px solid #e5e5e5; background-color: #ffffff;">
      <tbody>
        <tr style="background-color: #f8f9fa;">
          <td colspan="2" style="padding: 10px 14px; font-weight: 600; color: #000000; border-bottom: 1px solid #e5e5e5; font-size: 15px;">
            Student ${index + 1}: ${student.fullName}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Course(s)</td>
          <td style="padding: 10px 14px; font-weight: 600; color: #000000; border-bottom: 1px solid #eeeeee;">${coursesDisplay}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Date of Birth</td>
          <td style="padding: 10px 14px; color: #000000; border-bottom: 1px solid #eeeeee;">${formattedDob}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Gender</td>
          <td style="padding: 10px 14px; color: #000000; border-bottom: 1px solid #eeeeee;">${student.gender}</td>
        </tr>
        ${student.currentGrade ? `
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px;">Current Grade</td>
          <td style="padding: 10px 14px; color: #000000;">${student.currentGrade}</td>
        </tr>
        ` : ''}
      </tbody>
    </table>
  `;
  }).join('');

  return `<!-- Free to use, HTML email template designed & built by FullSphere. Learn more about us at www.fullsphere.co.uk -->

<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>

  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->

  <title>New Course Registration — ${subjectName}</title>

  <!-- Start stylesheet -->
  <style type="text/css">
    a,a[href],a:hover, a:link, a:visited {
      text-decoration: none!important;
      color: #0000EE;
    }
    .link {
      text-decoration: underline!important;
    }
    p, p:visited {
      font-size:15px;
      line-height:24px;
      font-family:'Helvetica', Arial, sans-serif;
      font-weight:300;
      text-decoration:none;
      color: #000000;
    }
    h1 {
      font-size:22px;
      line-height:28px;
      font-family:'Helvetica', Arial, sans-serif;
      font-weight:normal;
      text-decoration:none;
      color: #000000;
    }
    .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
    .ExternalClass {width: 100%;}
  </style>
  <!-- End stylesheet -->

</head>

  <body style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000" align="center">
  
  <div style="text-align: center;">

    <!-- Start container for logo -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 25px; padding-bottom: 20px;" width="596">
            <a href="https://avenirsouriant.com" target="_blank" style="text-decoration: none;">
              <img style="width: 180px; max-width: 180px; height: auto; text-align: center;" alt="Avenir Souriant" src="cid:as-logo" align="center" width="180">
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End container for logo -->

    <!-- Start single column section -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 10px; padding-bottom: 40px;" width="596">

            <h1 style="font-size: 22px; line-height: 28px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000; margin: 0 0 16px; text-align: left;">
              New Course Registration
            </h1>

            <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #555555; text-align: left; margin: 0 0 24px;">
              A new registration has been submitted through the Avenir Souriant website.
            </p>

            <!-- Registrant Details Heading -->
            <h2 style="font-size: 17px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000; text-align: left; margin: 0 0 12px; border-bottom: 1px solid #e5e5e5; padding-bottom: 8px;">
              ${isAdultSelf ? 'Registrant Details' : 'Guardian Details'}
            </h2>

            <table align="center" style="width: 100%; border-collapse: collapse; text-align: left; font-family: 'Helvetica', Arial, sans-serif; font-size: 14px; margin-bottom: 24px; border: 1px solid #e5e5e5; background-color: #ffffff;">
              <tbody>
                ${!isAdultSelf ? `
                <tr>
                  <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Full Name</td>
                  <td style="padding: 10px 14px; color: #000000; border-bottom: 1px solid #eeeeee;">${body.guardianName || ''}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Email</td>
                  <td style="padding: 10px 14px; color: #000000; border-bottom: 1px solid #eeeeee;">
                    <a href="mailto:${body.email}" style="color: #0000EE; text-decoration: underline;">${body.email}</a>
                  </td>
                </tr>
                ${!isAdultSelf && body.phone ? `
                <tr>
                  <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Phone</td>
                  <td style="padding: 10px 14px; color: #000000; border-bottom: 1px solid #eeeeee;">
                    <a href="tel:${body.phone}" style="color: #000000; text-decoration: none;">${body.phone}</a>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px;">Relationship</td>
                  <td style="padding: 10px 14px; color: #000000;">${relationshipDisplay}</td>
                </tr>
              </tbody>
            </table>

            <!-- Student(s) Heading -->
            <h2 style="font-size: 17px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000; text-align: left; margin: 28px 0 12px; border-bottom: 1px solid #e5e5e5; padding-bottom: 8px;">
              Registered Student(s) — ${body.students.length}
            </h2>

            ${studentsHtml}

            <!-- Button to reply -->
            <table align="center" style="width: 100%; border-collapse: collapse; text-align: center; margin: 30px 0 10px;">
              <tbody>
                <tr>
                  <td align="center">
                    <a href="mailto:${body.email}?subject=Regarding%20your%20Avenir%20Souriant%20Course%20Registration" target="_blank" style="background-color: #000000; font-size: 15px; line-height: 22px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; padding: 12px 25px; color: #ffffff; border-radius: 4px; display: inline-block; mso-padding-alt: 0;">
                      <!--[if mso]>
                      <i style="letter-spacing: 25px; mso-font-width: -100%; mso-text-raise: 30pt;">&nbsp;</i>
                      <![endif]-->
                      <span style="mso-text-raise: 15pt; color: #ffffff;">Reply to ${body.email}</span>
                      <!--[if mso]>
                      <i style="letter-spacing: 25px; mso-font-width: -100%;">&nbsp;</i>
                      <![endif]-->
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

          </td>
        </tr>
      </tbody>
    </table>
    <!-- End single column section -->

    <!-- Start footer -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #000000;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 25px; padding-bottom: 25px;" width="596">
            <p style="font-size: 13px; line-height: 20px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff; margin: 0;">
              Avenir Souriant Website Administration System
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End footer -->

  </div>

  </body>
</html>
  `;
}

/**
 * 3. Notification Email for General Contact Form Submissions
 * Designed strictly following free-html-email-template
 */
export function generateAdminContactEmail(body: ContactBody): string {
  return `<!-- Free to use, HTML email template designed & built by FullSphere. Learn more about us at www.fullsphere.co.uk -->

<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>

  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->

  <title>New Contact Message — ${body.name}</title>

  <!-- Start stylesheet -->
  <style type="text/css">
    a,a[href],a:hover, a:link, a:visited {
      text-decoration: none!important;
      color: #0000EE;
    }
    .link {
      text-decoration: underline!important;
    }
    p, p:visited {
      font-size:15px;
      line-height:24px;
      font-family:'Helvetica', Arial, sans-serif;
      font-weight:300;
      text-decoration:none;
      color: #000000;
    }
    h1 {
      font-size:22px;
      line-height:28px;
      font-family:'Helvetica', Arial, sans-serif;
      font-weight:normal;
      text-decoration:none;
      color: #000000;
    }
    .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
    .ExternalClass {width: 100%;}
  </style>
  <!-- End stylesheet -->

</head>

  <body style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000" align="center">
  
  <div style="text-align: center;">

    <!-- Start container for logo -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 25px; padding-bottom: 20px;" width="596">
            <a href="https://avenirsouriant.com" target="_blank" style="text-decoration: none;">
              <img style="width: 180px; max-width: 180px; height: auto; text-align: center;" alt="Avenir Souriant" src="cid:as-logo" align="center" width="180">
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End container for logo -->

    <!-- Start single column section -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 10px; padding-bottom: 40px;" width="596">

            <h1 style="font-size: 22px; line-height: 28px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000; margin: 0 0 16px; text-align: left;">
              New Contact Message
            </h1>

            <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #555555; text-align: left; margin: 0 0 24px;">
              You have received a new contact inquiry through the website.
            </p>

            <table align="center" style="width: 100%; border-collapse: collapse; text-align: left; font-family: 'Helvetica', Arial, sans-serif; font-size: 14px; margin-bottom: 24px; border: 1px solid #e5e5e5; background-color: #ffffff;">
              <tbody>
                <tr>
                  <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Name</td>
                  <td style="padding: 10px 14px; color: #000000; border-bottom: 1px solid #eeeeee;">${body.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Email</td>
                  <td style="padding: 10px 14px; color: #000000; border-bottom: 1px solid #eeeeee;">
                    <a href="mailto:${body.email}" style="color: #0000EE; text-decoration: underline;">${body.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; border-bottom: 1px solid #eeeeee;">Phone</td>
                  <td style="padding: 10px 14px; color: #000000; border-bottom: 1px solid #eeeeee;">
                    <a href="tel:${body.phone}" style="color: #000000; text-decoration: none;">${body.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-weight: 600; color: #495057; width: 130px; vertical-align: top;">Comment</td>
                  <td style="padding: 10px 14px; color: #000000; line-height: 22px;">
                    ${body.comment ? body.comment.replace(/\n/g, '<br />') : '<em style="color: #999999;">No comment provided</em>'}
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Button -->
            <table align="center" style="width: 100%; border-collapse: collapse; text-align: center; margin: 30px 0 10px;">
              <tbody>
                <tr>
                  <td align="center">
                    <a href="mailto:${body.email}?subject=Regarding%20your%20inquiry%20to%20Avenir%20Souriant" target="_blank" style="background-color: #000000; font-size: 15px; line-height: 22px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; padding: 12px 25px; color: #ffffff; border-radius: 4px; display: inline-block; mso-padding-alt: 0;">
                      <!--[if mso]>
                      <i style="letter-spacing: 25px; mso-font-width: -100%; mso-text-raise: 30pt;">&nbsp;</i>
                      <![endif]-->
                      <span style="mso-text-raise: 15pt; color: #ffffff;">Reply to ${body.name}</span>
                      <!--[if mso]>
                      <i style="letter-spacing: 25px; mso-font-width: -100%;">&nbsp;</i>
                      <![endif]-->
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

          </td>
        </tr>
      </tbody>
    </table>
    <!-- End single column section -->

    <!-- Start footer -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #000000;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 25px; padding-bottom: 25px;" width="596">
            <p style="font-size: 13px; line-height: 20px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff; margin: 0;">
              Avenir Souriant Website Administration System
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End footer -->

  </div>

  </body>
</html>
  `;
}

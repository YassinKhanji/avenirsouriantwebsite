import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, comment } = await request.json();

    // Validate required fields
    if (!name || !email || !phone) {
      return Response.json(
        { error: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email in super simple format
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'administration@avenirsouriant.com',
      subject: `New Registration - ${name}`,
      text: [
        `New Registration Request`,
        `========================`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Comment: ${comment || 'N/A'}`,
        ``,
        `---`,
        `Sent from Avenir Souriant Website`,
      ].join('\n'),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Registration email error:', error);
    return Response.json(
      { error: 'Failed to send registration. Please try again.' },
      { status: 500 }
    );
  }
}

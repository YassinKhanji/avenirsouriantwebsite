import assert from 'node:assert';
import { generateICS } from '../src/lib/icsGenerator';
import {
  generateConfirmationEmail,
  generateAdminRegistrationEmail,
} from '../src/lib/emailTemplates';
import {
  isGoogleCalendarConfigured,
  createGoogleCalendarAppointment,
} from '../src/lib/googleCalendar';
import {
  resolveAppointmentMeetingLink,
  generateGoogleMeetLink,
} from '../src/lib/appointments';

async function main() {
  console.log('🧪 Starting Google Meet Integration Test Suite...\n');

  let passedTests = 0;
  let totalTests = 0;

  function runTest(name: string, fn: () => void) {
    totalTests++;
    try {
      fn();
      console.log(`  ✅ PASS: ${name}`);
      passedTests++;
    } catch (err) {
      console.error(`  ❌ FAIL: ${name}`);
      console.error(err);
    }
  }

  async function runAsyncTest(name: string, fn: () => Promise<void>) {
    totalTests++;
    try {
      await fn();
      console.log(`  ✅ PASS: ${name}`);
      passedTests++;
    } catch (err) {
      console.error(`  ❌ FAIL: ${name}`);
      console.error(err);
    }
  }

  // -------------------------------------------------------------
  // Test 1: No fake/dummy meet links exist in the system
  // -------------------------------------------------------------
  runTest('generateGoogleMeetLink does not return dummy "asf-wytq-fit"', () => {
    const originalEnv = process.env.GOOGLE_MEET_URL;
    delete process.env.GOOGLE_MEET_URL;

    const result = generateGoogleMeetLink();
    assert.strictEqual(result, undefined, 'Should return undefined when no GOOGLE_MEET_URL is set');

    process.env.GOOGLE_MEET_URL = 'https://meet.google.com/xyz-test-url';
    const resultWithEnv = generateGoogleMeetLink();
    assert.strictEqual(resultWithEnv, 'https://meet.google.com/xyz-test-url');

    if (originalEnv) process.env.GOOGLE_MEET_URL = originalEnv;
    else delete process.env.GOOGLE_MEET_URL;
  });

  // -------------------------------------------------------------
  // Test 2: Fallback to GOOGLE_MEET_URL when OAuth is not configured
  // -------------------------------------------------------------
  await runAsyncTest('createGoogleCalendarAppointment falls back to GOOGLE_MEET_URL when OAuth is missing', async () => {
    delete process.env.GOOGLE_CLIENT_ID;
    delete process.env.GOOGLE_CLIENT_SECRET;
    delete process.env.GOOGLE_REFRESH_TOKEN;
    process.env.GOOGLE_MEET_URL = 'https://meet.google.com/abc-real-meet';

    const res = await createGoogleCalendarAppointment({
      date: '2026-10-15',
      time: '18:00',
      registrantName: 'Jane Doe',
      registrantEmail: 'jane@example.com',
      type: 'virtual',
      virtualOption: 'meet',
    });

    assert.strictEqual(res.success, true);
    assert.strictEqual(res.meetingLink, 'https://meet.google.com/abc-real-meet');
    delete process.env.GOOGLE_MEET_URL;
  });

  // -------------------------------------------------------------
  // Test 3: Graceful handling when neither OAuth nor GOOGLE_MEET_URL is set
  // -------------------------------------------------------------
  await runAsyncTest('createGoogleCalendarAppointment handles missing configuration without dummy URLs', async () => {
    delete process.env.GOOGLE_CLIENT_ID;
    delete process.env.GOOGLE_CLIENT_SECRET;
    delete process.env.GOOGLE_REFRESH_TOKEN;
    delete process.env.GOOGLE_MEET_URL;

    const res = await createGoogleCalendarAppointment({
      date: '2026-10-15',
      time: '18:00',
      registrantName: 'Jane Doe',
      registrantEmail: 'jane@example.com',
      type: 'virtual',
      virtualOption: 'meet',
    });

    assert.strictEqual(res.success, false);
    assert.strictEqual(res.meetingLink, undefined);
  });

  // -------------------------------------------------------------
  // Test 4: resolveAppointmentMeetingLink returns configured link or undefined
  // -------------------------------------------------------------
  await runAsyncTest('resolveAppointmentMeetingLink integration behavior', async () => {
    process.env.GOOGLE_MEET_URL = 'https://meet.google.com/custom-meet-room';

    const result = await resolveAppointmentMeetingLink({
      date: '2026-10-20',
      time: '19:00',
      registrantName: 'Sarah Connor',
      registrantEmail: 'sarah@example.com',
      type: 'virtual',
      virtualOption: 'meet',
    });

    assert.strictEqual(result.meetingLink, 'https://meet.google.com/custom-meet-room');
    delete process.env.GOOGLE_MEET_URL;
  });

  // -------------------------------------------------------------
  // Test 5: ICS generator embeds actual meetingLink when provided
  // -------------------------------------------------------------
  runTest('generateICS includes Google Meet URL when meetingLink is present', () => {
    const ics = generateICS({
      date: '2026-10-15',
      time: '18:00',
      type: 'virtual',
      virtualOption: 'meet',
      meetingLink: 'https://meet.google.com/real-room-123',
      registrantName: 'John Smith',
      registrantEmail: 'john@example.com',
    });

    assert.ok(ics.includes('LOCATION:https://meet.google.com/real-room-123'));
    assert.ok(ics.includes('Join Google Meet: https://meet.google.com/real-room-123'));
    assert.ok(!ics.includes('asf-wytq-fit'));
  });

  // -------------------------------------------------------------
  // Test 6: ICS generator handles pending meetingLink cleanly
  // -------------------------------------------------------------
  runTest('generateICS handles pending Google Meet link without broken URL', () => {
    const ics = generateICS({
      date: '2026-10-15',
      time: '18:00',
      type: 'virtual',
      virtualOption: 'meet',
      meetingLink: undefined,
      registrantName: 'John Smith',
      registrantEmail: 'john@example.com',
    });

    assert.ok(!ics.includes('asf-wytq-fit'));
    assert.ok(ics.includes('Google Meet Video Call (Link provided via email)'));
  });

  // -------------------------------------------------------------
  // Test 7: Email templates render real meetingLink button
  // -------------------------------------------------------------
  runTest('generateConfirmationEmail renders active button when meetingLink is present', () => {
    const html = generateConfirmationEmail({
      type: 'registration',
      relationship: 'Parent',
      guardianName: 'Parent Mary',
      email: 'mary@example.com',
      phone: '514-555-1234',
      students: [
        {
          fullName: 'Child Mary',
          dateOfBirth: '2015-05-10',
          gender: 'Female',
          courses: ['Mathematics'],
        },
      ],
      appointmentDate: '2026-10-15',
      appointmentTime: '18:00',
      appointmentType: 'virtual',
      virtualOption: 'meet',
      meetingLink: 'https://meet.google.com/valid-active-call',
    });

    assert.ok(html.includes('https://meet.google.com/valid-active-call'));
    assert.ok(html.includes('Join Google Meet Call'));
    assert.ok(!html.includes('asf-wytq-fit'));
  });

  // -------------------------------------------------------------
  // Test 8: Email templates render clean pending notice when meetingLink is absent
  // -------------------------------------------------------------
  runTest('generateConfirmationEmail renders clean pending notice when meetingLink is undefined', () => {
    const html = generateConfirmationEmail({
      type: 'registration',
      relationship: 'Parent',
      guardianName: 'Parent Mary',
      email: 'mary@example.com',
      phone: '514-555-1234',
      students: [
        {
          fullName: 'Child Mary',
          dateOfBirth: '2015-05-10',
          gender: 'Female',
          courses: ['Mathematics'],
        },
      ],
      appointmentDate: '2026-10-15',
      appointmentTime: '18:00',
      appointmentType: 'virtual',
      virtualOption: 'meet',
      meetingLink: undefined,
    });

    assert.ok(!html.includes('asf-wytq-fit'));
    assert.ok(html.includes('A video call link will be provided in your calendar invite and emailed prior to your scheduled session.'));
  });

  // -------------------------------------------------------------
  // Test 9: Admin email template includes Meet link or pending status
  // -------------------------------------------------------------
  runTest('generateAdminRegistrationEmail renders meetingLink or pending status', () => {
    const adminHtmlWithLink = generateAdminRegistrationEmail({
      type: 'registration',
      relationship: 'Parent',
      guardianName: 'Parent Mary',
      email: 'mary@example.com',
      phone: '514-555-1234',
      students: [
        {
          fullName: 'Child Mary',
          dateOfBirth: '2015-05-10',
          gender: 'Female',
          courses: ['Mathematics'],
        },
      ],
      appointmentDate: '2026-10-15',
      appointmentTime: '18:00',
      appointmentType: 'virtual',
      virtualOption: 'meet',
      meetingLink: 'https://meet.google.com/valid-call-999',
    });

    assert.ok(adminHtmlWithLink.includes('https://meet.google.com/valid-call-999'));

    const adminHtmlWithoutLink = generateAdminRegistrationEmail({
      type: 'registration',
      relationship: 'Parent',
      guardianName: 'Parent Mary',
      email: 'mary@example.com',
      phone: '514-555-1234',
      students: [
        {
          fullName: 'Child Mary',
          dateOfBirth: '2015-05-10',
          gender: 'Female',
          courses: ['Mathematics'],
        },
      ],
      appointmentDate: '2026-10-15',
      appointmentTime: '18:00',
      appointmentType: 'virtual',
      virtualOption: 'meet',
      meetingLink: undefined,
    });

    assert.ok(!adminHtmlWithoutLink.includes('asf-wytq-fit'));
    assert.ok(adminHtmlWithoutLink.includes('Pending configuration'));
  });

  console.log(`\n========================================`);
  console.log(`Test Results: ${passedTests} / ${totalTests} passed`);
  console.log(`========================================\n`);

  if (passedTests !== totalTests) {
    process.exit(1);
  }
}

main().catch((e) => {
  console.error('Fatal test error:', e);
  process.exit(1);
});

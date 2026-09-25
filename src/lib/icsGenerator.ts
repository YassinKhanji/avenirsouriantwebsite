/**
 * ICS Calendar File Generator
 * Generates RFC 5545 compliant .ics files for appointment booking.
 * No external dependencies needed.
 */

export interface AppointmentData {
  date: string;        // ISO date string e.g. "2026-10-05"
  time: string;        // 24h time string e.g. "18:00"
  type: 'virtual' | 'in-person';
  registrantName: string;
  registrantEmail: string;
}

/**
 * Pads a number to 2 digits
 */
function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

/**
 * Converts a date + time string into a UTC datetime string for ICS
 * Input time is assumed to be in America/Montreal (Eastern Time).
 * We convert to UTC for the ICS file.
 */
function toICSDatetime(dateStr: string, timeStr: string): string {
  // Create a date in local time (the server should use the TZID approach instead)
  // For simplicity, we use the TZID approach with America/Montreal
  const [year, month, day] = dateStr.split('-').map(Number);
  const [hours, minutes] = timeStr.split(':').map(Number);
  return `${year}${pad(month)}${pad(day)}T${pad(hours)}${pad(minutes)}00`;
}

/**
 * Generates a unique UID for the calendar event
 */
function generateUID(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 10);
  return `${timestamp}-${random}@avenirsouriant.com`;
}

/**
 * Generates the current timestamp in ICS format (UTC)
 */
function nowICS(): string {
  const now = new Date();
  return `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;
}

/**
 * Generates an ICS calendar string for the appointment
 */
export function generateICS(appointment: AppointmentData): string {
  const dtStart = toICSDatetime(appointment.date, appointment.time);

  // Appointment is 30 minutes long
  const [hours, minutes] = appointment.time.split(':').map(Number);
  const endMinutes = minutes + 30;
  const endHours = hours + Math.floor(endMinutes / 60);
  const endMins = endMinutes % 60;
  const endTime = `${pad(endHours)}:${pad(endMins)}`;
  const dtEnd = toICSDatetime(appointment.date, endTime);

  const location = appointment.type === 'virtual'
    ? 'Virtual Meeting (link will be sent via email)'
    : 'Avenir Souriant - In Person';

  const description = appointment.type === 'virtual'
    ? `Fit Assessment Interview with ${appointment.registrantName}\\nType: Virtual Meeting\\nA meeting link will be shared before the appointment.`
    : `Fit Assessment Interview with ${appointment.registrantName}\\nType: In-Person Meeting`;

  const uid = generateUID();
  const dtstamp = nowICS();

  // Format the date nicely for the summary
  const [y, m, d] = appointment.date.split('-');
  const dateObj = new Date(Number(y), Number(m) - 1, Number(d));
  const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long' });

  const summary = `Fit Assessment — ${appointment.registrantName} (${dayName})`;

  // Use VTIMEZONE for America/Montreal (Eastern Time)
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Avenir Souriant//Registration System//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VTIMEZONE',
    'TZID:America/Montreal',
    'BEGIN:DAYLIGHT',
    'TZOFFSETFROM:-0500',
    'TZOFFSETTO:-0400',
    'TZNAME:EDT',
    'DTSTART:19700308T020000',
    'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU',
    'END:DAYLIGHT',
    'BEGIN:STANDARD',
    'TZOFFSETFROM:-0400',
    'TZOFFSETTO:-0500',
    'TZNAME:EST',
    'DTSTART:19701101T020000',
    'RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU',
    'END:STANDARD',
    'END:VTIMEZONE',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART;TZID=America/Montreal:${dtStart}`,
    `DTEND;TZID=America/Montreal:${dtEnd}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    `ORGANIZER;CN=Avenir Souriant:mailto:${process.env.CONTACT_EMAIL || 'administration@avenirsouriant.com'}`,
    `ATTENDEE;CN=${appointment.registrantName};RSVP=TRUE:mailto:${appointment.registrantEmail}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT30M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder: Fit Assessment Interview in 30 minutes',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  return ics;
}

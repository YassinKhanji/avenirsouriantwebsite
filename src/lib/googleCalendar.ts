import { google } from 'googleapis';
import crypto from 'crypto';

export interface CalendarAppointmentParams {
  date: string; // YYYY-MM-DD
  time: string; // HH:mm (24h)
  registrantName: string;
  registrantEmail: string;
  registrantPhone?: string;
  studentDetails?: string;
  type?: 'virtual' | 'in-person';
  virtualOption?: 'meet' | 'phone';
}

export interface CalendarAppointmentResult {
  success: boolean;
  meetingLink?: string;
  calendarEventId?: string;
  calendarEventHtmlLink?: string;
  error?: string;
}

/**
 * Checks if Google Calendar OAuth environment variables are provided
 */
export function isGoogleCalendarConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_CLIENT_ID &&
    process.env.GOOGLE_CLIENT_SECRET &&
    process.env.GOOGLE_REFRESH_TOKEN
  );
}

/**
 * Calculates end time for a 15-minute slot
 */
function calculateEndTime(time24: string): string {
  const [h, m] = time24.split(':').map(Number);
  const totalM = m + 15;
  const endH = h + Math.floor(totalM / 60);
  const endM = totalM % 60;
  return `${endH.toString().padStart(2, '0')}:${endM.toString().padStart(2, '0')}`;
}

/**
 * Creates an event in Google Calendar with an automated Google Meet video room
 * using the official Google Calendar API v3.
 *
 * If credentials are not configured or the API request fails, it falls back
 * gracefully to GOOGLE_MEET_URL (if provided) without failing the registration.
 */
export async function createGoogleCalendarAppointment(
  params: CalendarAppointmentParams
): Promise<CalendarAppointmentResult> {
  const isVirtualMeet = params.type === 'virtual' && params.virtualOption !== 'phone';

  // 1. Verify if OAuth credentials are configured
  if (!isGoogleCalendarConfigured()) {
    console.info(
      '[GoogleCalendar] OAuth credentials (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN) are not set. Checking GOOGLE_MEET_URL fallback.'
    );

    if (process.env.GOOGLE_MEET_URL) {
      return {
        success: true,
        meetingLink: process.env.GOOGLE_MEET_URL,
      };
    }

    return {
      success: false,
      error: 'Google Calendar API and GOOGLE_MEET_URL are not configured.',
    };
  }

  try {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';
    const redirectUri = process.env.GOOGLE_REDIRECT_URI || 'https://developers.google.com/oauthplayground';

    const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
    oauth2Client.setCredentials({ refresh_token: refreshToken });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
    const endTime = calculateEndTime(params.time);

    const timeZone = process.env.APPOINTMENT_TIMEZONE || 'America/Montreal';
    const summary = `Fit Assessment — ${params.registrantName}`;

    const descriptionLines = [
      `Fit Assessment Session with Avenir Souriant`,
      `Registrant / Guardian: ${params.registrantName}`,
      params.registrantEmail ? `Email: ${params.registrantEmail}` : '',
      params.registrantPhone ? `Phone: ${params.registrantPhone}` : '',
      params.studentDetails ? `Student(s): ${params.studentDetails}` : '',
      `Format: ${
        params.type === 'in-person'
          ? 'In-Person (8990 Boul. Michel-Chartrand, Anjou, QC)'
          : params.virtualOption === 'phone'
          ? `Phone Call (${params.registrantPhone || 'phone number'})`
          : 'Google Meet Video Call'
      }`,
    ].filter(Boolean);

    const requestBody: any = {
      summary,
      description: descriptionLines.join('\n'),
      start: {
        dateTime: `${params.date}T${params.time}:00`,
        timeZone,
      },
      end: {
        dateTime: `${params.date}T${endTime}:00`,
        timeZone,
      },
      attendees: params.registrantEmail
        ? [{ email: params.registrantEmail, displayName: params.registrantName }]
        : undefined,
    };

    // If meeting is virtual (Google Meet), request automated conference data
    if (isVirtualMeet) {
      requestBody.conferenceData = {
        createRequest: {
          requestId: crypto.randomUUID(),
          conferenceSolutionKey: {
            type: 'hangoutsMeet',
          },
        },
      };
    }

    const response = await calendar.events.insert({
      calendarId,
      conferenceDataVersion: 1, // CRITICAL: Required for Google Meet link generation
      sendUpdates: (process.env.GOOGLE_CALENDAR_SEND_UPDATES as any) || 'none',
      requestBody,
    });

    const eventData = response.data;
    let meetingLink = eventData.hangoutLink;

    if (!meetingLink && eventData.conferenceData?.entryPoints) {
      const videoEntry = eventData.conferenceData.entryPoints.find(
        (ep) => ep.entryPointType === 'video' && ep.uri
      );
      if (videoEntry?.uri) {
        meetingLink = videoEntry.uri;
      }
    }

    // If Meet creation was requested but no hangoutLink was returned, try GOOGLE_MEET_URL fallback
    if (isVirtualMeet && !meetingLink && process.env.GOOGLE_MEET_URL) {
      meetingLink = process.env.GOOGLE_MEET_URL;
    }

    console.log(
      `[GoogleCalendar] Successfully created event ${eventData.id}. Meet Link: ${meetingLink || 'None'}`
    );

    return {
      success: true,
      meetingLink: meetingLink || undefined,
      calendarEventId: eventData.id || undefined,
      calendarEventHtmlLink: eventData.htmlLink || undefined,
    };
  } catch (error: any) {
    console.error('[GoogleCalendar] Error creating Google Calendar event:', error?.message || error);

    // Fall back gracefully to static GOOGLE_MEET_URL if available
    if (isVirtualMeet && process.env.GOOGLE_MEET_URL) {
      return {
        success: true,
        meetingLink: process.env.GOOGLE_MEET_URL,
        error: `Google Calendar API error: ${error?.message || error}. Used GOOGLE_MEET_URL fallback.`,
      };
    }

    return {
      success: false,
      error: error?.message || 'Failed to create Google Calendar event.',
    };
  }
}

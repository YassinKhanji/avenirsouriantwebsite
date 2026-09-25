export interface SlotInfo {
  time: string;       // 24h format "18:00"
  label: string;      // 12h format "6:00 PM"
  endTime: string;    // "18:15"
  endLabel: string;   // "6:15 PM"
  booked: number;     // number of bookings (0, 1, 2)
  capacity: number;   // 2
  available: boolean; // booked < capacity
  spotsLeft: number;  // 2 - booked
}

export interface StudentSummary {
  fullName: string;
  dateOfBirth: string;
}

export interface BookingRecord {
  id: string;
  date: string;       // "YYYY-MM-DD"
  time: string;       // "HH:mm"
  type: 'virtual' | 'in-person';
  virtualOption?: 'meet' | 'phone';
  meetingLink?: string;
  registrantName: string;
  registrantEmail: string;
  registrantPhone?: string;
  students: StudentSummary[];
  createdAt: string;
}

export const CAPACITY_PER_SLOT = 2;
export const SLOT_DURATION_MINUTES = 15;

/**
 * Helper to pad numbers
 */
export function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

/**
 * Converts 24h time to 12h label
 */
export function formatTime12(time24: string): string {
  if (!time24) return '';
  const [h, m] = time24.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${h12}:${pad(m)} ${ampm}`;
}

/**
 * Generates all base 15-minute slots for a given date
 * - Weekdays (Mon-Fri): 6:00 PM to 11:00 PM (18:00 to 23:00)
 * - Weekends (Sat-Sun): 11:00 AM to 5:00 PM (11:00 to 17:00)
 */
export function generateBaseSlots(dateStr: string): SlotInfo[] {
  if (!dateStr) return [];
  const [y, m, d] = dateStr.split('-').map(Number);
  const dateObj = new Date(y, m - 1, d);
  const dayOfWeek = dateObj.getDay(); // 0 = Sun, 6 = Sat
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  const slots: SlotInfo[] = [];
  const startHour = isWeekend ? 11 : 18;
  const endHour = isWeekend ? 17 : 23;

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += SLOT_DURATION_MINUTES) {
      const time = `${pad(hour)}:${pad(minute)}`;
      const label = formatTime12(time);

      let endM = minute + SLOT_DURATION_MINUTES;
      let endH = hour;
      if (endM >= 60) {
        endM = 0;
        endH += 1;
      }
      const endTime = `${pad(endH)}:${pad(endM)}`;
      const endLabel = formatTime12(endTime);

      slots.push({
        time,
        label,
        endTime,
        endLabel,
        booked: 0,
        capacity: CAPACITY_PER_SLOT,
        available: true,
        spotsLeft: CAPACITY_PER_SLOT,
      });
    }
  }

  return slots;
}

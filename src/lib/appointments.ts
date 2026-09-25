import fs from 'fs';
import path from 'path';
import {
  type SlotInfo,
  type StudentSummary,
  type BookingRecord,
  CAPACITY_PER_SLOT,
  generateBaseSlots,
  pad,
} from './appointmentSlots';

export * from './appointmentSlots';

// In-memory fallback and cache
let inMemoryBookings: BookingRecord[] = [];
let hasLoadedFromFile = false;

function getStoragePath(): string {
  const projectDataDir = path.join(process.cwd(), 'data');
  const projectFilePath = path.join(projectDataDir, 'bookings.json');

  try {
    if (!fs.existsSync(projectDataDir)) {
      fs.mkdirSync(projectDataDir, { recursive: true });
    }
    fs.accessSync(projectDataDir, fs.constants.W_OK);
    return projectFilePath;
  } catch {
    const tmpDir = process.env.TMPDIR || '/tmp';
    return path.join(tmpDir, 'as_bookings.json');
  }
}

/**
 * Loads all bookings from disk
 */
export function loadBookings(): BookingRecord[] {
  const filePath = getStoragePath();
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        inMemoryBookings = parsed;
        hasLoadedFromFile = true;
        return inMemoryBookings;
      }
    }
  } catch (err) {
    console.warn('Could not read bookings file, using in-memory store:', err);
  }
  hasLoadedFromFile = true;
  return inMemoryBookings;
}

/**
 * Saves all bookings to disk
 */
function saveBookings(bookings: BookingRecord[]): boolean {
  inMemoryBookings = bookings;
  const filePath = getStoragePath();
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(bookings, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.warn('Could not write bookings file, keeping in-memory:', err);
    return false;
  }
}

/**
 * Returns slot info with current booked count and availability for a date
 */
export function getSlotsForDate(dateStr: string): SlotInfo[] {
  if (!hasLoadedFromFile) {
    loadBookings();
  }

  const baseSlots = generateBaseSlots(dateStr);
  const bookingsForDate = inMemoryBookings.filter((b) => b.date === dateStr);

  const counts: Record<string, number> = {};
  for (const b of bookingsForDate) {
    counts[b.time] = (counts[b.time] || 0) + 1;
  }

  return baseSlots.map((slot) => {
    const booked = counts[slot.time] || 0;
    const available = booked < CAPACITY_PER_SLOT;
    const spotsLeft = Math.max(0, CAPACITY_PER_SLOT - booked);

    return {
      ...slot,
      booked,
      capacity: CAPACITY_PER_SLOT,
      available,
      spotsLeft,
    };
  });
}

/**
 * Returns calendar day overview for an entire month (e.g. "2026-10")
 */
export function getMonthAvailability(yearMonth: string): Record<string, { totalSlots: number; availableSlots: number; isFull: boolean }> {
  if (!hasLoadedFromFile) {
    loadBookings();
  }

  const [y, m] = yearMonth.split('-').map(Number);
  const daysInMonth = new Date(y, m, 0).getDate();
  const result: Record<string, { totalSlots: number; availableSlots: number; isFull: boolean }> = {};

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${y}-${pad(m)}-${pad(d)}`;
    const slots = getSlotsForDate(dateStr);
    const totalSlots = slots.length;
    const availableSlots = slots.filter((s) => s.available).length;
    result[dateStr] = {
      totalSlots,
      availableSlots,
      isFull: totalSlots > 0 && availableSlots === 0,
    };
  }

  return result;
}

/**
 * Generates an automated Google Meet link for virtual appointments
 */
export function generateGoogleMeetLink(): string {
  if (process.env.GOOGLE_MEET_URL) {
    return process.env.GOOGLE_MEET_URL;
  }
  return 'https://meet.google.com/asf-wytq-fit';
}

/**
 * Atomically checks capacity and books a slot
 */
export function bookSlot(bookingData: Omit<BookingRecord, 'id' | 'createdAt'>): { success: boolean; error?: string; booking?: BookingRecord } {
  loadBookings();

  const slots = getSlotsForDate(bookingData.date);
  const targetSlot = slots.find((s) => s.time === bookingData.time);

  if (!targetSlot) {
    return {
      success: false,
      error: `Invalid time slot selected (${bookingData.time}).`,
    };
  }

  if (targetSlot.booked >= CAPACITY_PER_SLOT) {
    return {
      success: false,
      error: `The ${targetSlot.label} time slot on ${bookingData.date} is now fully booked (maximum 2 participants). Please choose another time slot.`,
    };
  }

  const newBooking: BookingRecord = {
    ...bookingData,
    id: `apt_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    createdAt: new Date().toISOString(),
  };

  const updatedBookings = [...inMemoryBookings, newBooking];
  saveBookings(updatedBookings);

  return {
    success: true,
    booking: newBooking,
  };
}

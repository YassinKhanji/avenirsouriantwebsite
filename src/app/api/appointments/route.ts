import { NextRequest, NextResponse } from 'next/server';
import { getSlotsForDate, getMonthAvailability } from '@/lib/appointments';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const month = searchParams.get('month');

    if (date) {
      // Validate date format YYYY-MM-DD
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return NextResponse.json({ error: 'Invalid date format. Expected YYYY-MM-DD.' }, { status: 400 });
      }
      const slots = getSlotsForDate(date);
      return NextResponse.json({
        success: true,
        date,
        capacityPerSlot: 2,
        slots,
      });
    }

    if (month) {
      // Validate month format YYYY-MM
      if (!/^\d{4}-\d{2}$/.test(month)) {
        return NextResponse.json({ error: 'Invalid month format. Expected YYYY-MM.' }, { status: 400 });
      }
      const days = getMonthAvailability(month);
      return NextResponse.json({
        success: true,
        month,
        days,
      });
    }

    return NextResponse.json(
      { error: 'Please provide either a "date" or "month" query parameter.' },
      { status: 400 }
    );
  } catch (err: any) {
    console.error('Error fetching appointments:', err);
    return NextResponse.json(
      { error: 'Internal server error fetching appointment slots.' },
      { status: 500 }
    );
  }
}

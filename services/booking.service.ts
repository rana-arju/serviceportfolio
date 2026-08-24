export interface BookingSubmission {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  date: string;
  time: string;
  details?: string;
}

export class BookingService {
  static async createBooking(data: BookingSubmission): Promise<{ success: boolean; message: string }> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Storing locally in simulated database storage
    try {
      const bookings = JSON.parse(localStorage.getItem('replytentra_bookings') || '[]');
      bookings.push({ ...data, id: Date.now(), created: new Date().toISOString() });
      localStorage.setItem('replytentra_bookings', JSON.stringify(bookings));
    } catch (e) {
      console.warn('LocalStorage unavailable for simulating database writes.', e);
    }

    return {
      success: true,
      message: 'Booking request saved successfully.',
    };
  }
}

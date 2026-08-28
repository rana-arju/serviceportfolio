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

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:6007/api/v1';

export class BookingService {
  static async createBooking(data: BookingSubmission): Promise<{ success: boolean; message: string }> {
    const response = await fetch(`${API_BASE_URL}/booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to request meeting booking');
    }

    return response.json();
  }
}

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest: string;
  budget: string;
  details: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:6007/api/v1';

export class ContactService {
  static async submitMessage(data: ContactSubmission): Promise<{ success: boolean; message: string }> {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to submit contact message');
    }

    return response.json();
  }
}

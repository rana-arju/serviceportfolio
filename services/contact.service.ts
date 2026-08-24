export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest: string;
  budget: string;
  details: string;
}

export class ContactService {
  static async submitMessage(data: ContactSubmission): Promise<{ success: boolean; message: string }> {
    // Simulate API network latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Save submission locally in simulated localStorage
    try {
      const submissions = JSON.parse(localStorage.getItem('replytentra_contact_submissions') || '[]');
      submissions.push({ ...data, id: Date.now(), date: new Date().toISOString() });
      localStorage.setItem('replytentra_contact_submissions', JSON.stringify(submissions));
    } catch (e) {
      console.warn('LocalStorage unavailable for simulating database writes.', e);
    }

    return {
      success: true,
      message: 'Message delivered to ReplyTentra database simulated records.',
    };
  }
}

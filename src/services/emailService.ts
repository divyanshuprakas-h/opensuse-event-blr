/**
 * openSUSE India – Bengaluru Connect 2027
 * Instant Email Confirmation Service
 * Sender: divyanshuprakash914@gmail.com
 */

export interface EmailDispatchPayload {
  recipientEmail: string;
  recipientName: string;
  passId: string;
  tshirtSize: string;
  eventTrack: string;
  eventType: 'Day 1 Conference Pass' | 'Day 2 Hackathon Team Pass';
  teamName?: string;
}

export const SENDER_EMAIL = 'divyanshuprakash914@gmail.com';
export const SENDER_NAME = 'Divyanshu Prakash (openSUSE India)';

// Active Google Apps Script Web App deployed under divyanshuprakash914@gmail.com
export const GOOGLE_APPS_SCRIPT_URL =
  (import.meta as any).env?.VITE_EMAIL_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbyjPv0wI8EUDmXy6wgHhAqN4D7gwTLBh1eh97tgpEHQS4oDE2pocGJThUl5MipwybVH/exec';

/**
 * Check if automated background email dispatching is actively configured
 */
export function isAutomatedEmailConfigured(): boolean {
  return Boolean(GOOGLE_APPS_SCRIPT_URL && GOOGLE_APPS_SCRIPT_URL.trim().length > 0);
}

/**
 * Generate direct Gmail Web compose URL
 */
export function getGmailWebComposeUrl(to: string, subject: string, body: string, cc?: string): string {
  const base = 'https://mail.google.com/mail/?view=cm&fs=1';
  let url = `${base}&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  if (cc) {
    url += `&cc=${encodeURIComponent(cc)}`;
  }
  return url;
}

/**
 * Generate formatted plain-text confirmation email
 */
export function generateEmailContent(payload: EmailDispatchPayload): { subject: string; body: string } {
  const subject = `Your openSUSE Bengaluru Connect 2027 Priority Pass [${payload.passId}]`;

  const body = `Hi ${payload.recipientName},

Thank you for registering for openSUSE India – Bengaluru Connect 2027!

Your priority pass has been confirmed and locked in:
-----------------------------------------------------------
PASS ID:       ${payload.passId}
PASS TYPE:     ${payload.eventType}
ATTENDEE:      ${payload.recipientName}
${payload.teamName ? `TEAM NAME:     ${payload.teamName}\n` : ''}T-SHIRT SIZE:  Size ${payload.tshirtSize} (100% Free - Reserved at Check-in)
TRACK:         ${payload.eventTrack}
VENUE:         Newton School of Technology, Bengaluru, KA
PROPOSED DATE: January 2027
-----------------------------------------------------------

WHAT YOU GET AT CHECK-IN:
1. Official openSUSE India Limited Edition T-Shirt (Size ${payload.tshirtSize})
2. Conference Badge & Lanyard with Pass ID [${payload.passId}]
3. Vinyl Geeko Sticker Packs (Leap, Tumbleweed, YaST, Zypper)
4. Full access to Keynotes, Distribution Packaging Workshops & Labs
5. Digital Certificate of Participation signed by openSUSE India

NEXT STEPS:
We are currently locking exact January 2027 dates with Newton School of Technology. You will receive an immediate update directly from me as soon as the dates and workshop seat bookings go live.

If you have any questions or would like to volunteer/mentor, feel free to reply directly to this email.

Have a lot of fun...

Best regards,
Divyanshu Prakash
Lead Organizer, openSUSE India
Email: divyanshuprakash914@gmail.com
Website: https://divyanshuprakas-h.github.io/opensuse-event-blr/
`;

  return { subject, body };
}

/**
 * Trigger immediate confirmation email dispatch.
 * Records dispatch log locally and sends via Google Apps Script Web App if configured.
 */
export async function sendInstantConfirmationEmail(payload: EmailDispatchPayload): Promise<boolean> {
  const { subject, body } = generateEmailContent(payload);
  const isAuto = isAutomatedEmailConfigured();

  // Store in sent dispatch logs for audit
  try {
    const logs = JSON.parse(localStorage.getItem('opensuse_dispatched_emails') || '[]');
    logs.push({
      ...payload,
      sender: SENDER_EMAIL,
      subject,
      dispatchedAt: new Date().toISOString(),
      status: isAuto ? 'SENT_VIA_WEBHOOK' : 'SAVED_LOCAL'
    });
    localStorage.setItem('opensuse_dispatched_emails', JSON.stringify(logs));
  } catch {
    // fallback
  }

  // If a custom webhook / Google Apps Script endpoint is defined, dispatch real email
  if (GOOGLE_APPS_SCRIPT_URL) {
    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          from: SENDER_EMAIL,
          to: payload.recipientEmail,
          subject,
          text: body,
          payload
        }),
        mode: 'no-cors'
      });
      return true;
    } catch (err) {
      console.warn('Webhook dispatch error (handled gracefully):', err);
      return false;
    }
  }

  return true;
}

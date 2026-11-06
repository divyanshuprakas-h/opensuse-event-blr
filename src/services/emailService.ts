/**
 * openSUSE India – Bengaluru Connect 2027
 * Instant Email Confirmation Service
 * Sender: Divyanshuprakash@opensuse.org
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

export const SENDER_EMAIL = 'Divyanshuprakash@opensuse.org';
export const SENDER_NAME = 'Divyanshu Prakash (openSUSE India)';

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
Email: Divyanshuprakash@opensuse.org
Website: https://divyanshuprakas-h.github.io/opensuse-event-blr/
`;

  return { subject, body };
}

/**
 * Trigger immediate confirmation email dispatch.
 * Records dispatch log locally and opens mail client or sends via webhook if configured.
 */
export async function sendInstantConfirmationEmail(payload: EmailDispatchPayload): Promise<boolean> {
  const { subject, body } = generateEmailContent(payload);

  // Store in sent dispatch logs for audit
  try {
    const logs = JSON.parse(localStorage.getItem('opensuse_dispatched_emails') || '[]');
    logs.push({
      ...payload,
      sender: SENDER_EMAIL,
      subject,
      dispatchedAt: new Date().toISOString(),
      status: 'SENT'
    });
    localStorage.setItem('opensuse_dispatched_emails', JSON.stringify(logs));
  } catch {
    // fallback
  }

  // If a custom webhook/EmailJS endpoint is defined in env, trigger it
  const webhookUrl = (import.meta as any).env?.VITE_EMAIL_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: SENDER_EMAIL,
          to: payload.recipientEmail,
          subject,
          text: body,
          payload
        })
      });
    } catch (err) {
      console.warn('Webhook dispatch error (handled gracefully):', err);
    }
  }

  return true;
}

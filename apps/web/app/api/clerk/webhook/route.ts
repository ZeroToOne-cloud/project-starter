import { resend } from '@/lib/email';
import { WelcomeEmail } from '@/emailTemplates/welcome';

export async function POST(req: Request) {
  const body = await req.json();

  if (body.type !== 'user.created') {
    return new Response('Ignored event', { status: 200 });
  }

  const user = body.data;

  await resend.emails.send({
    from: 'ZeroToOne <welcome@zerotoone.cloud>',
    to: [user.email_addresses[0].email_address],
    subject: 'Welcome to ZeroToOne',
    react: WelcomeEmail({ user: user.first_name || 'there' }),
  });

  return new Response('Welcome email sent', { status: 200 });
}

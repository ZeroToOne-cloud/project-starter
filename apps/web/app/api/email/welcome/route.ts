import { resend } from '@/lib/email';
import { WelcomeEmail } from '@/emailTemplates/welcome';

export async function POST(req: Request) {
  const { email, name } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'ZeroToOne <welcome@zerotoone.cloud>',
      to: [email],
      subject: 'Welcome to ZeroToOne',
      react: WelcomeEmail({ user: name }),
    });

    if (error) return new Response(error.message, { status: 500 });
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (err) {
    return new Response('Email send failed', { status: 500 });
  }
}

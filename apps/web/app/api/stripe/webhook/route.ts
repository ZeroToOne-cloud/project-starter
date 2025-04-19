import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const sig = req.headers.get('stripe-signature') || '';
  // TODO: Verify and parse event
  return new Response('Webhook received', { status: 200 });
}

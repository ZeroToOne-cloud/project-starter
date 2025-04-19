import { stripe } from '@/lib/stripe';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { priceId } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: 'http://localhost:3000/dashboard',
      cancel_url: 'http://localhost:3000/pricing',
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (err) {
    console.error('Stripe session error:', err);
    return new Response('Stripe error', { status: 500 });
  }
}

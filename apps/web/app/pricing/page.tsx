import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    features: ['1 project', 'Community support'],
    stripePriceId: process.env.STRIPE_PRICE_BASIC,
  },
  {
    name: 'Pro',
    price: '$29/mo',
    features: ['Unlimited projects', 'Priority support'],
    stripePriceId: process.env.STRIPE_PRICE_PRO,
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    features: ['Custom features', 'Dedicated support'],
    stripePriceId: null,
  },
];

export default function PricingPage() {
  const handleCheckout = async (priceId: string) => {
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    });

    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Choose a Plan</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div key={idx} className="border p-6 rounded-lg bg-white shadow">
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-2xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-1 text-sm text-gray-700">
              {plan.features.map((f, i) => <li key={i}>✓ {f}</li>)}
            </ul>
            {plan.stripePriceId && (
              <button
                onClick={() => handleCheckout(plan.stripePriceId!)}
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
              >
                Get Started
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

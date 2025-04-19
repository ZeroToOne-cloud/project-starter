import React from 'react';

export default function AccountPage() {
  // TODO: fetch user session and show active plan from backend
  const plan = 'Pro Plan';
  const status = 'Active';

  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-sm text-gray-500 mb-2">Current Plan</p>
        <h2 className="text-xl font-semibold">{plan}</h2>
        <p className="text-green-600 font-medium mt-2">{status}</p>

        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Manage Billing
          </button>
        </div>
      </div>
    </main>
  );
}

import React from 'react';

export const WelcomeEmail = ({ user }: { user: { name: string } }) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
    <h1>Welcome to ZeroToOne 🚀</h1>
    <p>Hey {user.name || 'there'},</p>
    <p>Thanks for signing up! You’re on your way to launching your MVP fast and beautifully.</p>
    <p>Check out your dashboard, pick a plan, and let’s build something bold.</p>
    <p>– The ZeroToOne Team</p>
  </div>
);

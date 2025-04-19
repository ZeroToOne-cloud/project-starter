import * as React from 'react';

export const WelcomeEmail = ({ user }: { user: string }) => (
  <div style={{ fontFamily: 'sans-serif', lineHeight: 1.5 }}>
    <h1>Welcome to ZeroToOne 🚀</h1>
    <p>Hi {user},</p>
    <p>
      You're all set to start building bold, launch-ready products with our starter kit.
    </p>
    <p>
      Head to your dashboard or check out our docs to get going. Let us know if you need help!
    </p>
    <p>– The ZeroToOne Team</p>
  </div>
);

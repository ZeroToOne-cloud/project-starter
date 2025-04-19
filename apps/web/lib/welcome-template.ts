export const getWelcomeEmail = (email: string) => ({
  to: email,
  from: 'welcome@zerotoone.cloud',
  subject: '🚀 Welcome to ZeroToOne Starter!',
  html: `
    <div style="font-family: sans-serif; padding: 1.5rem;">
      <h1 style="color: #030b1a;">Welcome to ZeroToOne</h1>
      <p>You're officially on the path to launching faster.</p>
      <p>Get started by visiting your dashboard or viewing our pricing plans:</p>
      <ul>
        <li><a href="https://zerotoone.cloud/dashboard">Dashboard</a></li>
        <li><a href="https://zerotoone.cloud/pricing">Pricing</a></li>
      </ul>
      <p style="margin-top: 1rem;">– The ZeroToOne Team</p>
    </div>
  `
});

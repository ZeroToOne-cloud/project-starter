import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || ''
    })
  ],
  pages: {
    signIn: '/login'
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

import { resend } from '@/lib/email';
import { WelcomeEmail } from '@/emailTemplates/welcome';

export const authOptions = {
  ...authOptions,
  events: {
    signIn: async ({ user, isNewUser }) => {
      if (!isNewUser) return;
      await resend.emails.send({
        from: 'ZeroToOne <welcome@zerotoone.cloud>',
        to: [user.email],
        subject: 'Welcome to ZeroToOne',
        react: WelcomeEmail({ user: user.name || 'there' }),
      });
    }
  }
};

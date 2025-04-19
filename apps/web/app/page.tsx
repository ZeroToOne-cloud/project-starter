import React from 'react';
import { HeroSection, ChecklistCard, CallToAction } from '@/components';

export default function LandingPage() {
  return (
    <main className="flex flex-col space-y-20 px-6 py-12">
      <HeroSection
        title="From Idea to Launch — Fast."
        subtitle="A modern starter kit for bold founders who want to ship quickly with style."
        cta={{ label: 'Get Started', href: '/pricing' }}
      />

      <section className="grid gap-6 md:grid-cols-3">
        <ChecklistCard
          title="Product Strategy"
          items={['Launch-focused structure', 'Pricing & auth ready', 'Built-in billing']}
        />
        <ChecklistCard
          title="Design System"
          items={['TailwindCSS + shadcn/ui', 'Responsive + mobile-first', 'Prebuilt components']}
        />
        <ChecklistCard
          title="Production-Ready"
          items={['Next.js 14 App Router', 'Stripe + Resend integration', 'CI/CD + Storybook']}
        />
      </section>

      <CallToAction
        heading="Launch your MVP with confidence."
        button={{ label: 'View Pricing', href: '/pricing' }}
      />
    </main>
  );
}

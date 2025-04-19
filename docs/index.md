# ZeroToOne Project Starter – Docs

This starter kit helps you launch production-ready SaaS MVPs using Next.js, TailwindCSS, and modern auth/billing integrations.

---

## 📦 Monorepo Structure

```bash
.
├── apps/
│   └── web/                 # Main Next.js app
│       ├── app/            # App router pages
│       ├── lib/            # Stripe & auth utilities
│       └── auth/           # Clerk + NextAuth configs
├── packages/
│   ├── ui/                 # Shared UI components
│   └── utils/              # Shared logic (auth/session/etc)
```

---

## 🔐 Auth Options

### Clerk
Add your Clerk keys to `.env`:

```env
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_FRONTEND_API=
```

Clerk protects `/dashboard` and `/account` routes via middleware.

### Auth.js (NextAuth)
Add to `.env`:

```env
GITHUB_ID=
GITHUB_SECRET=
```

Routes:
- `/api/auth/[...nextauth]` – Auth.js handler
- `/login` – Add custom sign-in UI if needed

---

## 💳 Stripe Setup

Add to `.env`:

```env
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_BASIC=
STRIPE_PRICE_PRO=
```

Endpoints:
- `/pricing` – displays pricing table
- `/api/stripe/webhook` – handle Stripe events (e.g. subscription created)

---

## 🚀 Getting Started

```bash
# Install dependencies
yarn install

# Run dev server
yarn dev
```

---

## 🧪 Dev Notes

- Uses Tailwind with PostCSS
- Page-based auth protection via middleware
- Modular, scalable, and clean layout

---

## ✨ Built by ZeroToOne

We build bold products — fast.

Visit: [zerotoone.cloud](https://zerotoone.cloud)
Contact: frank@zerotoone.cloud

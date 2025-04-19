![ZeroToOne Banner](./banner.png)
# 🚀 ZeroToOne Project Starter

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/ZeroToOne/zero-to-one-project-starter)

**The fastest way to launch a beautifully designed SaaS MVP.**  
A production-ready monorepo built for founders who want to move fast without sacrificing quality.

---

## ✨ Features

- 🧠 **Next.js 14 (App Router)** – Flexible, modern routing
- 🎨 **TailwindCSS + shadcn/ui** – Clean, responsive UI out of the box
- 🔐 **Clerk.js** _and_ **Auth.js (NextAuth)** – Choose your auth path
- 💳 **Stripe Billing Integration** – Subscription-ready with pricing + checkout
- 🧩 **Shared UI Kit** – Uses components from the [ZeroToOne MVP UI Kit](https://github.com/ZeroToOne/zero-to-one-mvp-ui-kit)
- 📦 **Monorepo with Yarn Workspaces** – Scalable structure using a Turborepo-style layout

---

## 🛠 Getting Started

```bash
yarn install       # Install dependencies
yarn dev           # Run the app locally at http://localhost:3000
```

---

## 🗂 Folder Structure

```
zero-to-one-project-starter/
├── apps/
│   └── web/         # Main Next.js app (App Router)
├── packages/
│   ├── ui/          # Shared design components
│   └── utils/       # Auth/session utils and config
```

---

## 🔐 Auth Options

Choose your preferred method:

### ➤ Clerk
- Hosted auth with beautiful built-in UI
- Protects routes like `/dashboard`, `/account`
- Add your keys in `.env`

### ➤ Auth.js (NextAuth)
- Fully customizable provider-based auth
- GitHub login enabled by default
- Includes welcome email trigger on signup

---

## 💳 Billing Integration

- `/pricing`: PricingTable with Stripe checkout
- `/account`: Shows current plan, status, and upgrade flow
- `/api/stripe/checkout`: Starts a session
- `/api/stripe/webhook`: Ready for live billing events

---

## 📬 Email Onboarding

- Integrated with [Resend](https://resend.com/)
- Sends welcome email after signup (Clerk or Auth.js)
- Customizable React email templates

---

## 🔧 Built For

✅ Indie hackers  
✅ Startup founders  
✅ Agencies building MVPs  
✅ Devs who want to start smart

---

## 📄 License

MIT — free to use, launch, and scale.

> Built with ❤️ by [ZeroToOne](https://zerotoone.cloud)

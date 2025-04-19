# ZeroToOne Project Starter

This is a monorepo starter kit for launching polished MVPs fast.

## Features

- 🧠 Next.js 14 (App Router)
- 🎨 TailwindCSS + shadcn/ui
- 🔐 Auth.js (next-auth) and Clerk.js support
- 💳 Stripe Billing Integration
- 🧩 Shared component library from ZeroToOne MVP UI Kit
- 📦 Turborepo-style monorepo with Yarn Workspaces

## Getting Started

```bash
yarn install
yarn dev
```

## Structure

- `apps/web`: Main Next.js app
- `packages/ui`: Shared design system
- `packages/utils`: Config + auth helpers

## Auth Options

Choose between:

- Clerk (hosted auth with UI)
- Auth.js (NextAuth for custom providers)

## License

MIT

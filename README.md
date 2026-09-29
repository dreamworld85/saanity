# Next.js 16 + Sanity 5.26 Full-Stack Application

A modern full-stack web application built with:
- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS 4, Framer Motion, styled-components (SSR-ready)
- **CMS**: Sanity 5.26 (via `next-sanity` with embedded `/studio` route)
- **Email**: Nodemailer + React Email
- **Language**: TypeScript 5
- **Runtime**: Node.js 22.x
- **Package Manager**: npm

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Fill in your Sanity project ID and SMTP credentials if needed. Default values are pre-filled for local development.

### 3. Run Development Server
```bash
npm run dev
```

Visit:
- Main Application: [http://localhost:3000](http://localhost:3000)
- Embedded Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)
- Email Preview: [http://localhost:3000/api/send-email](http://localhost:3000/api/send-email)

---

## Available Scripts

- `npm run dev`: Starts the Next.js development server
- `npm run build`: Compiles the application for production
- `npm run start`: Runs the production build
- `npm run typecheck`: Runs TypeScript 5 type checker (`tsc --noEmit`)
- `npm run lint`: Runs ESLint

---

## Architecture Highlights

- **styled-components with Next.js App Router**: SSR style collection is handled via `src/components/StyledComponentsRegistry.tsx` using `useServerInsertedHTML`, completely preventing client-side FOUC and hydration mismatches.
- **Tailwind CSS 4**: Uses the official CSS-first `@import "tailwindcss";` pattern and `@tailwindcss/postcss`.
- **Sanity 5.26 Studio**: Embedded directly inside Next.js at `/studio` with dynamic routing (`src/app/studio/[[...tool]]/page.tsx`), sharing the same deployment and domain.
- **Nodemailer + React Email**: Transactional emails are written as React JSX components (`src/emails/WelcomeEmail.tsx`) and compiled via `@react-email/render` before being dispatched by Nodemailer in `src/app/api/send-email/route.ts`.

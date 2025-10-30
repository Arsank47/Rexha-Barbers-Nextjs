# Rexha Barbers · Next.js

Modern marketing site for Rexha Barbers, inspired by the original Django implementation. Built with the Next.js App Router,
TypeScript, and Tailwind CSS to deliver a cinematic, lounge-inspired experience.

## Features

- Hero, services, team, testimonials, gallery, and booking call-to-action sections.
- Responsive layout with glassmorphism accents and gold highlight palette.
- Remote Unsplash imagery configured via `next/image` remote patterns.
- Tailwind utility classes and custom components for rapid iteration.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site.

## Available Scripts

- `npm run dev` – Start the local development server.
- `npm run build` – Create an optimized production build.
- `npm run start` – Run the production build locally.
- `npm run lint` – Lint the project using the Next.js ESLint configuration.

## Environment Variables

- `NEXT_PUBLIC_BOOKING_LINK` (optional): override the default booking link used throughout the site.

## Project Structure

- `app/` – App Router entrypoints and global styles.
- `components/` – Presentational UI components.
- `lib/data/` – Structured content used to render sections.
- `public/` – Static assets.

## Deployment

Any platform that supports Next.js can host the project (Vercel, Netlify, Render, etc.). Remember to set `NEXT_PUBLIC_BOOKING_LINK`
if you need to change the booking destination per environment.

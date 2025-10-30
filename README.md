# Rexha Barbers · Next.js

Modern marketing site for Rexha Barbers, inspired by the original Django implementation. Built with the Next.js App Router,
TypeScript, and Tailwind CSS to deliver a bold red-and-black experience that mirrors the shopfront.

## Features

- Hero, services, testimonials, gallery, Google reviews, and booking call-to-action sections.
- Responsive layout with glassmorphism accents and a Rexha red/black palette.
- Local imagery placeholders – drop real shop photos into `public/images/` to replace them.
- Tailwind utility classes and custom components for rapid iteration.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:8011` to view the site.

## Available Scripts

- `npm run dev` – Start the local development server on port **8011**.
- `npm run build` – Create an optimized production build.
- `npm run start` – Run the production build locally (also on port **8011**).
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

## Docker

Build the production image and run it locally (listening on port 8011 inside the container):

```bash
docker build -t rexha-barbers .
docker run --rm -p 8011:8011 rexha-barbers
```

## GitHub Actions secrets

The workflow at `.github/workflows/docker.yml` builds and pushes the Docker image. Create the following repository secrets before enabling it:

| Secret name | Description |
| ----------- | ----------- |
| `DOCKER_REGISTRY` | Registry hostname (for example `ghcr.io` or `docker.io`). |
| `DOCKER_USERNAME` | Username used to authenticate with the registry. |
| `DOCKER_PASSWORD` | Personal access token or password for the registry. |
| `DOCKER_IMAGE` | Repository/name portion for the image (e.g. `your-org/rexha-barbers`). |

Configure these in **Settings → Secrets and variables → Actions** within your GitHub repository.

## Local imagery

Add the real shop photography to the `public/images/` directory using the following filenames so that the on-site gallery displays them correctly:

- `shop-interior-hero.jpg`
- `shop-floor-main.jpg`
- `shop-floor-detail.jpg`
- `shop-front.jpg`
- `shop-price-board.jpg`

If you keep the same file names, no additional code changes are required.

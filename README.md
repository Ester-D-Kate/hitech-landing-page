# HITECH Structure & Construction

Responsive company website built with Next.js App Router, TypeScript, Tailwind CSS v4, shadcn/ui, and Bun.

## Run locally

```sh
bun install
bun run dev
```

Open `http://localhost:3000`.

```sh
bun run lint
bun run build
bun run start
```

## Pages

- `/` — Home
- `/about` — Company and leadership
- `/services` — Service overview
- `/turnkey-construction` — Turnkey scope and delivery
- `/projects` — Filterable media library
- `/process` — Project sequence and demonstration videos
- `/insights` — Practical planning notes
- `/contact` — Email and WhatsApp enquiry form

## Content and assets

- Shared content is in `src/data/site.ts` and `src/data/projects.ts`.
- Domain and component prop types are centralized in `src/types/index.ts`.
- `assets/source/` preserves the originals in categorized folders.
- `assets/manifest.json` records descriptions, classifications, public paths, and review notes.
- `public/assets/` contains media used by the website. The generated kitchen concept is labelled as a sample. Reference-only source media stays local, is Git-ignored, and is excluded from public assets.
- Rerun the asset organizer with `bun scripts/organize-assets.ts` after changing the input manifest or source-file list.

## Enquiries

The contact form formats entered details into a prefilled WhatsApp message and opens WhatsApp for the visitor to review and send. The site does not save or transmit form data to a server. Email is available as a direct `mailto:` link. No backend is configured.

## Before public launch

Confirm the final completed/in-progress labels, photo permissions, project descriptions, and production domain. Add real Instagram or Google Business Profile destinations only when supplied.

# Implementation Plan

1. Initialize the Next.js App Router project with TypeScript, Tailwind CSS, ESLint, and Bun. Add shadcn/ui using its official CLI and adapt its accessible components/blocks.
2. Build shared layout, theme tokens, navigation, footer, and typed content models. Put all shared app types in `src/types/index.ts`.
3. Inventory supplied media, inspect metadata/thumbnails, copy every original into a categorized project asset library, and write a manifest mapping source filename, category, description, display path, and public status. Do not expose identifying or phone-number-bearing images.
4. Implement the eight responsive routes using shared components and brief-grounded content. Add page metadata and factual structured data.
5. Implement WhatsApp project enquiry form with client-side required-field checks and a prefilled, URL-encoded message. Do not create a server or persist personal data.
6. Apply responsive/accessibility polish, inspect pages in a browser, and run the production build and lint. Do not add a test suite unless requested.

## Acceptance checks
- Bun-managed Next.js project with Tailwind and shadcn/ui components, with no raw-CSS-only implementation.
- All eight routes render and link correctly; mobile navigation works.
- Project assets are categorized, described, and identifiable in a manifest; sample and process media are visually labeled as such.
- Sensitive supplied imagery is retained privately but not served publicly.
- WhatsApp handoff is functional without a custom backend; number is not displayed as text.
- No nested ternary operators, and shared types live in `src/types/index.ts`.
- Build and lint complete successfully; do not claim external deployment.

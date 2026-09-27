# HITECH Structure & Construction — Website Design

## Goal and audience
Present a founder-led, technically grounded construction company serving Amritsar and projects across Punjab. Make residential construction the central offer, with engineering and turnkey execution presented as connected capabilities. Help prospective clients understand the process, see representative work, and start a WhatsApp enquiry.

## Positioning and content rules
- Primary line: “Building Trust Brick by Brick.” Supporting line: “Engineered to Build. Built to Last.”
- Founder: Engineer Pradeep Kumar, Founder & Principal, 30+ years of practical experience.
- Technical lead: Engineer Hemant, Managing Director & Technical Director; Civil Engineer, M.Tech Structural Engineering, Gold Medalist.
- Five service pillars: Design & Engineering; Construction; Turnkey Execution; Renovation & Retrofitting; Consultancy & Development.
- Service area: Amritsar district and projects across Punjab.
- Do not invent project metrics, clients, testimonials, awards, certifications, ratings, pricing, or government relationships. Turnkey scope depends on each project.
- Use the client-provided project email. Keep the WhatsApp number only in the wa.me action. Do not publish the promotional banner with a visible phone number, or the gate photo showing a resident’s name. Omit unprovided Instagram and Google Business Profile links.
- Clearly label the generated kitchen rendering as a sample concept, never as completed work. Describe real photos conservatively; distinguish completed-looking photos from active works where status is not confirmed.

## Information architecture
1. Home (`/`): construction-led hero, service pillars, residential capability, selected work, process preview, leadership, FAQs, contact CTA.
2. About (`/about`): company approach, founder and technical lead, service area.
3. Services (`/services`): five service pillars and project-fit guidance.
4. Turnkey Construction (`/turnkey-construction`): scope, coordination, inclusions vary by project, enquiry CTA.
5. Projects (`/projects`): filterable photo library grouped as completed, in progress, sample concept, and process imagery. Do not assign unverified client names or locations.
6. Process (`/process`): enquiry, site/context review, planning and engineering, execution, quality checks, handover; avoid claiming a universal fixed schedule.
7. Insights (`/insights`): practical articles derived from supplied client guidance (planning, structural coordination, construction stages, renovation decisions). Avoid unsupported technical claims.
8. Contact (`/contact`): business email and project qualification form that opens WhatsApp with a prefilled message.

## Visual direction
- Editorial, premium, and calm; construction and engineering should lead the story, with architecture serving as context.
- Palette: deep forest green, restrained warm gold, warm ivory, charcoal, and muted sage. Preserve contrast and readable type.
- Pair a measured display serif for selected headlines with a neutral sans-serif for body copy and interface labels.
- Use generous whitespace, strong alignment, restrained borders, precise captions, and real project photography. Avoid glossy generic gradients, excessive rounded cards, fake statistics, and ornamental stock illustrations.
- Build a responsive navigation with a shadcn Sheet on small screens. Reuse and adapt shadcn/ui components and open-source blocks where they fit; use Lucide icons for interface cues.
- Respect reduced motion. Videos have native controls, no autoplay, and useful poster frames where possible.

## Components and content model
- Shared Header, Footer, SectionHeading, PageHero, ProjectCard, ProjectGallery, ServiceCard, ProcessSteps, FAQ, ContactCTA, and enquiry form.
- Keep editable content in typed data modules; define shared domain types in `src/types/index.ts`.
- Keep server components by default; use client components only for mobile navigation, project filters, and form interactions.
- Organize public media by `brand`, `completed`, `in-progress`, `samples`, `process/images`, and `process/videos`. Keep sensitive and unused originals under private project `assets/reference-only/` and document their reason in the manifest.

## Accessibility and metadata
Semantic landmarks, keyboard-visible focus, descriptive image alt text, captions for video context, labeled controls, form validation messages, sufficient contrast, and responsive layouts. Set page-specific metadata and canonical-safe titles/descriptions. Add Organization/LocalBusiness JSON-LD only with supplied facts; do not include the private WhatsApp number or unsupported attributes.

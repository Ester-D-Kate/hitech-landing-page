import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, Compass, HardHat, MapPin } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { ContactCTA } from "@/components/site/contact-cta"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"

export const metadata: Metadata = {
  title: "About HITECH",
  description: "Meet the team and approach behind HITECH Structure & Construction, serving Amritsar district and projects across Punjab.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About HITECH" title="Practical experience. Engineering perspective." description="We help people plan and build homes with a thoughtful approach to site context, structural considerations, and the work on site." image="/assets/in-progress/01-09-28.jpeg" imageAlt="Residential construction in progress" />
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <SectionHeading eyebrow="Our approach" title="The details matter before the first brick is laid." description="A good project begins with listening: to the people, the place, the brief, and the conditions already on site." />
          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            <p>HITECH Structure & Construction brings design, engineering, and execution into the same conversation. We work through the requirements and constraints with clients, then coordinate the next steps around the scope agreed for that project.</p>
            <p>Residential construction is at the centre of our work. We also support design and engineering, turnkey execution, renovation and retrofitting, and consultancy for people considering a site or property project.</p>
            <p>Our work is based in Amritsar, with projects across Amritsar district and Punjab considered according to scope and location.</p>
            <LinkButton href="/services" className="mt-2 h-11 rounded-full bg-forest px-5 text-sm text-white hover:bg-forest/90">Explore our services <ArrowRight aria-hidden="true" /></LinkButton>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Leadership" title="People who understand the work." description="Our leadership brings practical construction experience and structural engineering knowledge to the projects we take on." />
          <div className="mt-12 grid gap-0 border-y border-forest/15 md:grid-cols-2">
            <article className="border-b border-forest/15 py-8 md:border-b-0 md:border-r md:py-10 md:pr-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Founder & Principal</p>
              <h2 className="mt-4 font-serif text-3xl text-forest">Engineer Pradeep Kumar</h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">With more than 30 years of practical experience, Pradeep guides the company’s construction work and helps clients make grounded decisions as a project develops.</p>
              <div className="mt-7 flex items-center gap-3 text-sm text-ink/70"><HardHat aria-hidden="true" className="size-4 text-brass" /> Practical construction experience</div>
            </article>
            <article className="py-8 md:py-10 md:pl-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Managing & Technical Director</p>
              <h2 className="mt-4 font-serif text-3xl text-forest">Engineer Hemant</h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">Hemant is a Civil Engineer with an M.Tech in Structural Engineering and brings technical coordination and structural perspective to the company’s work.</p>
              <div className="mt-7 flex items-center gap-3 text-sm text-ink/70"><Compass aria-hidden="true" className="size-4 text-brass" /> Structural engineering perspective</div>
            </article>
          </div>
        </div>
      </section>
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden bg-forest/10">
            <Image src="/assets/completed/00-55-53-variant-1.jpeg" alt="A completed multi-level residence illuminated at night" fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" unoptimized />
          </div>
          <div>
            <SectionHeading eyebrow="Where we work" title="Rooted in Amritsar." description="We are based in Amritsar and work across Amritsar district. Projects elsewhere in Punjab are considered based on location and scope." />
            <div className="mt-7 flex items-center gap-3 text-sm font-medium text-forest"><MapPin aria-hidden="true" className="size-5 text-brass" /> Amritsar district · Punjab</div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}

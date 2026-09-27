import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, Check, ClipboardList, DraftingCompass, HardHat, PanelsTopLeft } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { FAQSection } from "@/components/site/faq-section"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { faqs } from "@/data/site"

export const metadata: Metadata = {
  title: "Turnkey Construction",
  description: "Learn how HITECH coordinates residential turnkey construction in Amritsar and Punjab, with project-specific scope and agreed inclusions.",
}

const scopeAreas = [
  { title: "Understand the brief", description: "Discuss the home, site, priorities, and the level of involvement that makes sense.", icon: ClipboardList },
  { title: "Coordinate design & structure", description: "Bring planning and structural considerations into the project conversation.", icon: DraftingCompass },
  { title: "Organise site execution", description: "Coordinate agreed work across the construction sequence and site trades.", icon: HardHat },
  { title: "Review finishes & close-out", description: "Where included in the scope, coordinate finishing and interior work toward handover.", icon: PanelsTopLeft },
]

export default function TurnkeyPage() {
  return (
    <>
      <PageHero eyebrow="Turnkey construction" title="One joined-up conversation from plan to finish." description="Turnkey work brings agreed stages together under a coordinated project scope. What is included depends on the site, brief, and decisions made for each home." image="/assets/in-progress/00-57-24.jpeg" imageAlt="Residential masonry and construction work in progress" />
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <SectionHeading eyebrow="A clear scope" title="Together, we define what the project needs." description="Turnkey does not mean every project follows the same checklist. The scope is shaped around the house, site, and agreement." />
            <LinkButton href="/contact" className="mt-8 h-11 rounded-full bg-forest px-5 text-sm text-white hover:bg-forest/90">Start a scope conversation <ArrowRight aria-hidden="true" /></LinkButton>
          </div>
          <div className="grid gap-0 border-t border-forest/15 sm:grid-cols-2">
            {scopeAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <article key={area.title} className="border-b border-forest/15 py-7 sm:odd:pr-8 sm:even:border-l sm:even:pl-8">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-sm text-brass">0{index + 1}</span>
                    <Icon aria-hidden="true" className="size-5 text-forest" strokeWidth={1.5} />
                  </div>
                  <h2 className="mt-7 font-serif text-2xl text-forest">{area.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{area.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden bg-forest/10">
            <Image src="/assets/process/images/01-06-59-variant-1.jpeg" alt="Roof terrace work at an active construction site" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" unoptimized />
          </div>
          <div>
            <SectionHeading eyebrow="Possible inclusions" title="Agree what is included, stage by stage." description="Depending on the project, a turnkey scope may include some combination of:" />
            <ul className="mt-7 space-y-3">
              {["Foundation and structural work", "Masonry and construction coordination", "MEP coordination", "Finishes and interiors where agreed"].map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-ink/75"><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-brass" />{item}</li>)}
            </ul>
            <p className="mt-6 border-l-2 border-brass pl-4 text-sm leading-6 text-muted-foreground">Final inclusions, responsibilities, and sequence should be confirmed together for each project.</p>
          </div>
        </div>
      </section>
      <FAQSection items={faqs.filter((item) => item.question === "What does turnkey construction include?" || item.question === "How do I get started?")} />
    </>
  )
}

import type { Metadata } from "next"
import { ArrowUpRight, BookOpenText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ContactCTA } from "@/components/site/contact-cta"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { insights } from "@/data/site"

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical starting points for planning a home, coordinating engineering, understanding construction stages, and preparing for renovation.",
}

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Insights" title="A few good questions to bring to your project." description="Short, practical starting points for conversations about your site, plans, construction sequence, or an existing home." image="/assets/process/images/01-06-58-variant-2.jpeg" imageAlt="Masonry and service routing at a residential project" />
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Project notes" title="Useful ideas before the work begins." description="These notes are a starting point for discussion, not a substitute for advice based on a specific site or building." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {insights.map((insight) => (
              <Card key={insight.id} className="rounded-2xl border-forest/10 bg-white shadow-none">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-brass">{insight.category}</span>
                    <BookOpenText aria-hidden="true" className="size-5 text-forest/45" strokeWidth={1.5} />
                  </div>
                  <h2 className="mt-5 font-serif text-2xl leading-tight text-forest">{insight.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{insight.summary}</p>
                  <ul className="mt-6 space-y-3 border-t border-forest/10 pt-5">
                    {insight.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-ink/75"><ArrowUpRight aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-brass" />{point}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}

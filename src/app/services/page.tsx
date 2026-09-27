import type { Metadata } from "next"
import { ArrowRight, Check } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { ContactCTA } from "@/components/site/contact-cta"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { ServiceCard } from "@/components/site/service-card"
import { services } from "@/data/site"

export const metadata: Metadata = {
  title: "Services",
  description: "Residential construction, design and engineering, turnkey execution, renovation, and consultancy from HITECH in Amritsar and Punjab.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our services" title="The right support for each stage of your project." description="Explore the capabilities we bring to residential projects, from early planning and engineering through construction and finishing." image="/assets/process/images/01-06-57.jpeg" imageAlt="A room shell during construction" />
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Five connected capabilities" title="A coordinated team for the work ahead." description="Some clients need support with one part of a project. Others want joined-up coordination across several stages. We begin by understanding the brief." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => <ServiceCard key={service.number} service={service} />)}
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Finding the right fit" title="Start with what is happening on your site." description="The first conversation can be simple. We’ll understand where you are and what kind of support may fit." />
          <div className="border-t border-forest/15">
            {[
              "A new residential build or a construction partner",
              "Design and structural engineering coordination",
              "Several stages coordinated through a turnkey scope",
              "Renovation, repair, or retrofitting of an existing home",
              "Early guidance on a property or development question",
            ].map((item) => <div key={item} className="flex gap-4 border-b border-forest/15 py-5 text-sm leading-6 text-ink/75"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brass" />{item}</div>)}
            <LinkButton href="/contact" className="mt-7 h-11 rounded-full bg-forest px-5 text-sm text-white hover:bg-forest/90">Tell us about your project <ArrowRight aria-hidden="true" /></LinkButton>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}

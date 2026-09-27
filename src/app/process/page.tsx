import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { ContactCTA } from "@/components/site/contact-cta"
import { ProcessSteps } from "@/components/site/process-steps"
import { ProjectCard } from "@/components/site/project-card"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { processSteps } from "@/data/site"
import { projectMedia } from "@/data/projects"

export const metadata: Metadata = {
  title: "Our Process",
  description: "See how HITECH approaches residential projects from the first conversation through planning, construction, review, and handover.",
}

export default function ProcessPage() {
  const processVideos = projectMedia.filter((item) => item.category === "process-video").slice(0, 3)

  return (
    <>
      <PageHero eyebrow="Our process" title="A useful next step at every stage." description="A clear sequence helps clients understand what is happening and what decisions may be needed next. The path and timing depend on the project." image="/assets/process/images/01-06-56.jpeg" imageAlt="Exterior plaster work at a residential site" />
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl"><SectionHeading eyebrow="The project path" title="Start with the context. Move forward with clarity." description="We work through the details together, adapting the conversation to the site, brief, and scope." /></div>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="On-site process" title="Construction work in motion." description="These supplied videos show selected activities from active projects. Each clip is available with native playback controls." />
            <LinkButton href="/projects" variant="outline" className="h-11 w-fit rounded-full border-forest/20 bg-transparent px-5 text-forest hover:bg-cream">Browse all media <ArrowRight aria-hidden="true" /></LinkButton>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {processVideos.map((item, index) => <ProjectCard key={item.id} item={item} revealDelay={index + 1} />)}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}

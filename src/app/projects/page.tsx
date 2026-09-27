import type { Metadata } from "next"
import { ContactCTA } from "@/components/site/contact-cta"
import { PageHero } from "@/components/site/page-hero"
import { ProjectGallery } from "@/components/site/project-gallery"
import { SectionHeading } from "@/components/site/section-heading"
import { projectMedia } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects & Work",
  description: "Browse supplied HITECH Structure & Construction project photographs, active work, process demonstrations, and a clearly labelled concept sample.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Projects & process" title="The work, at different stages." description="Explore supplied project photographs and process footage. We label work according to the information available and keep concept imagery clearly identified." image="/assets/completed/00-55-53-variant-1.jpeg" imageAlt="A completed multi-level residence illuminated at night" />
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <SectionHeading eyebrow="Project library" title="Photos and videos from the work." description={"Browse all " + projectMedia.length + " public media items. Select a category to filter them; each item carries a status or context label."} />
            <p className="border-l-2 border-brass pl-4 text-sm leading-6 text-muted-foreground">One supplied kitchen image is a generated concept sample. It is shown for illustration only and is not represented as completed work.</p>
          </div>
          <ProjectGallery items={projectMedia} />
        </div>
      </section>
      <ContactCTA />
    </>
  )
}

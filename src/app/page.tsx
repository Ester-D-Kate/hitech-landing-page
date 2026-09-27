import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, ArrowRight, MoveUpRight } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { ContactCTA } from "@/components/site/contact-cta"
import { FAQSection } from "@/components/site/faq-section"
import { ProcessSteps } from "@/components/site/process-steps"
import { ProjectCard } from "@/components/site/project-card"
import { SectionHeading } from "@/components/site/section-heading"
import { ServiceCard } from "@/components/site/service-card"
import { faqs, processSteps, services } from "@/data/site"
import { featuredProjects, projectMedia } from "@/data/projects"

export default function HomePage() {
  const completedProjects = projectMedia.filter((item) => item.category === "completed").slice(0, 3)

  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/completed/00-55-53-variant-1.jpeg"
            alt="A completed multi-level residence illuminated at night"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/30" />
        </div>
        <div className="mx-auto grid min-h-[620px] max-w-[1440px] items-end gap-14 px-6 pb-16 pt-20 sm:px-10 sm:pb-20 lg:grid-cols-[1fr_0.55fr] lg:items-center lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-brass-light">Amritsar · Residential construction</p>
            <h1 className="font-serif text-5xl leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-[82px]">Built with care.<br /><span className="text-brass-light">Grounded in engineering.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">From the first site conversation to the final finish, HITECH brings thoughtful planning and experienced construction oversight to homes across Amritsar and Punjab.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/contact" className="h-12 rounded-full bg-brass px-6 text-sm font-semibold text-forest hover:bg-brass-light">Discuss your project <ArrowRight aria-hidden="true" /></LinkButton>
              <LinkButton href="/projects" variant="outline" className="h-12 rounded-full border-white/30 bg-transparent px-6 text-sm text-white hover:bg-white/10 hover:text-white">Explore our work <MoveUpRight aria-hidden="true" /></LinkButton>
            </div>
            <p className="mt-9 text-xs font-medium uppercase tracking-[0.17em] text-white/55">Building Trust Brick by Brick.</p>
          </div>
          <div className="hidden self-end lg:block">
            <div className="ml-auto max-w-[300px] border-l border-brass-light/50 pl-6">
              <span className="font-serif text-4xl text-brass-light">30+</span>
              <p className="mt-2 text-sm leading-6 text-white/70">Years of practical experience from founder Engineer Pradeep Kumar.</p>
              <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brass-light">Meet the team <ArrowDownRight aria-hidden="true" className="size-4" /></Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden h-20 w-1/3 border-l border-t border-white/10 bg-white/[0.03] lg:block" />
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
            <SectionHeading eyebrow="What we do" title="A considered approach to building a home." />
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">Good construction connects the brief, the structure, the site, and the people carrying out the work. We bring these parts together through five connected capabilities.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => <ServiceCard key={service.number} service={service} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#eeeee6] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading eyebrow="Residential construction" title="A home takes shape one clear decision at a time." description="We coordinate the work around your brief and the realities of the site, with practical conversations at each stage." />
            <ul className="mt-8 space-y-4 border-t border-forest/15 pt-6 text-sm text-ink/75">
              <li className="flex gap-3"><span className="text-brass">01</span> A scope shaped around the project</li>
              <li className="flex gap-3"><span className="text-brass">02</span> Engineering and execution considered together</li>
              <li className="flex gap-3"><span className="text-brass">03</span> Agreed stages and decisions made visible</li>
            </ul>
            <LinkButton href="/turnkey-construction" variant="outline" className="mt-8 h-11 rounded-full border-forest/20 bg-transparent px-5 text-forest hover:bg-white">How turnkey works <ArrowRight aria-hidden="true" /></LinkButton>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-sm bg-forest/10 sm:min-h-[520px]">
            <Image src="/assets/completed/00-55-53-variant-1.jpeg" alt="A completed multi-level residence illuminated at night" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" unoptimized />
            <div className="absolute bottom-0 left-0 max-w-xs bg-forest px-6 py-5 text-white sm:px-8 sm:py-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brass-light">Our point of view</p>
              <p className="mt-2 font-serif text-2xl leading-tight">Engineered to build.<br />Built to last.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Selected work" title="A closer look at the work." description="A selection of supplied project photographs. Status labels reflect the information available for each image." />
            <Link href="/projects" className="inline-flex shrink-0 items-center gap-2 pb-1 text-sm font-semibold text-forest hover:text-brass">Browse all {projectMedia.length} photos and videos <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {completedProjects.map((item) => <ProjectCard key={item.id} item={item} />)}
          </div>
          {completedProjects.length === 0 ? <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{featuredProjects.slice(0, 3).map((item) => <ProjectCard key={item.id} item={item} />)}</div> : null}
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="How we work" title="Clear stages, shaped around the project." description="Every brief and site is different. The conversation moves through practical steps, with scope and decisions agreed along the way." />
            <Link href="/process" className="inline-flex items-center gap-2 pb-1 text-sm font-semibold text-forest hover:text-brass">See our process <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-24">
          <div className="relative aspect-[4/5] max-h-[560px] overflow-hidden bg-forest/10">
            <Image src="/assets/in-progress/01-09-28.jpeg" alt="Residential construction underway, showing masonry and structural work" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" unoptimized />
            <span className="absolute bottom-4 left-4 bg-cream/95 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-forest">Building in progress</span>
          </div>
          <div>
            <SectionHeading eyebrow="People behind the work" title="Experience on site. Care in the details." description="HITECH is led by professionals who bring practical construction knowledge and engineering perspective to each conversation." />
            <div className="mt-9 grid gap-7 border-t border-forest/15 pt-7 sm:grid-cols-2">
              <div>
                <p className="font-serif text-2xl text-forest">Engineer Pradeep Kumar</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-brass">Founder & Principal</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">More than 30 years of practical experience in construction, guiding projects from early discussions through on-site work.</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-forest">Engineer Hemant</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-brass">Managing & Technical Director</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">A Civil Engineer with an M.Tech in Structural Engineering, bringing technical coordination into the project conversation.</p>
              </div>
            </div>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-brass">More about HITECH <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
        </div>
      </section>

      <FAQSection items={faqs.slice(0, 3)} />
      <ContactCTA />
    </>
  )
}

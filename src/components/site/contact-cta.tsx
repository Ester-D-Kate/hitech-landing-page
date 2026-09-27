import { ArrowRight } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"

export function ContactCTA() {
  return (
    <section className="relative isolate overflow-hidden border-t border-brass-light/25 bg-forest px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(ellipse_at_80%_50%,rgba(227,198,110,0.14),transparent_65%)]" />
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div data-reveal="up" className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">Your project, thoughtfully planned</p>
          <h2 className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Let’s begin with a clear conversation.</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">Share where you are in the process and what you hope to build. We’ll take it from there.</p>
        </div>
        <LinkButton href="/contact" variant="gold" className="h-12 shrink-0 rounded-full px-6 text-sm font-semibold">
          Discuss your project <ArrowRight aria-hidden="true" />
        </LinkButton>
      </div>
    </section>
  )
}

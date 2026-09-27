import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactCTA() {
  return (
    <section className="bg-forest px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">Your project, thoughtfully planned</p>
          <h2 className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Let’s begin with a clear conversation.</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">Share where you are in the process and what you hope to build. We’ll take it from there.</p>
        </div>
        <Button render={<Link href="/contact" />} className="h-12 shrink-0 rounded-full bg-brass px-6 text-sm text-forest hover:bg-brass-light">
          Discuss your project <ArrowRight aria-hidden="true" />
        </Button>
      </div>
    </section>
  )
}

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { ServiceCardProps } from "@/types"

export function ServiceCard({ service, revealDelay }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <Card data-reveal="up" data-reveal-delay={revealDelay ? String(revealDelay) : undefined} className="card-float group h-full rounded-2xl border-forest/10 bg-white shadow-[0_8px_24px_rgba(20,57,43,0.04)] hover:border-brass/40 hover:bg-cream/70">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-5">
        <span className="font-serif text-sm text-brass">{service.number}</span>
        <span className="flex size-12 items-center justify-center rounded-full bg-sage/70 text-forest transition-all duration-300 group-hover:rotate-[-5deg] group-hover:bg-forest group-hover:text-brass-light">
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </span>
      </CardHeader>
      <CardContent>
        <h3 className="font-serif text-2xl leading-tight tracking-[-0.02em] text-ink">{service.title}</h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">{service.description}</p>
        <ul className="mt-5 space-y-2 border-t border-forest/10 pt-5">
          {service.details.map((detail) => (
            <li key={detail} className="text-sm text-ink/75">{detail}</li>
          ))}
        </ul>
        <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-brass">
          Explore services <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

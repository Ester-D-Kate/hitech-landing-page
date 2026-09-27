import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { ServiceCardProps } from "@/types"

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <Card className="group h-full rounded-2xl border-forest/10 bg-white shadow-none transition-colors hover:border-brass/50 hover:bg-cream/50">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-5">
        <span className="font-serif text-sm text-brass">{service.number}</span>
        <span className="flex size-11 items-center justify-center rounded-full bg-forest/5 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
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

import { ArrowDown } from "lucide-react"
import type { ProcessStepsProps } from "@/types"

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid gap-5 md:grid-cols-5">
      {steps.map((step, index) => (
        <li key={step.number} className="relative border-t border-forest/20 pt-5">
          <div className="flex items-center justify-between">
            <span className="font-serif text-sm text-brass">{step.number}</span>
            {index < steps.length - 1 ? <ArrowDown aria-hidden="true" className="size-4 -rotate-90 text-forest/35" /> : null}
          </div>
          <h3 className="mt-5 font-serif text-xl leading-tight text-ink">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
        </li>
      ))}
    </ol>
  )
}

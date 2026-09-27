import type { SectionHeadingProps } from "@/types"

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  const alignment = centered ? "mx-auto text-center" : ""

  return (
    <div data-reveal="up" className={"max-w-2xl " + alignment}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brass">{eyebrow}</p>
      <h2 className="font-serif text-3xl leading-tight tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  )
}

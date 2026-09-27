import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionHeading } from "@/components/site/section-heading"
import type { FAQSectionProps } from "@/types"

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <section className="bg-cream px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading eyebrow="Good to know" title="A few useful answers before we talk." description="Every project has its own context. These are the basics people often want to know first." />
        <Accordion className="divide-y divide-forest/10" multiple>
          {items.map((item) => (
            <AccordionItem key={item.question} value={item.question} className="border-forest/10 py-2">
              <AccordionTrigger className="py-5 text-base text-ink hover:no-underline">{item.question}</AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-5 text-sm leading-7 text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

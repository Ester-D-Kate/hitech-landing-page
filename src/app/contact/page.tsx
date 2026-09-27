import type { Metadata } from "next"
import { ArrowUpRight, Mail, MapPin } from "lucide-react"
import { WhatsAppForm } from "@/components/site/whatsapp-form"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { businessEmail, generalWhatsAppUrl } from "@/lib/contact"

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell HITECH about your residential construction, design, renovation, or consultancy project in Amritsar or Punjab.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact HITECH" title="Tell us what you have in mind." description="Share a few details about your site, location, and where you are in the process. We’ll take it from there." image="/assets/completed/00-55-53-variant-1.jpeg" imageAlt="A completed multi-level residence illuminated at night" />
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <aside>
            <SectionHeading eyebrow="Start a conversation" title="A few details help us understand the brief." description="Use the form to prepare a WhatsApp message, or contact HITECH by email." />
            <div className="mt-9 space-y-5 border-t border-forest/15 pt-6">
              <a href={"mailto:" + businessEmail} className="flex items-start gap-3 text-sm text-ink/75 hover:text-forest"><Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brass" /><span><span className="block font-semibold text-forest">Email</span><span className="mt-1 block">{businessEmail}</span></span></a>
              <div className="flex items-start gap-3 text-sm text-ink/75"><MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brass" /><span><span className="block font-semibold text-forest">Service area</span><span className="mt-1 block">Amritsar district and projects across Punjab</span></span></div>
              <a href={generalWhatsAppUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-brass">Open WhatsApp <ArrowUpRight aria-hidden="true" className="size-4" /></a>
            </div>
          </aside>
          <div>
            <WhatsAppForm />
          </div>
        </div>
      </section>
    </>
  )
}

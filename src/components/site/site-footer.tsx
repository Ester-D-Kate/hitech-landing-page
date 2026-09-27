import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"
import { BrandLogo } from "@/components/site/brand-logo"
import { businessEmail, generalWhatsAppUrl } from "@/lib/contact"
import { navigationItems } from "@/data/site"

export function SiteFooter() {
  return (
    <footer className="bg-forest px-6 py-14 text-white sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="HITECH home">
            <BrandLogo variant="footer" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">Building Trust Brick by Brick. Engineering-led construction for homes across Amritsar and Punjab.</p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-light">Explore</h2>
          <nav aria-label="Footer navigation" className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">{item.label}</Link>
            ))}
          </nav>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-light">Start a conversation</h2>
          <a href={"mailto:" + businessEmail} className="mt-5 inline-flex min-w-0 max-w-full items-center gap-2 text-sm text-white/75 hover:text-white">
            <Mail aria-hidden="true" className="size-4" /> {businessEmail}
          </a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">Based in Amritsar, working across Amritsar district and Punjab.</p>
          <a href={generalWhatsAppUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brass-light hover:text-white">
            Continue in WhatsApp <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-white/15 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} HITECH Structure & Construction</span>
        <span>Building Trust Brick by Brick.</span>
      </div>
    </footer>
  )
}

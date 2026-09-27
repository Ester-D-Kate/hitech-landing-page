"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button"
import { BrandLogo } from "@/components/site/brand-logo"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { navigationItems } from "@/data/site"

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/90 shadow-[0_8px_28px_rgba(20,57,43,0.06)] backdrop-blur-xl transition-colors duration-300 supports-[backdrop-filter]:bg-cream/85">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8 lg:px-12">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="HITECH Structure & Construction home">
          <BrandLogo variant="header" />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "relative py-3 text-xs font-semibold text-forest after:absolute after:inset-x-0 after:bottom-1 after:h-px after:scale-x-100 after:bg-brass after:content-['']" : "group relative py-3 text-xs font-medium text-ink/65 transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-brass after:transition-transform after:duration-300 after:content-[''] hover:text-forest hover:after:scale-x-100"}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden xl:block">
          <LinkButton href="/contact" className="h-10 rounded-full bg-forest px-5 text-xs text-white hover:bg-forest/90">
            Discuss a project <ArrowUpRight aria-hidden="true" />
          </LinkButton>
        </div>

        <div className="xl:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={(open) => setMobileMenuOpen(open)}>
            <SheetTrigger render={<Button type="button" variant="outline" size="icon" aria-label="Open navigation menu" className="rounded-full border-forest/15 bg-white" />}>
              <Menu aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm border-forest/10 bg-cream p-0 text-ink shadow-2xl shadow-forest/20">
              <SheetHeader className="border-b border-forest/10 px-6 py-6 text-left">
                <SheetTitle className="font-serif text-xl text-forest">HITECH</SheetTitle>
                <SheetDescription>Structure & Construction</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-4">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className={isActive ? "border-b border-forest/10 py-4 text-sm font-semibold text-forest" : "border-b border-forest/10 py-4 text-sm text-ink/75 transition-colors duration-200 hover:pl-2 hover:text-forest"}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
              <div className="mt-auto border-t border-forest/10 p-6">
                <p className="mb-4 text-xs leading-5 text-muted-foreground">Start with a clear conversation about your site, plans, and next step.</p>
                <LinkButton href="/contact" onClick={() => setMobileMenuOpen(false)} className="h-12 w-full rounded-full bg-forest px-5 text-sm text-white hover:bg-forest/90">
                  Discuss a project <ArrowUpRight aria-hidden="true" />
                </LinkButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

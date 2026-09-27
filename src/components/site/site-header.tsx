"use client"

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

  return (
    <header className="relative z-20 border-b border-forest/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8 lg:px-12">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="HITECH Structure & Construction home">
          <BrandLogo variant="header" />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "text-xs font-semibold text-forest" : "text-xs font-medium text-ink/65 transition-colors hover:text-forest"}
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
          <Sheet>
            <SheetTrigger render={<Button type="button" variant="outline" size="icon" aria-label="Open navigation menu" className="rounded-full border-forest/15 bg-white" />}>
              <Menu aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm border-forest/10 bg-cream p-0 text-ink">
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
                      className={isActive ? "border-b border-forest/10 py-4 text-sm font-semibold text-forest" : "border-b border-forest/10 py-4 text-sm text-ink/75"}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

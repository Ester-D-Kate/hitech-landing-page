import type { Metadata } from "next"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import type { SiteLayoutProps } from "@/types"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "HITECH Structure & Construction | Amritsar",
    template: "%s | HITECH Structure & Construction",
  },
  description:
    "Engineering-led residential construction, design, renovation, and turnkey execution in Amritsar and across Punjab.",
  openGraph: {
    title: "HITECH Structure & Construction",
    description: "Building Trust Brick by Brick. Engineering-led construction for homes across Amritsar and Punjab.",
    type: "website",
  },
  icons: {
    icon: "/assets/brand/00-44-50.jpeg",
    apple: "/assets/brand/00-44-50.jpeg",
  },
}

export default function RootLayout({ children }: SiteLayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HITECH Structure & Construction",
    description:
      "Residential construction, design and engineering, turnkey execution, renovation, and project consultancy.",
    email: "hitechstructure.co@gmail.com",
    areaServed: ["Amritsar district", "Punjab, India"],
  }

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

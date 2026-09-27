import type { AnchorHTMLAttributes } from "react"

import type { LucideIcon } from "lucide-react"

export type NavigationItem = {
  label: string
  href: string
}

export type Service = {
  number: string
  title: string
  description: string
  details: string[]
  icon: LucideIcon
}

export type ProcessStep = {
  number: string
  title: string
  description: string
}

export type FAQItem = {
  question: string
  answer: string
}

export type InsightItem = {
  id: string
  category: string
  title: string
  summary: string
  points: string[]
}

export type MediaCategory = "completed" | "in-progress" | "sample" | "process-image" | "process-video"
export type GalleryFilter = "all" | MediaCategory
export type MediaKind = "image" | "video"

export type AssetManifestEntry = {
  id: string
  fileName: string
  category: "brand" | "completed" | "in-progress" | "sample" | "process-image" | "process-video" | "reference-only"
  mediaKind: MediaKind
  caption: string
  alt: string
  sourcePath: string
  publicPath: string | null
  posterPath: string | null
  featured: boolean
  public: boolean
  reviewNote: string | null
}

export type ProjectMedia = {
  id: string
  title: string
  description: string
  category: MediaCategory
  kind: MediaKind
  src: string
  alt: string
  poster?: string
  featured: boolean
}

export type ProjectCardProps = {
  item: ProjectMedia
  revealDelay?: number
}

export type ProjectLightboxProps = {
  item: ProjectMedia
}

export type ServiceCardProps = {
  service: Service
  revealDelay?: number
}

export type ProcessStepsProps = {
  steps: ProcessStep[]
}

export type FAQSectionProps = {
  items: FAQItem[]
}

export type ProjectGalleryProps = {
  items: ProjectMedia[]
}

export type GalleryFilterOption = {
  value: GalleryFilter
  label: string
}

export type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}

export type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  image?: string
  imageAlt?: string
}

export type SiteLayoutProps = {
  children: React.ReactNode
}

export type BrandLogoProps = {
  variant: "header" | "footer"
}

export type ButtonVariant = "default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | "gold"
export type ButtonSize = "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"

export type LinkButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
}

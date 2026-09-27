import Image from "next/image"
import type { PageHeroProps } from "@/types"

export function PageHero({ eyebrow, title, description, image, imageAlt = "" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-forest/10 bg-forest px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      {image ? (
        <Image src={image} alt={imageAlt} fill sizes="100vw" priority unoptimized className="object-cover opacity-20" />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/95 to-forest/65" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">{eyebrow}</p>
        <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">{description}</p>
      </div>
    </section>
  )
}

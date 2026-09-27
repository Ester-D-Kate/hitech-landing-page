"use client"

import Image from "next/image"
import { Dialog } from "@base-ui/react/dialog"
import { ArrowUpRight, Expand, X } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { mediaCategoryLabels } from "@/data/media"
import type { ProjectLightboxProps } from "@/types"

export function ProjectLightbox({ item }: ProjectLightboxProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        aria-label={`View details for ${item.title}`}
        className="absolute right-3 top-3 z-10 inline-flex h-10 items-center gap-2 rounded-full border border-white/25 bg-forest/80 px-4 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-light"
      >
        <Expand aria-hidden="true" className="size-3.5" />
        View details
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-forest-deep/80 opacity-100 backdrop-blur-md transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 grid max-h-[88dvh] w-[calc(100vw-2rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-white/35 bg-cream opacity-100 shadow-[0_36px_100px_rgba(5,25,17,0.45)] transition-[opacity,transform] duration-300 data-ending-style:scale-[0.97] data-ending-style:opacity-0 data-starting-style:scale-[0.97] data-starting-style:opacity-0 md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-64 overflow-hidden bg-forest md:min-h-[540px]">
            {item.kind === "video" ? (
              <video
                className="absolute inset-0 size-full object-cover"
                controls
                autoPlay
                playsInline
                preload="metadata"
                poster={item.poster}
                aria-label={item.title}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video element.
              </video>
            ) : (
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" unoptimized />
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-forest/40 to-transparent" />
          </div>

          <div className="relative flex flex-col justify-between p-6 sm:p-9 md:p-10">
            <Dialog.Close aria-label="Close project details" className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-forest/10 bg-white/80 text-forest transition hover:rotate-90 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass">
              <X aria-hidden="true" className="size-4" />
            </Dialog.Close>

            <div className="pt-8 md:pt-12">
              <p className="mb-5 inline-flex rounded-full border border-brass/20 bg-brass/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-brass">
                {mediaCategoryLabels[item.category]}
              </p>
              <Dialog.Title className="max-w-sm font-serif text-3xl leading-tight tracking-[-0.03em] text-forest sm:text-4xl">
                {item.title}
              </Dialog.Title>
              <Dialog.Description className="mt-5 text-sm leading-7 text-muted-foreground">
                {item.description}
              </Dialog.Description>
              <div className="mt-8 border-t border-forest/10 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-brass">Thoughtful work, from first plan to finish</p>
                <p className="mt-3 text-sm leading-6 text-ink/70">Tell us what you are planning and we can help shape the next step around your site and brief.</p>
              </div>
            </div>

            <LinkButton href="/contact" className="mt-8 h-12 justify-between rounded-full bg-forest px-5 text-sm text-white hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-lg">
              Discuss a similar project <ArrowUpRight aria-hidden="true" />
            </LinkButton>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

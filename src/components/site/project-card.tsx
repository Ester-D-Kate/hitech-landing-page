import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectLightbox } from "@/components/site/project-lightbox"
import { mediaCategoryLabels } from "@/data/media"
import type { ProjectCardProps } from "@/types"

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <Card data-reveal="up" className="card-float group overflow-hidden rounded-2xl border-forest/10 bg-white shadow-[0_8px_24px_rgba(20,57,43,0.04)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-forest/5">
        {item.kind === "video" ? (
          <video
            className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            controls
            playsInline
            preload="none"
            poster={item.poster}
            aria-label={item.title}
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        ) : (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            unoptimized
          />
        )}
        <ProjectLightbox item={item} />
      </div>
      <CardContent className="p-5">
        <Badge variant="secondary" className="rounded-full bg-sage/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-forest">
          {mediaCategoryLabels[item.category]}
        </Badge>
        <h3 className="mt-4 font-serif text-xl leading-snug text-ink">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  )
}

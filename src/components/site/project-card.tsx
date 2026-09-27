import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { ProjectCardProps } from "@/types"

const categoryLabels = {
  completed: "Completed work",
  "in-progress": "In progress",
  sample: "Concept sample",
  "process-image": "Process image",
  "process-video": "Demonstration video",
}

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl border-forest/10 bg-white shadow-none">
      <div className="relative aspect-[4/3] overflow-hidden bg-forest/5">
        {item.kind === "video" ? (
          <video
            className="size-full object-cover"
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
            className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            unoptimized
          />
        )}
      </div>
      <CardContent className="p-5">
        <Badge variant="secondary" className="rounded-full bg-sage/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-forest">
          {categoryLabels[item.category]}
        </Badge>
        <h3 className="mt-4 font-serif text-xl leading-snug text-ink">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  )
}

import assetManifest from "../../assets/manifest.json"
import type { AssetManifestEntry, MediaCategory, ProjectMedia } from "@/types"

const entries = assetManifest as AssetManifestEntry[]

function getMediaCategory(entry: AssetManifestEntry): MediaCategory | null {
  switch (entry.category) {
    case "completed":
      return "completed"
    case "in-progress":
      return "in-progress"
    case "sample":
      return "sample"
    case "process-image":
      return "process-image"
    case "process-video":
      return "process-video"
    default:
      return null
  }
}

export const projectMedia: ProjectMedia[] = []

for (const entry of entries) {
  if (!entry.publicPath || entry.category === "brand") continue
  const category = getMediaCategory(entry)
  if (!category) continue

  const title = entry.category === "sample" ? "Kitchen concept sample" : entry.caption
  const description = entry.category === "sample"
    ? "Illustrative generated concept supplied as a sample. This image is not presented as completed work."
    : entry.caption

  projectMedia.push({
    id: entry.id,
    title,
    description,
    category,
    kind: entry.mediaKind,
    src: entry.publicPath,
    alt: entry.alt,
    ...(entry.posterPath ? { poster: entry.posterPath } : {}),
    featured: entry.featured,
  })
}

export const featuredProjects = projectMedia.filter((item) => item.featured).slice(0, 8)

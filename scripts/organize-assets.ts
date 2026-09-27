import { copyFile, mkdir, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import type { AssetManifestEntry } from "../src/types"

const rootDirectory = process.cwd()
const sourceRoot = path.join(rootDirectory, "assets", "source")

async function listSourceFiles(directory: string): Promise<string[]> {
  const files: string[] = []
  const children = await readdir(directory, { withFileTypes: true })

  for (const child of children) {
    const childPath = path.join(directory, child.name)
    if (child.isDirectory()) {
      files.push(...await listSourceFiles(childPath))
    } else if (child.isFile()) {
      files.push(childPath)
    }
  }

  return files
}

const sourcePaths = await listSourceFiles(sourceRoot)
const sourceByName = new Map(sourcePaths.map((sourcePath) => [path.basename(sourcePath), sourcePath]))
const names = [...sourceByName.keys()].filter((name) =>
  /^(WhatsApp Image|WhatsApp Video) 2026-09-27/.test(name),
).sort()

const brandFiles = new Set([
  "WhatsApp Image 2026-09-27 at 00.44.49.jpeg",
  "WhatsApp Image 2026-09-27 at 00.44.50.jpeg",
  "WhatsApp Image 2026-09-27 at 00.44.50 (1).jpeg",
])
const completedFiles = new Set([
  "WhatsApp Image 2026-09-27 at 00.55.53 (1).jpeg",
  "WhatsApp Image 2026-09-27 at 00.55.53.jpeg",
  "WhatsApp Image 2026-09-27 at 00.55.54.jpeg",
  "WhatsApp Image 2026-09-27 at 01.03.47.jpeg",
  "WhatsApp Image 2026-09-27 at 01.03.52.jpeg",
])
const privateFiles = new Set([
  "WhatsApp Image 2026-09-27 at 00.44.49 (1).jpeg",
  "WhatsApp Image 2026-09-27 at 00.55.54 (1).jpeg",
  "WhatsApp Image 2026-09-27 at 00.55.55.jpeg",
])
const processImageFiles = new Set([
  "WhatsApp Image 2026-09-27 at 01.03.48.jpeg",
  "WhatsApp Image 2026-09-27 at 01.06.53.jpeg",
  "WhatsApp Image 2026-09-27 at 01.06.56.jpeg",
  "WhatsApp Image 2026-09-27 at 01.06.57.jpeg",
  "WhatsApp Image 2026-09-27 at 01.06.58 (1).jpeg",
  "WhatsApp Image 2026-09-27 at 01.06.59 (1).jpeg",
  "WhatsApp Image 2026-09-27 at 01.07.00 (2).jpeg",
  "WhatsApp Image 2026-09-27 at 01.09.38.jpeg",
  "WhatsApp Image 2026-09-27 at 01.09.38 (1).jpeg",
  "WhatsApp Image 2026-09-27 at 01.09.39.jpeg",
  "WhatsApp Image 2026-09-27 at 01.16.58.jpeg",
])
const sampleFile = "WhatsApp Image 2026-09-27 at 01.03.45.jpeg"
const videoCaptions = new Map<string, string>([
  ["WhatsApp Video 2026-09-27 at 00.49.23.mp4", "Exterior plastering and façade work"],
  ["WhatsApp Video 2026-09-27 at 00.49.28.mp4", "Plaster finishing beneath a staircase"],
  ["WhatsApp Video 2026-09-27 at 00.51.01.mp4", "Interior plaster finishing"],
  ["WhatsApp Video 2026-09-27 at 00.51.02.mp4", "Wall plastering on site"],
  ["WhatsApp Video 2026-09-27 at 00.51.03.mp4", "Interior wall cladding and finish work"],
  ["WhatsApp Video 2026-09-27 at 00.51.04 (1).mp4", "Concrete placement on a roof slab"],
  ["WhatsApp Video 2026-09-27 at 00.51.04 (2).mp4", "Slab reinforcement and formwork detail"],
  ["WhatsApp Video 2026-09-27 at 00.51.04.mp4", "Brick masonry during construction"],
  ["WhatsApp Video 2026-09-27 at 00.51.05.mp4", "Roof slab reinforcement before concrete"],
  ["WhatsApp Video 2026-09-27 at 01.09.37.mp4", "Mixing mortar for masonry work"],
])
const imageCaptions = new Map<string, string>([
  ["WhatsApp Image 2026-09-27 at 00.55.53 (1).jpeg", "Night view of a multi-level residence with exterior lighting"],
  ["WhatsApp Image 2026-09-27 at 00.55.53.jpeg", "Garden seating beside a residential building"],
  ["WhatsApp Image 2026-09-27 at 00.55.54.jpeg", "Finished ceiling detail in a residential bathroom"],
  ["WhatsApp Image 2026-09-27 at 01.03.47.jpeg", "Bathroom vanity and tiled shower finish"],
  ["WhatsApp Image 2026-09-27 at 01.03.52.jpeg", "Residential stair and foyer with final finishing items on site"],
  ["WhatsApp Image 2026-09-27 at 00.57.24.jpeg", "Brickwork and temporary staging on an upper storey"],
  ["WhatsApp Image 2026-09-27 at 00.57.25.jpeg", "Roof-level brickwork in progress"],
  ["WhatsApp Image 2026-09-27 at 00.57.25 (1).jpeg", "Part-built residential façade with exposed masonry"],
  ["WhatsApp Image 2026-09-27 at 00.57.26.jpeg", "Interior brick partitions and slab construction"],
  ["WhatsApp Image 2026-09-27 at 00.57.53.jpeg", "Upper-storey brickwork with temporary formwork"],
  ["WhatsApp Image 2026-09-27 at 00.57.54.jpeg", "Roof-level masonry and material staging"],
  ["WhatsApp Image 2026-09-27 at 00.57.54 (1).jpeg", "Aggregate stockpile and materials at a residential site"],
  ["WhatsApp Image 2026-09-27 at 00.55.54 (1).jpeg", "Duplicate bathroom ceiling photo kept in the source archive"],
  ["WhatsApp Image 2026-09-27 at 00.55.55.jpeg", "Gate photograph with a resident name; excluded from public pages"],
  ["WhatsApp Image 2026-09-27 at 01.00.14.jpeg", "Unfinished residential staircase and masonry"],
  ["WhatsApp Image 2026-09-27 at 01.00.14 (1).jpeg", "Interior wall moulding and electrical work in progress"],
  ["WhatsApp Image 2026-09-27 at 01.03.45.jpeg", "Generated kitchen sample concept, not a completed project"],
  ["WhatsApp Image 2026-09-27 at 01.03.48.jpeg", "Worker polishing a finished floor surface"],
  ["WhatsApp Image 2026-09-27 at 01.03.48 (1).jpeg", "Exterior finishing and scaffolding at a residence"],
  ["WhatsApp Image 2026-09-27 at 01.03.49.jpeg", "Front elevation under construction with scaffolding"],
  ["WhatsApp Image 2026-09-27 at 01.03.49 (1).jpeg", "Exterior façade finishing underway at night"],
  ["WhatsApp Image 2026-09-27 at 01.03.50.jpeg", "Interior wall renovation with exposed plumbing"],
  ["WhatsApp Image 2026-09-27 at 01.03.51.jpeg", "False ceiling installation before final fixtures"],
  ["WhatsApp Image 2026-09-27 at 01.06.53.jpeg", "Plaster work beneath a concrete staircase"],
  ["WhatsApp Image 2026-09-27 at 01.06.56.jpeg", "Exterior plastering around a rooftop structure"],
  ["WhatsApp Image 2026-09-27 at 01.06.57.jpeg", "Mixing mortar for masonry work"],
  ["WhatsApp Image 2026-09-27 at 01.06.57 (1).jpeg", "Unfinished room with exposed masonry and concrete"],
  ["WhatsApp Image 2026-09-27 at 01.06.58.jpeg", "Interior brick partitions with service pipe routing"],
  ["WhatsApp Image 2026-09-27 at 01.06.58 (1).jpeg", "On-site plastering of a retaining wall"],
  ["WhatsApp Image 2026-09-27 at 01.06.58 (2).jpeg", "Exposed brick wall and rough-in plumbing"],
  ["WhatsApp Image 2026-09-27 at 01.06.59.jpeg", "Roof slab reinforcement mesh before concrete placement"],
  ["WhatsApp Image 2026-09-27 at 01.06.59 (1).jpeg", "Water ponding and brickwork on a roof terrace"],
  ["WhatsApp Image 2026-09-27 at 01.07.00.jpeg", "Interior masonry and concrete slab"],
  ["WhatsApp Image 2026-09-27 at 01.07.00 (1).jpeg", "Terrace parapet wall and wet surface in progress"],
  ["WhatsApp Image 2026-09-27 at 01.07.00 (2).jpeg", "Mason laying bricks at a residential site"],
  ["WhatsApp Image 2026-09-27 at 01.07.01.jpeg", "Part-rendered residential façade with unfinished masonry"],
  ["WhatsApp Image 2026-09-27 at 01.09.28.jpeg", "Multi-level brick residence during structural work"],
  ["WhatsApp Image 2026-09-27 at 01.09.28 (1).jpeg", "Exterior plaster and metal railing installation"],
  ["WhatsApp Image 2026-09-27 at 01.09.38.jpeg", "Bricklayer setting masonry at an upper storey"],
  ["WhatsApp Image 2026-09-27 at 01.09.38 (1).jpeg", "Mortar mixing and roof reinforcement in progress"],
  ["WhatsApp Image 2026-09-27 at 01.09.39.jpeg", "Concrete being lifted to an upper-level work area"],
  ["WhatsApp Image 2026-09-27 at 01.09.39 (1).jpeg", "Tall brick elevation with structural concrete bands"],
  ["WhatsApp Image 2026-09-27 at 01.16.58.jpeg", "Low brick walls taking shape at a residential site"],
])
const featuredInProgress = new Set([
  "WhatsApp Image 2026-09-27 at 00.57.25.jpeg",
  "WhatsApp Image 2026-09-27 at 01.06.59.jpeg",
  "WhatsApp Image 2026-09-27 at 01.09.28 (1).jpeg",
])
const videoOrder = [
  "WhatsApp Video 2026-09-27 at 00.49.23.mp4",
  "WhatsApp Video 2026-09-27 at 00.49.28.mp4",
  "WhatsApp Video 2026-09-27 at 00.51.01.mp4",
  "WhatsApp Video 2026-09-27 at 00.51.02.mp4",
  "WhatsApp Video 2026-09-27 at 00.51.03.mp4",
  "WhatsApp Video 2026-09-27 at 00.51.04 (1).mp4",
  "WhatsApp Video 2026-09-27 at 00.51.04 (2).mp4",
  "WhatsApp Video 2026-09-27 at 00.51.04.mp4",
  "WhatsApp Video 2026-09-27 at 00.51.05.mp4",
  "WhatsApp Video 2026-09-27 at 01.09.37.mp4",
]
const toSlug = (fileName: string) =>
  fileName
    .replace("WhatsApp Image 2026-09-27 at ", "")
    .replace("WhatsApp Video 2026-09-27 at ", "")
    .replace(" (1)", "-variant-1")
    .replace(" (2)", "-variant-2")
    .replaceAll(" ", "-")
    .replaceAll(".", "-")
    .replace(/-mp4$/, ".mp4")
    .replace(/-jpeg$/, ".jpeg")
    .toLowerCase()

const entries: AssetManifestEntry[] = []
for (const fileName of names) {
  const isVideo = fileName.endsWith(".mp4")
  let category: AssetManifestEntry["category"] = "in-progress"
  let caption = imageCaptions.get(fileName) ?? "Residential construction image; specific project status not confirmed."
  let publicPath: string | null = null
  let posterPath: string | null = null
  let featured = false
  let reviewNote: string | null = null
  let sourceFolder = "in-progress"

  if (brandFiles.has(fileName)) {
    category = "brand"
    sourceFolder = "brand"
    caption = "HITECH Structure & Construction logo asset"
    publicPath = "/assets/brand/" + toSlug(fileName)
  } else if (privateFiles.has(fileName)) {
    category = "reference-only"
    sourceFolder = "reference-only"
    if (fileName.includes("00.55.55")) {
      reviewNote = "Contains a resident name on the gate. Excluded from public pages."
    } else if (fileName.includes("00.55.54 (1)")) {
      reviewNote = "Duplicate of the selected bathroom ceiling photo. Archived but not displayed."
    } else {
      reviewNote = "Contains a visible personal phone number. Archived and not publicly served."
    }
    if (fileName.includes("00.44.49 (1)")) {
      caption = "Promotional banner containing a visible personal phone number"
    }
  } else if (fileName === sampleFile) {
    category = "sample"
    sourceFolder = "samples"
    caption = "Generated kitchen sample concept; not an actual completed project"
    publicPath = "/assets/samples/" + toSlug(fileName)
  } else if (isVideo) {
    category = "process-video"
    sourceFolder = "process/videos"
    caption = videoCaptions.get(fileName) ?? "Construction process demonstration"
    publicPath = "/assets/process/videos/" + toSlug(fileName)
    const videoIndex = videoOrder.indexOf(fileName) + 1
    posterPath = "/assets/process/posters/process-" + String(videoIndex).padStart(2, "0") + ".jpg"
  } else if (processImageFiles.has(fileName)) {
    category = "process-image"
    sourceFolder = "process/images"
    caption = imageCaptions.get(fileName) ?? "On-site construction process"
    publicPath = "/assets/process/images/" + toSlug(fileName)
  } else if (completedFiles.has(fileName)) {
    category = "completed"
    sourceFolder = "completed"
    publicPath = "/assets/completed/" + toSlug(fileName)
    featured = true
  } else {
    publicPath = "/assets/in-progress/" + toSlug(fileName)
    featured = featuredInProgress.has(fileName)
  }

  const entry: AssetManifestEntry = {
    id: toSlug(fileName).replace(/\.(jpeg|mp4)$/, ""),
    fileName,
    category,
    mediaKind: isVideo ? "video" : "image",
    caption,
    alt: caption,
    sourcePath: "assets/source/" + sourceFolder + "/" + fileName,
    publicPath,
    posterPath,
    featured,
    public: publicPath !== null,
    reviewNote,
  }
  entries.push(entry)

  const archivePath = path.join(rootDirectory, entry.sourcePath)
  const originalPath = sourceByName.get(fileName)
  if (!originalPath) {
    throw new Error("Missing archived source asset: " + fileName)
  }
  if (originalPath !== archivePath) {
    await mkdir(path.dirname(archivePath), { recursive: true })
    await copyFile(originalPath, archivePath)
  }

  if (publicPath) {
    const publicDestination = path.join(rootDirectory, "public", publicPath.slice(1))
    await mkdir(path.dirname(publicDestination), { recursive: true })
    await copyFile(originalPath, publicDestination)
  }
}

for (let index = 1; index <= 10; index += 1) {
  const posterSource = path.join(rootDirectory, "assets", "generated", "process-posters", "process-" + String(index).padStart(2, "0") + ".jpg")
  const destination = path.join(rootDirectory, "public", "assets", "process", "posters", "process-" + String(index).padStart(2, "0") + ".jpg")
  await mkdir(path.dirname(destination), { recursive: true })
  await copyFile(posterSource, destination)
}

await writeFile(
  path.join(rootDirectory, "assets", "manifest.json"),
  JSON.stringify(entries, null, 2) + "\n",
)
await writeFile(
  path.join(rootDirectory, "assets", "README.md"),
  [
    "# Asset library",
    "",
    "Every supplied WhatsApp image and video is preserved under assets/source/ in its classified folder. assets/manifest.json maps each original filename to its description, status category, public path, and review note.",
    "",
    "Only review-ready media is copied to public/assets/. The promotional banner with a visible phone number, the gate image with a resident name, and the duplicate bathroom photo stay in assets/source/reference-only/.",
    "",
    "The kitchen rendering is labeled as a generated sample concept. Process videos use native controls and are not autoplayed. Poster frames derived from the supplied clips are preserved under assets/generated/process-posters/ and copied to public/assets/process/posters/.",
    "",
    "Rerun the organizer with bun scripts/organize-assets.ts after updating the category lists. Project stage classifications are based on the supplied photos; confirm the business's final completed/in-progress status and media permissions before publishing publicly.",
  ].join("\n"),
)
console.log("Organized " + entries.length + " source assets.")
console.log("Public media: " + entries.filter((entry) => entry.public).length + "; private references: " + entries.filter((entry) => !entry.public).length)

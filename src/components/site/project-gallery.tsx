"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/site/project-card"
import type { GalleryFilter, GalleryFilterOption, ProjectGalleryProps, ProjectMedia } from "@/types"

const filterItems: GalleryFilterOption[] = [
  { value: "all", label: "All media" },
  { value: "completed", label: "Completed" },
  { value: "in-progress", label: "In progress" },
  { value: "process-image", label: "Process images" },
  { value: "process-video", label: "Demonstration videos" },
  { value: "sample", label: "Concept sample" },
]

function getFilterCount(value: GalleryFilter, items: ProjectMedia[]) {
  if (value === "all") return items.length
  return items.filter((item) => item.category === value).length
}

export function ProjectGallery({ items }: ProjectGalleryProps) {
  const [filter, setFilter] = useState<GalleryFilter>("all")

  return (
    <Tabs value={filter} onValueChange={(value) => setFilter(value as GalleryFilter)} className="w-full">
      <TabsList variant="line" className="mb-8 flex h-auto w-full flex-wrap justify-start gap-x-3 gap-y-2 rounded-none border-b border-forest/10 p-0">
        {filterItems.map((item) => (
          <TabsTrigger key={item.value} value={item.value} className="flex-none px-1 pb-3 text-sm data-active:text-forest">
            <span>{item.label}</span>
            <span className="ml-1 text-[10px] text-muted-foreground">{getFilterCount(item.value, items)}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {filterItems.map((tab) => {
        const visibleItems = tab.value === "all" ? items : items.filter((item) => item.category === tab.value)
        return (
          <TabsContent key={tab.value} value={tab.value} className="mt-0">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleItems.map((item, index) => <ProjectCard key={item.id} item={item} revealDelay={(index % 4) + 1} />)}
            </div>
          </TabsContent>
        )
      })}
    </Tabs>
  )
}

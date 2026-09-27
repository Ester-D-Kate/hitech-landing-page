"use client"

import type { FormEvent } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createWhatsAppUrl } from "@/lib/contact"

export function WhatsAppForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const message = [
      "Hello HITECH Structure & Construction, I would like to discuss a project.",
      "",
      "Name: " + String(fields.get("name") ?? ""),
      "Service: " + String(fields.get("service") ?? ""),
      "Location: " + String(fields.get("location") ?? ""),
      "Current stage: " + String(fields.get("stage") ?? ""),
      "Timeline: " + String(fields.get("timeline") ?? "Not specified"),
      "Project details: " + String(fields.get("details") ?? ""),
    ].join("\n")

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-forest/10 bg-white p-5 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" autoComplete="name" required maxLength={100} placeholder="Name" className="h-12 rounded-xl bg-cream/60" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">What do you need help with?</Label>
          <select id="service" name="service" defaultValue="Residential construction" className="h-12 w-full rounded-xl border border-input bg-cream/60 px-3 text-base text-ink outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm">
            <option>Residential construction</option>
            <option>Design & engineering</option>
            <option>Turnkey execution</option>
            <option>Renovation & retrofitting</option>
            <option>Consultancy & development</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Site location</Label>
          <Input id="location" name="location" autoComplete="address-level2" required maxLength={120} placeholder="City or district" className="h-12 rounded-xl bg-cream/60" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="stage">Project stage</Label>
          <select id="stage" name="stage" defaultValue="Exploring" className="h-12 w-full rounded-xl border border-input bg-cream/60 px-3 text-base text-ink outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm">
            <option>Exploring</option>
            <option>Planning and design</option>
            <option>Ready to start construction</option>
            <option>Work already underway</option>
            <option>Renovation or repair</option>
          </select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="timeline">When are you hoping to begin? <span className="font-normal text-muted-foreground">(optional)</span></Label>
          <Input id="timeline" name="timeline" maxLength={80} placeholder="For example, in the coming months" className="h-12 rounded-xl bg-cream/60" />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="details">A little about the project</Label>
          <Textarea id="details" name="details" required maxLength={1200} rows={5} placeholder="What are you planning? Include any useful context about the site or existing building." className="resize-y rounded-xl bg-cream/60" />
        </div>
      </div>
      <div className="flex flex-col gap-4 border-t border-forest/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-muted-foreground">Your details will be prepared as a WhatsApp message. Review it there before sending; this website does not store the form.</p>
        <Button type="submit" className="h-12 w-full shrink-0 rounded-full bg-forest px-6 text-sm text-white hover:bg-forest/90 sm:w-auto">
          Continue in WhatsApp <ArrowUpRight aria-hidden="true" />
        </Button>
      </div>
    </form>
  )
}

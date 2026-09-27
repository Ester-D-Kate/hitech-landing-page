"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollMotion() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let observer: IntersectionObserver | undefined

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => {
        target.dataset.revealed = "true"
      })
    } else if (targets.length > 0) {
      root.classList.add("has-scroll-motion")
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement
              target.dataset.revealed = "true"
              observer?.unobserve(target)
            }
          })
        },
        { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
      )
      targets.forEach((target) => observer?.observe(target))
    }

    let animationFrame = 0
    const updateProgress = () => {
      if (animationFrame !== 0) return
      animationFrame = window.requestAnimationFrame(() => {
        const scrollRange = root.scrollHeight - window.innerHeight
        const progress = scrollRange > 0 ? (root.scrollTop / scrollRange) * 100 : 0
        root.style.setProperty("--scroll-progress", progress + "%")
        animationFrame = 0
      })
    }

    updateProgress()
    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress)

    return () => {
      observer?.disconnect()
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame)
    }
  }, [pathname])

  return null
}

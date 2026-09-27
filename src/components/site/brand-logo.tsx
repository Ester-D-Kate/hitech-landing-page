import Image from "next/image"
import type { BrandLogoProps } from "@/types"

export function BrandLogo({ variant }: BrandLogoProps) {
  const frameClass = variant === "header"
    ? "relative h-14 w-[68px] overflow-hidden rounded-sm bg-white"
    : "relative h-20 w-[108px] overflow-hidden rounded-sm bg-white"
  const imageClass = variant === "header"
    ? "absolute left-1/2 top-1/2 h-[89px] w-[71px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-center mix-blend-multiply"
    : "absolute left-1/2 top-1/2 h-[135px] w-[108px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-center mix-blend-multiply"

  return (
    <span className={frameClass}>
      <Image
        src="/assets/brand/00-44-50.jpeg"
        alt=""
        width={1080}
        height={1350}
        sizes={variant === "header" ? "68px" : "108px"}
        className={imageClass}
        unoptimized
      />
    </span>
  )
}

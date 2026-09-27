import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import type { LinkButtonProps } from "@/types"

export function LinkButton({
  className,
  href,
  variant,
  size,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  )
}

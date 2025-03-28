import Image from "next/image"
import Link from "next/link"

interface SiteLogoProps {
  className?: string
  variant?: "light" | "dark"
}

export default function SiteLogo({ className, variant = "dark" }: SiteLogoProps) {
  return (
    <Link href="/" className={className}>
      <Image
        src="/images/logo.png"
        alt="Rotinyara Constructions"
        width={180}
        height={60}
        className={variant === "light" ? "brightness-0 invert" : ""}
      />
    </Link>
  )
}


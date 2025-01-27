"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { ConfettiButton } from "@/components/confetti-button"
import { FadeInSection } from "@/components/fade-in-section"

interface PortfolioItemProps {
  title: string
  category?: string
  year?: string
  imageSrc: string
  className?: string
  isFirst?: boolean
  slug: string
  logo?: string
  tryItUrl?: string
}

export function PortfolioItem({
  title,
  category,
  year,
  imageSrc,
  className,
  isFirst,
  slug,
  logo,
  tryItUrl,
}: PortfolioItemProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push(`/case-study/${slug}`)
  }

  return (
    <div className={cn("grid gap-4", className)}>
      <FadeInSection>
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            {logo && (
              <Image
                src={logo || "/placeholder.svg"}
                alt={`${title} logo`}
                width={32}
                height={32}
                className="rounded-lg"
                placeholder="blur"
                blurDataURL="/placeholder.svg"
                priority
              />
            )}
            <h2 className="text-xl">
              <Link href={`/case-study/${slug}`} onClick={handleClick} className="hover:underline">
                <span className="font-medium">{title.split("|")[0].trim()}</span>
                {title.includes("|") && <span className="font-medium"> | {title.split("|")[1].trim()}</span>}
              </Link>
            </h2>
          </div>
          {(category || year) && (
            <div className="space-y-0.5">
              {category && <div className="text-sm uppercase tracking-wider">{category}</div>}
              {year && <div className="text-sm text-muted-foreground">{year}</div>}
            </div>
          )}
        </div>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <div className="relative">
          <Link
            href={`/case-study/${slug}`}
            onClick={handleClick}
            className={cn(
              "w-full overflow-hidden rounded-lg bg-muted block",
              isFirst && "shadow-xl hover:shadow-2xl transition-shadow duration-300",
            )}
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              width={1200}
              height={675}
              className="object-cover w-full aspect-[16/9] transition-transform duration-300 hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="/placeholder.svg"
              priority
            />
          </Link>
          {tryItUrl && (
            <div className="absolute bottom-4 left-4">
              <ConfettiButton href={tryItUrl}>Try it out!</ConfettiButton>
            </div>
          )}
        </div>
      </FadeInSection>
    </div>
  )
}


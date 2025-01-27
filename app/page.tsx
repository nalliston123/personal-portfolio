import { Suspense } from "react"
import Link from "next/link"
import { PortfolioItem } from "@/components/portfolio-item"
import { PortfolioItemSkeleton } from "@/components/portfolio-item-skeleton"
import { NeuralBackground } from "@/components/neural-background"
import { PageTransition } from "@/components/page-transition"
import { FadeInSection } from "@/components/fade-in-section"
import Image from "next/image"
import { Mail, Linkedin, Bot } from "lucide-react"

export default function Home() {
  return (
    <PageTransition>
      <div className="font-sans relative">
        <NeuralBackground />
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:py-16 relative min-h-screen z-10">
          {/* Header */}
          <FadeInSection>
            <header className="mb-8 md:mb-12 flex flex-col items-center md:items-start">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NeilheadshotAug2024BW-ezgif.com-webp-to-jpg-converter_2-removebg-preview-ZXVNJ4LmAl7c0KGz89VT93TCwmh947.png"
                  alt="Profile picture"
                  width={96}
                  height={96}
                  className="rounded-full"
                  priority
                />
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex justify-center md:justify-start gap-4 text-sm items-center mb-4">
                    <Link
                      href="mailto:neilallisotn@gmail.com"
                      className="hover:opacity-70 transition-opacity"
                      aria-label="Send email"
                    >
                      <Mail className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/neilalliston/"
                      className="hover:opacity-70 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://www.neilalliston.com/"
                      className="hover:opacity-70 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat bot"
                    >
                      <Bot className="w-5 h-5" />
                    </Link>
                  </div>
                  <h1 className="text-3xl font-medium mb-1">Neil Alliston</h1>
                  <p className="text-lg text-muted-foreground">Personal Portfolio</p>
                </div>
              </div>
            </header>
          </FadeInSection>

          {/* Portfolio Grid */}
          <div className="grid gap-16 md:gap-24">
            <Suspense fallback={<PortfolioItemSkeleton />}>
              <FadeInSection delay={0.05}>
                <PortfolioItem
                  title="Sortee | AI-powered grocery list organiser"
                  imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20at%203.39.51%E2%80%AFpm-2PYAXAQJ9zYAZ8OnQGJihI62vDNb5S.png"
                  isFirst={true}
                  slug="sortee"
                  logo="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-512x512-pDz4fhVJAlh6ZXPR9UGup9UFFl4aZk.png"
                  tryItUrl="https://sortee.app"
                />
              </FadeInSection>
            </Suspense>

            <Suspense fallback={<PortfolioItemSkeleton />}>
              <FadeInSection delay={0.1}>
                <PortfolioItem
                  title="Expeditionist | Visualise your adventures"
                  imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-21%20at%202.10.52%E2%80%AFpm-xCrj12PYUzGX17ceHlVdDCyH8yU2t3.png"
                  slug="expeditionist"
                  logo="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-01-20%2014.14.53%20-%20A%20minimalist%20image%20featuring%20an%20ultra-simplified%20white%20globe%20with%20abstract,%20minimal%20landmasses%20on%20a%20solid%20black%20background.%20The%20globe%20should%20be%20compos-modified-vccc9bf7fx2Y083FENPOXqcpjKm5Y6.png"
                  tryItUrl="https://expeditionist.neilalliston.com"
                />
              </FadeInSection>
            </Suspense>

            <Suspense fallback={<PortfolioItemSkeleton />}>
              <FadeInSection delay={0.15}>
                <PortfolioItem
                  title="Budgeter | Spend tracker app and analytics dashboard"
                  imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20at%203.39.38%E2%80%AFpm-IK4RwL3wsAfQkyt7CEK9aHIratqgTf.png"
                  slug="budgeter"
                  logo="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/budgeter%20favicon%202-Fm7LioLgWypnlXbnUTrjQNxbqUHgNh.png"
                />
              </FadeInSection>
            </Suspense>

            <Suspense fallback={<PortfolioItemSkeleton />}>
              <FadeInSection delay={0.2}>
                <PortfolioItem
                  title="NeilBot | Interactive CV chatbot"
                  imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20at%207.59.08%E2%80%AFpm-3W5v8kyS0Yeb9Pc53PFljohV3tw5nw.png"
                  slug="neilbot"
                  logo="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NeilheadshotAug2024BW-ezgif.com-webp-to-jpg-converter%202-FkSYgbkaEzFpXDlNZ9UHcrl2eCFg5P.png"
                  tryItUrl="https://neilalliston.com"
                />
              </FadeInSection>
            </Suspense>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}


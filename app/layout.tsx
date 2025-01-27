import "./globals.css"
import type { Metadata } from "next"
import { quicksand } from "@/fonts"
import { Analytics } from "@vercel/analytics/react"
import { PageTransition } from "@/components/page-transition"
import { LoadingProvider } from "@/components/loading-provider"

export const metadata: Metadata = {
  title: "Neil Alliston | Side Quests",
  description:
    "Explore Neil Alliston's personal portfolio showcasing innovative side projects in AI, web development, and productivity tools.",
  keywords: ["Neil Alliston", "portfolio", "AI", "web development", "side projects", "Sortee", "Budgeter", "NeilBot"],
  authors: [{ name: "Neil Alliston" }],
  creator: "Neil Alliston",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neilalliston.com",
    title: "Neil Alliston | Side Quests",
    description: "Discover Neil Alliston's innovative side projects in AI and web development.",
    siteName: "Neil Alliston's Portfolio",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NeilheadshotAug2024BW-ezgif.com-webp-to-jpg-converter%202-FkSYgbkaEzFpXDlNZ9UHcrl2eCFg5P.png",
        width: 1200,
        height: 630,
        alt: "Neil Alliston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neil Alliston | Side Quests",
    description: "Explore Neil Alliston's innovative side projects in AI and web development.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NeilheadshotAug2024BW-ezgif.com-webp-to-jpg-converter%202-FkSYgbkaEzFpXDlNZ9UHcrl2eCFg5P.png",
    ],
    creator: "@neilalliston",
  },
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NeilheadshotAug2024BW-ezgif.com-webp-to-jpg-converter%202-FkSYgbkaEzFpXDlNZ9UHcrl2eCFg5P.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body>
        <LoadingProvider>
          <PageTransition>{children}</PageTransition>
        </LoadingProvider>
        <Analytics />
      </body>
    </html>
  )
}


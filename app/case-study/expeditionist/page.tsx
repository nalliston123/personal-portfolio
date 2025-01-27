"use client"

import { Suspense, useEffect } from "react"
import { NeuralBackground } from "@/components/neural-background"
import { CaseStudySkeleton } from "@/components/case-study-skeleton"
import { ScrollProgressBar } from "@/components/scroll-progress-bar"
import { PageTransition } from "@/components/page-transition"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ConfettiButton } from "@/components/confetti-button"

export default function ExpeditionistCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageTransition>
      <div className="font-sans relative">
        <ScrollProgressBar />
        <NeuralBackground />
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:py-16 relative min-h-screen z-10">
          <Suspense fallback={<CaseStudySkeleton />}>
            <ExpeditionistContent />
          </Suspense>
        </div>
      </div>
    </PageTransition>
  )
}

function ExpeditionistContent() {
  const caseStudy = {
    title: "Expeditionist: Visualise your adventures",
    description: "Track your travels on a fun interactive world map.",
    year: "2025",
    role: "Builder",
    duration: "2 days",
    tools: ["v0", "Vercel", "React", "GeoJSON"],
  }

  return (
    <>
      <Link href="/" className="inline-flex items-center text-lg mb-8 hover:underline font-medium">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Portfolio
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{caseStudy.title}</h1>
        <p className="text-xl text-muted-foreground">{caseStudy.description}</p>
        <ConfettiButton href="https://expeditionist.neilalliston.com">Try it out!</ConfettiButton>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Year</h3>
            <p>{caseStudy.year}</p>
          </div>
          <div>
            <h3 className="font-medium">Role</h3>
            <p>{caseStudy.role}</p>
          </div>
          <div>
            <h3 className="font-medium">Duration</h3>
            <p>{caseStudy.duration}</p>
          </div>
          <div>
            <h3 className="font-medium">Tools</h3>
            <p>{caseStudy.tools.join(", ")}</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
        <p className="mb-4">
          I wanted to create a fun and easy way to visualise all the countries someone has visited. The user should be able to select the countries, display them on a map and then download the map to compare with their friends'.
        </p>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expeditionist%20image.jpg-nLWfSMXmPXCczC886o3im2YeZvbwYI.png"
          alt="A group of friends enthusiastically planning their travels together while looking at maps, illustrating the collaborative nature of trip planning"
          width={1200}
          height={675}
          className="rounded-lg shadow-lg w-full"
          placeholder="blur"
          blurDataURL="/placeholder.svg"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
        <p className="mb-4">The Expeditionist Tracker lets users select from all the counties in the world, either by searching and checking them on a list or simply clicking on the map. Users can then change the colour of their selected countries and can download an image of their personal map. To add some delight to the experience, every time they select a new country a little aeroplane flies across the screen.</p>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expeditionist%20gif%20v2-8aJhH43B0NfBR0LJxMOeZJE9qrettK.gif"
          alt="Expeditionist interface demonstration showing country selection functionality with Brazil being highlighted on the interactive world map"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg w-full aspect-[2/1] object-cover"
          unoptimized
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Process</h2>
        <p className="mb-4">
          I built the Expeditionist Tracker's UI in v0. I used a file of world countries maintained by Google for Developers. The map is using the "react-simple-maps" library, which is a thin wrapper around d3-geo and topojson. To save the images, the app serialises the SVG to a string, creates a Blob from the SVG string, create an Image object from the Blob and draw the Image onto a canvas. The colour picker is from "react-colorful".
        </p>
      </section>
      <Link href="/" className="inline-flex items-center text-lg mt-4 hover:underline font-medium">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Portfolio
      </Link>
    </>
  )
}


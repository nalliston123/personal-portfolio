'use client'

import { Suspense, useEffect } from 'react'
import { NeuralBackground } from '@/components/neural-background'
import { CaseStudySkeleton } from '@/components/case-study-skeleton'
import { ScrollProgressBar } from '@/components/scroll-progress-bar'
import { PageTransition } from '@/components/page-transition'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ConfettiButton } from '@/components/confetti-button'

export default function NeilBotCaseStudy() {
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
            <NeilBotContent />
          </Suspense>
        </div>
      </div>
    </PageTransition>
  )
}

function NeilBotContent() {
  const caseStudy = {
    title: "NeilBot: Interactive CV chatbot",
    description: "Custom trained AI model with professional experience and personality assessment.",
    year: "2024",
    role: "Builder",
    duration: "4 weeks",
    tools: ["OpenAI custom assistant", "Next.js", "TypeScript", "Postgres", "Vercel"],
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
        <ConfettiButton href="https://neilalliston.com">
          Try it out!
        </ConfettiButton>
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
          Instead of providing a standard CV, I wanted to offer a more interactive summary of my professional experience and personality using modern technologies. 
        </p>
        <Image 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recruiter%20cv.jpg-Gh7yCg80sNehDS00ITky5HzORNOMEU.png"
          alt="A recruiter reviewing professional documents on a laptop, representing the traditional CV review process" 
          width={1200} 
          height={675} 
          className="rounded-lg shadow-lg w-full" 
          placeholder="blur"
          blurDataURL="/placeholder.svg"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
        <p className="mb-4">Recruiters or potential employers can ask the chatbot questions about my experience and skills and will get an AI-powered response from a model that's trained on specific information about me.</p>
        <Image 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/neilbot%20gif%20v2-Hb6EHqUnpX3wiFgSE5Bt58bpcAZlbq.gif"
          alt="NeilBot interface showing an interactive chat conversation with example questions and professional experience highlights" 
          width={1200} 
          height={600} 
          className="rounded-lg shadow-lg w-full aspect-[2/1] object-cover" 
          unoptimized
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Process</h2>
        <p className="mb-4">I trained a custom OpenAI assistant on my CV, a personality index assessment and a Q&A document about me. I built the frontend using v0 and the questions are stored in a NEON Postgres database. Analytics and deployments are all managed in Vercel.</p>
      </section>
      <Link href="/" className="inline-flex items-center text-lg mt-4 hover:underline font-medium">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Portfolio
      </Link>
    </>
  )
}


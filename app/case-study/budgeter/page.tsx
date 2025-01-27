'use client'

import { Suspense, useEffect } from 'react'
import { NeuralBackground } from '@/components/neural-background'
import { CaseStudySkeleton } from '@/components/case-study-skeleton'
import { ScrollProgressBar } from '@/components/scroll-progress-bar'
import { PageTransition } from '@/components/page-transition'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BudgeterCaseStudy() {
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
            <BudgeterContent />
          </Suspense>
        </div>
      </div>
    </PageTransition>
  )
}

function BudgeterContent() {
  const caseStudy = {
    title: "Budgeter: Spend tracker app and analytics dashboard",
    description: "Track and understand your spending habits with ease and gain valuable insights into your financial behavior.",
    year: "2025",
    role: "Builder",
    duration: "1 week",
    tools: ["React", "TypeScript", "Postgres", "shadcn/ui", "next.js", "tailwind CSS", "Vercel"],
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
          My wife and I wanted to track our spending during our sabbatical. We wanted to see what we were spending our money on so we could manage our budget and make smarter purchasing decisions.
        </p>
        <Image 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/couple%20market%203.jpg-53yh6n0fdOu8mbCZc4tmkpZF5sWvt1.png" 
          alt="A couple reviewing their expenses together on a mobile device while shopping at a market" 
          width={1200} 
          height={675} 
          className="rounded-lg shadow-lg w-full" 
          placeholder="blur"
          blurDataURL="/placeholder.svg"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
        <p className="mb-4">Budgeter helped us track our spending by:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Making it lightning fast to add categorised expenditure</li>
          <li>Allowing us to review our spend, broken down into different categories and time periods in a convenient dashboard</li>
          <li>Splitting the data between each of us and our joint spending so we could separately track our own expenses</li>
        </ul>
        <div className="space-y-4">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20at%203.39.38%E2%80%AFpm-qbZ94QCfn9RX0WQe17mOLPj9JQQyGn.png" 
            alt="Budgeter app interface showing expense categories and quick-add functionality" 
            width={1200} 
            height={675} 
            className="rounded-lg shadow-lg w-full aspect-[16/9] object-cover" 
            placeholder="blur"
            blurDataURL="/placeholder.svg"
          />
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/budgeter%20dashboard%20gif%20v2-lin2HppNXhjmLn5vRnjUyjetgwSICY.gif"
            alt="Budgeter analytics dashboard showing expense breakdowns by category with weekly spend amounts and percentages" 
            width={1200} 
            height={675} 
            className="rounded-lg shadow-lg w-full aspect-[16/9] object-cover" 
            unoptimized
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Process</h2>
        <p className="mb-4">As this was a simple personal app, I used v0 to build the frontend and Vercel to manage the deployments. I connected the app to a NEON Postgres database to store the expenses and connected that database to a separate desktop-optimised review dashboard, which used SQL queries to segment the data.</p>
      </section>
      <Link href="/" className="inline-flex items-center text-lg mt-4 hover:underline font-medium">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Portfolio
      </Link>
    </>
  )
}


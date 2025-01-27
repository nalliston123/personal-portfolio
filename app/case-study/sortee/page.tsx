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

export default function SorteeCaseStudy() {
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
            <SorteeContent />
          </Suspense>
        </div>
      </div>
    </PageTransition>
  )
}

function SorteeContent() {
  const caseStudy = {
    title: "Sortee: AI-powered grocery list organiser",
    description: "Streamline grocery shopping with AI recommendations and efficiently sorted lists.",
    year: "2024",
    role: "Builder",
    duration: "2 weeks",
    tools: ["gpt-4o-mini", "shadcn/ui", "next.js", "tailwind CSS", "Vercel"],
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
        <ConfettiButton href="https://sortee.app">
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
          Grocery shopping is a drag and anything to make it faster and more efficient helps people spend more of their time doing more interesting things.
        </p>
        <p className="mb-4">
          One of the worst parts is having a list that isn't organised in the same way that a store is. So you end up going back and forth up and down different aisles finding your items, which makes shopping inefficient and time consuming.
        </p>
        <Image 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/confused%20shopper%20v23.jpg-GVguQtBXjbryTxg8d0wA9j7lB4rBGr.png" 
          alt="A focused shopper consulting a digital device while navigating a grocery store aisle, illustrating the need for better shopping list organisation" 
          width={1200} 
          height={675} 
          className="rounded-lg shadow-lg w-full" 
          placeholder="blur"
          blurDataURL="/placeholder.svg"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
        <p className="mb-4">Sortee makes grocery shopping a little less painful by:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Allowing you to add items to a digital list</li>
          <li>Suggesting typical items that you might have forgotten</li>
          <li>Sorting your list into categories that are aligned with a typical store layout</li>
          <li>Allowing you to easily check items off your list as you put them in your basket</li>
          <li>Allowing you to share your list with others so you can shop together</li>
        </ul>
        <Image 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20at%203.39.26%E2%80%AFpm-B8bM2Ryi8cxkHnwK6a69GBnc0ALGkT.png" 
          alt="Sortee app interface showing three screens: list creation with suggestions, organised categories, and list sharing functionality" 
          width={1200} 
          height={600} 
          className="rounded-lg shadow-lg w-full aspect-[2/1] object-cover" 
          placeholder="blur"
          blurDataURL="/placeholder.svg"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Process</h2>
        <p className="mb-4">I built Sortee's frontend using v0. I managed the deployments, domains and analytics using Vercel. Sortee is directly connected to OpenAI's API to power the AI functionality. I listed Sortee on Product Hunt to make it available for free to anyone that wants to try it out.</p>
      </section>
      <Link href="/" className="inline-flex items-center text-lg mt-4 hover:underline font-medium">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Portfolio
      </Link>
    </>
  )
}


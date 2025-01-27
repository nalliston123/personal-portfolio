"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

interface ConfettiButtonProps {
  href: string
  children: React.ReactNode
}

export function ConfettiButton({ href, children }: ConfettiButtonProps) {
  const [hasPlayed, setHasPlayed] = useState(false)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const createConfetti = () => {
    if (hasPlayed || !canvasRef.current || !buttonRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    setHasPlayed(true)

    const buttonRect = buttonRef.current.getBoundingClientRect()
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      color: string
      rotation: number
      rotationSpeed: number
    }> = []

    // Create particles
    const colors = ["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: buttonRect.left + buttonRect.width / 2,
        y: buttonRect.top + buttonRect.height / 2,
        vx: (Math.random() - 0.5) * 15,
        vy: Math.random() * -15 - 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
      })
    }

    let frame = 0
    const animate = () => {
      if (!ctx || !canvas) return

      frame++
      if (frame > 120) return // Stop after 2 seconds (60fps * 2)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vy += 0.5 // gravity
        particle.rotation += particle.rotationSpeed

        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)
        ctx.fillStyle = particle.color
        ctx.fillRect(-5, -5, 10, 10)
        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.style.display = window.innerWidth >= 640 ? "block" : "none"
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative pt-4">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50 hidden sm:block"
        style={{ opacity: hasPlayed ? 1 : 0, display: "none" }}
      />
      {href.startsWith("/") ? (
        <Link
          ref={buttonRef}
          href={href}
          className="inline-block px-6 py-2 bg-[#0272a6] text-white font-medium rounded-lg hover:bg-[#025d8a] transition-colors duration-300"
          onMouseEnter={createConfetti}
        >
          {children}
        </Link>
      ) : (
        <a
          ref={buttonRef}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={createConfetti}
          className="inline-block px-6 py-2 bg-[#0272a6] text-white font-medium rounded-lg hover:bg-[#025d8a] transition-colors duration-300"
        >
          {children}
        </a>
      )}
    </div>
  )
}


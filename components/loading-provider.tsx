"use client"

import { useState, useEffect } from "react"
import { useImageLoading } from "@/hooks/use-image-loading"
import { LoadingSplash } from "@/components/loading-splash"
import { AnimatePresence, motion } from "framer-motion"

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const imagesLoaded = useImageLoading()

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [imagesLoaded])

  console.log("Images loaded:", imagesLoaded)

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingSplash key="loading" />
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


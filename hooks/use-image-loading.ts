import { useState, useEffect } from "react"

export function useImageLoading() {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    let isMounted = true

    const loadImage = (img: HTMLImageElement): Promise<void> =>
      new Promise((resolve) => {
        if (img.complete) {
          resolve()
        } else {
          img.onload = () => resolve()
          img.onerror = () => resolve() // Resolve even on error to prevent blocking
        }
      })

    const loadAllImages = async () => {
      const imgElements = document.querySelectorAll("img")
      await Promise.all(Array.from(imgElements).map(loadImage))
      if (isMounted) {
        setImagesLoaded(true)
      }
    }

    // Initial check
    loadAllImages()

    // Set up a MutationObserver to watch for new images
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLImageElement) {
              loadImage(node).then(() => {
                if (isMounted) {
                  setImagesLoaded(true)
                }
              })
            }
          })
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      isMounted = false
      observer.disconnect()
    }
  }, [])

  return imagesLoaded
}


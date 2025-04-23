'use client'

import { useEffect } from 'react'

export default function ViewportHeight() {
  useEffect(() => {
    function setRealViewportHeight() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    // Set initial value
    setRealViewportHeight()

    // Add event listeners
    window.addEventListener('load', setRealViewportHeight)
    window.addEventListener('resize', setRealViewportHeight)

    // Cleanup
    return () => {
      window.removeEventListener('load', setRealViewportHeight)
      window.removeEventListener('resize', setRealViewportHeight)
    }
  }, [])

  return null
}

"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === "pointer")
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => setIsPointer(true))
      el.addEventListener("mouseleave", () => setIsPointer(false))
    })

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)

      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsPointer(true))
        el.removeEventListener("mouseleave", () => setIsPointer(false))
      })
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-black pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 400,
          mass: 0.3,
        }}
      />
      <style jsx global>{`
        body {
          cursor: auto;
        }
        a, button, [role="button"], input[type="submit"], input[type="button"], input[type="reset"] {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

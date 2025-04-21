import type React from "react"
import { CustomCursor } from "@/components/custom-cursor"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full">
      <CustomCursor />
      {children}
    </div>
  )
}

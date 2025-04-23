"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { AboutMeSection } from "@/components/about-me-section"
import { ArtistStatementSection } from "@/components/artist-statement-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResearchSection } from "@/components/research-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"

export default function Home() {
  // Check if we need to scroll to projects section
  useEffect(() => {
    const shouldScrollToProjects = sessionStorage.getItem("scrollToProjects") === "true"

    if (shouldScrollToProjects) {
      // Clear the flag
      sessionStorage.removeItem("scrollToProjects")

      // Wait for the page to fully load and then scroll to projects
      setTimeout(() => {
        const projectsSection = document.getElementById("projects")
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  return (
    <main className="relative w-full">
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <AboutMeSection />
      <ArtistStatementSection />
      <ProjectsSection />
      <ResearchSection />
      <SkillsSection />
      <ContactSection />

      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="#contact"
          className="bg-[#FFCC00] text-black px-6 py-3 rounded-full flex items-center gap-2 hover:gap-4 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Let's Talk <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  )
}

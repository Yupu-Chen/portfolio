"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"

// Complete project data with all projects including Parametric Design
const allProjects = [
  {
    id: 1,
    title: "inTerScape: Time, Technology & Self",
    description:
      "An interactive, multimedia experience examining our evolving relationship with the Internet and technology through a reflective journey — from growing up online to its lasting impact.",
    collaborators: "Yupu Chen, Bato Batbileg, and Ronit Singh",
    status: "Completed",
    image: "/images/interscape-exhibition.jpeg",
    tags: ["Interactive Installation", "Audiovisual Art", "Augmented Reality"],
    detailUrl: "/projects/interscape",
    externalUrl: "https://interscape.vercel.app/",
  },
  {
    id: 2,
    title: "Parametric Design",
    description:
      "A web platform exploring the intersection of mathematics and design through a collection of parametric models, showcasing how algorithmic thinking can create beautiful, functional designs.",
    collaborators: "Yupu Chen & Mbebo Nonna",
    status: "Completed",
    image: "/images/parametric-design-table.png",
    tags: ["Web Development", "Parametric Design", "Mathematics"],
    detailUrl: "/projects/parametric-design",
    externalUrl: "https://v0-parametric-design.vercel.app/",
  },
  {
    id: 3,
    title: "أسرار الصحراء (Asrar Al-Sahra)",
    description:
      "A mysterious lamp that whispers forgotten tales, inviting seekers on a journey to uncover the secrets of the desert through interactive storytelling.",
    collaborators: "Yupu Chen, Zayed K. Al-Tamimi, Naser AlHumaidi, and Yaakulya Sabbani",
    status: "Completed",
    image: "/images/desert-lamp.png",
    tags: ["Interactive Installation", "Storytelling", "Cultural Heritage"],
    detailUrl: "/projects/asrar-al-sahra",
  },
  {
    id: 4,
    title: "GalleryEverywhere",
    description:
      "An experimental iOS AR application that allows users to curate their own exhibitions in any space they choose, challenging traditional knowledge structures in art museums.",
    collaborators: "Yupu Chen and Samuel Fung",
    status: "Completed",
    image: "/images/gallery-everywhere-logo.png",
    tags: ["Augmented Reality", "iOS", "Art Curation"],
    detailUrl: "/projects/gallery-everywhere",
  },
  {
    id: 5,
    title: "Joy, Inside Out Robot Performance",
    description:
      "A robotic performance bringing emotions to life through interactive characters, each embodying a distinct feeling—Joy, Anger, Sadness, Disgust, and Fear—exploring the complexities of human emotions.",
    collaborators: "Yupu Chen and Yoki Xue",
    status: "Completed",
    image: "/images/joy-robot.jpeg",
    tags: ["Robotics", "Interactive Performance", "Emotional Intelligence"],
    detailUrl: "/projects/inside-out-robots",
  },
  {
    id: 6,
    title: "VR Meditation Experience",
    description:
      "A virtual reality meditation experience designed to enhance mindfulness and well-being through immersive environments and guided practices.",
    collaborators: "Yupu Chen, Yoki Zhao, Ronit Singh, Yaakulya Sabbani",
    status: "Completed",
    image: "/images/interscape-exhibition.jpeg",
    tags: ["Virtual Reality", "Meditation", "Well-being"],
    detailUrl: "#",
  },
  {
    id: 7,
    title: "Catier: Through The Lens",
    description:
      "A business challenge project exploring how Cartier can increase its influence among Gen-Z consumers by entering the realm of arts.",
    collaborators: "Yupu Chen (Team Leader)",
    status: "Completed",
    image: "/images/desert-lamp-exhibition-1.png",
    tags: ["Business Strategy", "Luxury Market", "Gen-Z Consumers"],
    detailUrl: "#",
  },
  {
    id: 8,
    title: "Embodiment in VR and Decision Making",
    description:
      "A research project exploring how embodiment in virtual reality environments influences decision-making and behavior.",
    collaborators: "Yupu Chen, Research Team at NYU Abu Dhabi",
    status: "Ongoing",
    image: "/images/desert-lamp-exhibition-2.png",
    tags: ["Virtual Reality", "Research", "Decision Making"],
    detailUrl: "#",
  },
]

// Filter categories for projects
const categories = [
  { id: "all", name: "All Projects" },
  { id: "installation", name: "Installations" },
  { id: "ar-vr", name: "AR/VR" },
  { id: "robotics", name: "Robotics" },
  { id: "web", name: "Web Development" },
  { id: "research", name: "Research" },
]

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter projects based on active category
  const filteredProjects = allProjects.filter((project) => {
    if (activeCategory === "all") return true
    if (activeCategory === "installation") return project.tags.some((tag) => tag.includes("Installation"))
    if (activeCategory === "ar-vr")
      return project.tags.some((tag) => tag.includes("Reality") || tag.includes("AR") || tag.includes("VR"))
    if (activeCategory === "robotics") return project.tags.some((tag) => tag.includes("Robot"))
    if (activeCategory === "web") return project.tags.some((tag) => tag.includes("Web"))
    if (activeCategory === "research") return project.tags.some((tag) => tag.includes("Research"))
    return true
  })

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white w-full">
      <CustomCursor />
      <Navigation />

      {/* Header */}
      <div className="bg-[#FFCC00] py-20 w-full mt-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center text-black font-medium hover:underline mb-6"
            onClick={() => {
              // Store a flag in sessionStorage to indicate we want to scroll to projects
              sessionStorage.setItem("scrollToProjects", "true")
            }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-black">All Projects</h1>
          <p className="text-black mt-4 text-lg max-w-2xl">
            A comprehensive collection of my work spanning interactive installations, extended reality, robotics, and
            research projects.
          </p>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id
                    ? "bg-[#FFCC00] text-black hover:bg-[#E6B800] border-0"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group"
              >
                <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden aspect-video">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredProject === project.id ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <Button
                          asChild
                          size="sm"
                          variant="default"
                          className="rounded-full bg-[#FFCC00] text-black hover:bg-[#E6B800]"
                        >
                          <Link href={project.detailUrl}>
                            <ExternalLink className="h-4 w-4 mr-2" /> View Project
                          </Link>
                        </Button>
                        {project.externalUrl && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="rounded-full bg-white text-black hover:bg-gray-100 border-white"
                          >
                            <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" /> Live Site
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {project.status && (
                        <span className="text-sm bg-[#FFCC00] text-black px-2 py-1 rounded-full">{project.status}</span>
                      )}
                    </div>

                    {project.collaborators && (
                      <p className="text-gray-600 text-sm mb-3">
                        <span className="font-medium">Collaborators:</span> {project.collaborators}
                      </p>
                    )}

                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal bg-[#FFCC00]/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

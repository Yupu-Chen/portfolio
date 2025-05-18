"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Updated project data with Parametric Design project
const projects = [
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
]

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">RECENT PROJECTS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work showcasing interactive installations, robotics, and extended reality
            experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild className="bg-[#FFCC00] text-black hover:bg-[#E6B800]" size="lg">
            <Link href="/projects" className="font-medium">
              SEE COMPLETE LIST OF PROJECTS
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

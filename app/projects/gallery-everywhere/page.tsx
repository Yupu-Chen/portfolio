"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function GalleryEverywhereProject() {
  const router = useRouter()

  // Fix for scrolling issue - scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Function to handle navigation back to projects section
  const handleBackToProjects = () => {
    // Store a flag in sessionStorage to indicate we want to scroll to projects
    sessionStorage.setItem("scrollToProjects", "true")
    // Navigate to home page
    router.push("/")
  }

  return (
    <main className="min-h-screen bg-white w-full">
      {/* Header */}
      <div className="bg-[#FFCC00] py-6 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center text-black font-medium hover:underline mb-6 bg-transparent border-0 cursor-pointer"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </button>
          <h1 className="text-3xl md:text-5xl font-bold text-black">GalleryEverywhere</h1>
          <div className="flex flex-wrap gap-3 mt-4">
            <Badge className="bg-black text-white hover:bg-black/80">Augmented Reality</Badge>
            <Badge className="bg-black text-white hover:bg-black/80">iOS</Badge>
            <Badge className="bg-black text-white hover:bg-black/80">Art Curation</Badge>
            <Badge className="bg-white text-black border border-black">Completed</Badge>
          </div>
          <p className="text-black mt-4 text-lg">
            <span className="font-medium">Collaborators:</span> Yupu Chen and Samuel Fung
          </p>
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/gallery-everywhere-logo.png"
                alt="GalleryEverywhere Logo"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 italic p-2">
                GalleryEverywhere - An experimental iOS AR application for personal art curation
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                GalleryEverywhere is an experimental iOS AR application that allows users to curate their own
                exhibitions in any space they choose. Inspired by the concept of ignorant museums—which challenges
                traditional knowledge structures in art museums—and the Van Abbemuseum's DIY Archive project, this app
                invites users to engage with artworks in a personal, interactive way.
              </p>

              <p>
                With a simple and intuitive design, GalleryEverywhere makes it easy for anyone to explore and interact
                with art. Users can select pieces from a built-in digital art library, learn about each work, and place
                it into their environment using augmented reality. Once added, artworks can be moved, resized, and
                arranged freely—turning any space into a personal gallery.
              </p>

              <p>
                This minimalist approach aligns with the core philosophy of ignorant museums by allowing users to form
                their own interpretations rather than being guided by institutional narratives. Instead of imposing a
                specific meaning onto the artworks, GalleryEverywhere empowers users to create their own curations,
                shaping unique and personal experiences with art.
              </p>
            </div>

            <div className="mt-10 mb-8">
              <h3 className="text-2xl font-bold mb-4">Project Video</h3>
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="GalleryEverywhere Demo"
                  src="https://player.vimeo.com/video/1056075924?h=336c821799"
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-4">Project Presentation</h3>
              <p>
                The GalleryEverywhere project includes a comprehensive presentation deck that details the concept,
                design process, user research, and technical implementation.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.canva.com/design/DAFhxdlQaiI/lLs2q0q032cw_f6lL1A6pg/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Presentation Deck <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Date</h4>
                  <p>May, 2023</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Platform</h4>
                  <p>iOS</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Technology</h4>
                  <p>ARKit, Swift, UIKit</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Status</h4>
                  <p>Completed</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Digital Art Library</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>AR Artwork Placement</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Artwork Manipulation (Move, Resize)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Personal Curation Tools</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FFCC00] p-6 rounded-lg text-black">
              <h3 className="text-xl font-bold mb-4">Interested in this project?</h3>
              <p className="mb-4">
                If you'd like to learn more about GalleryEverywhere or discuss potential collaborations, feel free to
                get in touch.
              </p>
              <Button asChild className="w-full bg-black text-white hover:bg-black/80">
                <Link href="/#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

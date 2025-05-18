"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ContactDialog } from "@/components/contact-dialog"

export default function InterscapePage() {
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
          <h1 className="text-3xl md:text-5xl font-bold text-black">inTerScape: Time, Technology & Self</h1>
          <div className="flex flex-wrap gap-3 mt-4">
            <Badge className="bg-black text-white hover:bg-black/80">Interactive Installation</Badge>
            <Badge className="bg-black text-white hover:bg-black/80">Audiovisual Art</Badge>
            <Badge className="bg-black text-white hover:bg-black/80">Augmented Reality</Badge>
            <Badge className="bg-white text-black border border-black">Completed</Badge>
          </div>
          <p className="text-black mt-4 text-lg">
            <span className="font-medium">Collaborators:</span> Yupu Chen, Bato Batbileg, and Ronit Singh
          </p>
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/interscape-exhibition.jpeg"
                alt="inTerScape Project Exhibition"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 italic p-2">
                Visitors experiencing the inTerScape installation at the exhibition
              </p>
            </div>

            <div className="mt-8">
              <Button asChild className="bg-[#FFCC00] text-black hover:bg-[#E6B800]">
                <a
                  href="https://interscape.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Live Experience
                </a>
              </Button>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                inTerScape is an interactive, multimedia experience that consists of three parts, including physical
                installation, audiovisual art, and augmented reality, and examines our evolving relationship with the
                Internet and technology, through a reflective journey — from growing up online to its lasting impact on
                identities and connections.
              </p>

              <p>
                The project critically examines how digital technology has shaped personal identity, collective memory,
                and social interactions by imagining an extreme situation where a person becomes one with the internet.
                Through a combination of physical installations, digital art, and augmented reality, Interscape invites
                audiences to reflect on their own digital footprints and question the internet's role in shaping their
                experiences.
              </p>

              <p>
                The project reconstructs early internet aesthetics to evoke nostalgia, investigates the
                hyper-connectivity of contemporary digital life, and imagines alternative futures where human and
                machine interactions continue to evolve. By engaging visitors in an immersive, participatory experience,
                Interscape fosters dialogue on the ways digital culture influences human agency and perception,
                ultimately challenging us to rethink our coexistence with technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="inTerScape Detail 1"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="inTerScape Detail 2"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Timeline</h4>
                  <p>2024 - 2025</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Exhibition Date</h4>
                  <p>Spring 2025</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Medium</h4>
                  <p>Physical Installation, Digital Art, Augmented Reality</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Status</h4>
                  <p>Completed</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Live URL</h4>
                  <a
                    href="https://interscape.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    interscape.vercel.app
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Project Components</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Physical Installation</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Audiovisual Art</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Augmented Reality Experience</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FFCC00] p-6 rounded-lg text-black">
              <h3 className="text-xl font-bold mb-4">Interested in this project?</h3>
              <p className="mb-4">
                If you'd like to learn more about inTerScape or discuss potential collaborations, feel free to get in
                touch.
              </p>
              <ContactDialog buttonText="Contact Me" buttonClassName="bg-black text-white hover:bg-black/80" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

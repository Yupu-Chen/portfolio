"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ContactDialog } from "@/components/contact-dialog"

export default function ParametricDesignPage() {
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
          <h1 className="text-3xl md:text-5xl font-bold text-black">Parametric Design</h1>
          <div className="flex flex-wrap gap-3 mt-4">
            <Badge className="bg-black text-white hover:bg-black/80">Web Development</Badge>
            <Badge className="bg-black text-white hover:bg-black/80">Parametric Design</Badge>
            <Badge className="bg-black text-white hover:bg-black/80">Mathematics</Badge>
            <Badge className="bg-white text-black border border-black">Completed</Badge>
          </div>
          <p className="text-black mt-4 text-lg">
            <span className="font-medium">Collaborators:</span> Yupu Chen & Mbebo Nonna
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
                src="/images/parametric-design-table.png"
                alt="Parametric Design Table"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 italic p-2">
                A parametric design table with mathematically generated patterns and structure
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                The project showcases a collection of parametric models that demonstrate how algorithmic thinking and
                mathematical principles can be applied to create beautiful, functional designs.
              </p>

              <p>
                The projects include 2.5D surface design, parametric fashion design, and large scale pavillion design.
                The models were parametrically designed using Rhino and Grasshopper with various plug-ins. They were
                manufactured into physical objects using different techniques, including CNC and 3D printing.
              </p>

              <p>
                By making these complex mathematical concepts accessible through interactive design, the project aims to
                bridge the gap between abstract mathematics and practical applications in design fields such as
                architecture, product design, and digital art.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg mt-8">
              <Image
                src="/images/parametric-design-structure.jpeg"
                alt="Parametric Design Structure"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 italic p-2">
                A voronoi-patterned parametric structure showcasing organic mathematical patterns
              </p>
            </div>

            <div className="mt-8">
              <Button asChild className="bg-[#FFCC00] text-black hover:bg-[#E6B800]">
                <a
                  href="https://v0-parametric-design.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Live Website
                </a>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Date</h4>
                  <p>2025</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Technologies</h4>
                  <p>Rhino, Grasshopper, CNC, 3D Printing</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Live URL</h4>
                  <a
                    href="https://v0-parametric-design.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    v0-parametric-design.vercel.app
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Status</h4>
                  <p>Completed</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Technical Implementation</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Data-driven design in Rhino and Grasshopper</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Digital manufacturing techniques, including CNC machine and 3D printing</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FFCC00] p-6 rounded-lg text-black">
              <h3 className="text-xl font-bold mb-4">Interested in this project?</h3>
              <p className="mb-4">
                If you'd like to learn more about Parametric Design or discuss potential collaborations in the
                intersection of mathematics and design, feel free to get in touch.
              </p>
              <ContactDialog buttonText="Contact Me" buttonClassName="bg-black text-white hover:bg-black/80" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

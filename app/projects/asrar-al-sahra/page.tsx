"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function AsrarAlSahraPage() {
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
          <h1 className="text-3xl md:text-5xl font-bold text-black">أسرار الصحراء (Asrar Al-Sahra)</h1>
          <div className="flex flex-wrap gap-3 mt-4">
            <Badge className="bg-black text-white hover:bg-black/80">Interactive Installation</Badge>
            <Badge className="bg-black text-white hover:bg-black/80">Storytelling</Badge>
            <Badge className="bg-black text-white hover:bg-black/80">Cultural Heritage</Badge>
            <Badge className="bg-white text-black border border-black">Completed</Badge>
          </div>
          <p className="text-black mt-4 text-lg">
            <span className="font-medium">Collaborators:</span> Yupu Chen, Zayed K. Al-Tamimi, Naser AlHumaidi, and
            Yaakulya Sabbani
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
                src="/images/desert-lamp.png"
                alt="Asrar Al-Sahra - Desert Lamp Installation"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 italic p-2">
                The illuminated lamp installation in the desert night, with Arabic text glowing on the cubes. Photo
                credit: Michael Ang
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                A forgotten relic lies half-buried in the shifting sands of the desert. It is a mysterious lamp that
                whispers of forgotten tales. The lamp attracts those who stumble upon it, inviting them to touch its
                surface. It awakens, speaking in a cryptic tone and revealing its secrets. It offers a quest: to uncover
                three keys hidden amidst the dunes.
              </p>

              <p>
                Guided by the faint glow of the lamp, the seeker embarks on this journey to find the buried secrets of
                the desert. With each discovered key, the seeker puts the lamp on it to unlock a story rooted in the
                desert. These tales, like the wishes of old, breathe life into the arid landscape, connecting the
                traveller to the soul of the desert.
              </p>

              <p>
                Once the final story is told, the traveller continues their journey, leaving the lamp behind for the
                next person and carrying the memories and desert secrets, into the world.
              </p>
            </div>

            <div className="mt-10 mb-8">
              <h3 className="text-2xl font-bold mb-4">Project Video</h3>
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Asrar Al-Sahra Project Video"
                  src="https://player.vimeo.com/video/1035583308?h=6201e2ea85"
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Field Installation Images */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">Field Installation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden shadow-lg md:col-span-2">
                  <Image
                    src="/images/desert-lamp-2.png"
                    alt="Desert lamp installation with glowing Arabic text"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                  <p className="text-sm text-gray-500 italic p-2">
                    Close-up view of the lamp installation with illuminated Arabic text. Photo credit: Michael Ang
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/desert-lamp-interaction.png"
                    alt="Visitor holding the illuminated lamp"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <p className="text-sm text-gray-500 italic p-2">
                    A visitor interacting with the illuminated lamp against blue-lit desert grass.
                  </p>
                </div>
              </div>
            </div>

            {/* 2024 IM Showcase Images */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">2024 IM Showcase</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/desert-lamp-exhibition-1.png"
                    alt="Exhibition view with visitors experiencing the installation"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <p className="text-sm text-gray-500 italic p-2">
                    Visitors experiencing the installation with projected visuals.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/desert-lamp-exhibition-2.png"
                    alt="Full installation view with sand table and projection"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <p className="text-sm text-gray-500 italic p-2">
                    The complete installation with sand table, lamp, and projection screen. Photo credit: Michael Ang
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg md:col-span-2">
                  <Image
                    src="/images/desert-lamp-showcase.png"
                    alt="Visitors interacting with the installation"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                  <p className="text-sm text-gray-500 italic p-2">
                    Visitors engaging with the interactive lamp and illuminated cubes at the 2024 IM Showcase.
                  </p>
                </div>
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
                  <p>December 2024</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Medium</h4>
                  <p>Interactive Installation, Storytelling</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Status</h4>
                  <p>Completed</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Project Components</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Interactive Lamp Installation</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Desert Narrative Experience</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Cultural Storytelling</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FFCC00] p-6 rounded-lg text-black">
              <h3 className="text-xl font-bold mb-4">Interested in this project?</h3>
              <p className="mb-4">
                If you'd like to learn more about أسرار الصحراء (Asrar Al-Sahra) or discuss potential collaborations,
                feel free to get in touch.
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

"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ContactDialog } from "@/components/contact-dialog"

export default function InsideOutRobotsProject() {
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
          <h1 className="text-3xl md:text-5xl font-bold text-black">Joy, Inside Out Robot Performance</h1>
          <div className="flex flex-wrap gap-3 mt-4">
            <Badge className="bg-black text-white hover:bg-black/80">Robotics</Badge>
            <Badge className="bg-black text-white hover:bg-black/80">Interactive Performance</Badge>
            <Badge className="bg-black text-white hover:bg-black/80">Emotional Intelligence</Badge>
            <Badge className="bg-white text-black border border-black">Completed</Badge>
          </div>
          <p className="text-black mt-4 text-lg">
            <span className="font-medium">Collaborators:</span> Yupu Chen and Yoki Xue
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
                src="/images/joy-robot.jpeg"
                alt="Joy Robot from Inside Out Performance"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 italic p-2">
                "Joy" robot character from the Inside Out Robot Performance project
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                The Inside Out Robot Performance project brings emotion to life through robotic characters, each
                embodying a distinct feeling—Joy, Anger, Sadness, Disgust, and Fear. Designed to interact with one
                another in a shared space, these robots explore the complexities of human emotions, creating a dynamic
                performance where technology becomes a conduit for emotional expression.
              </p>

              <p>
                By blending engineering, robotics, and storytelling, the project invites audiences to witness the
                robots' emotional journeys in real time, offering a unique reflection on how we connect with,
                understand, and express our feelings in a world increasingly shaped by machines. It's an exploration of
                empathy, identity, and the emotional intelligence that can emerge when technology reflects the nuances
                of the human experience.
              </p>
            </div>

            <div className="mt-10 mb-8">
              <h3 className="text-2xl font-bold mb-4">Performance Video</h3>
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/-QuKfBAlnMs"
                  title="Inside Out Robot Performance"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">Other Robot Characters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/robot-character-1.jpeg"
                    alt="White robot character with glowing eyes"
                    width={600}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/robot-character-2.jpeg"
                    alt="Red and purple robot characters"
                    width={600}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Technical Implementation</h3>
                <p className="text-gray-700">
                  Each robot in the performance is equipped with custom-built mechanisms that allow for expressive
                  movements and interactions. The robots use a combination of servo motors, LED displays, and
                  programmable microcontrollers to create distinct personalities and emotional responses.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Performance Concept</h3>
                <p className="text-gray-700">
                  Inspired by the Pixar film "Inside Out," the performance explores how different emotions interact,
                  conflict, and ultimately work together. The robots move through a narrative that demonstrates the
                  importance of emotional balance and understanding.
                </p>
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
                  <p>2023</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Medium</h4>
                  <p>Robotic Performance, Interactive Installation</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Technology</h4>
                  <p>Arduino, Servo Motors, LED Displays, Custom Electronics</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Status</h4>
                  <p>Completed</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Robot Characters</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Joy - Expresses happiness and optimism</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Anger - Demonstrates frustration and intensity</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Sadness - Conveys melancholy and reflection</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Disgust - Shows aversion and protection</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFCC00] rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span>Fear - Expresses caution and anxiety</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FFCC00] p-6 rounded-lg text-black">
              <h3 className="text-xl font-bold mb-4">Interested in this project?</h3>
              <p className="mb-4">
                If you'd like to learn more about the Inside Out Robot Performance or discuss potential collaborations,
                feel free to get in touch.
              </p>
              <ContactDialog buttonText="Contact Me" buttonClassName="bg-black text-white hover:bg-black/80" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

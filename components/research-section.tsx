"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

// Updated research data with only VR research
const researchData = {
  title: "Virtual Reality Research",
  description:
    "Exploring the potential of virtual reality for enhancing human experiences, decision-making, and well-being.",
  projects: [
    {
      title: "Embodiment in Virtual Reality and Decision Making",
      description:
        "This research project explores decision-making within VR environments. The study incorporates response-based games into VR scenarios to examine how embodiment influences decision-making and behavior. This is an ongoing research project.",
      status: "Ongoing",
    },
    {
      title: "Virtual Reality Meditation",
      description:
        "The VR meditation research explores how immersive virtual environments can enhance mindfulness and self-awareness in an increasingly distracted world. By integrating meditative practices with interactive digital spaces, the project examines how VR can create a sense of presence, guide focus, and facilitate deep relaxation.",
      status: "Published",
    },
  ],
  publications: [
    {
      title: "Enhancing Meditation Through Virtual Reality: The Effect Of VR On Mindfulness And Well-Being",
      authors: "Chen, Y., Zhao, Y., Singh, R., Sabbani, Y.",
      venue: "15th Annual Undergraduate Research Conference On Applied Computing 2024. Zayed University.",
      year: "2024",
      link: "https://www.zu.ac.ae/main/en/urc2024/URCBookOfAbstracts2024.pdf",
    },
  ],
}

export function ResearchSection() {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">RESEARCH</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic and creative research explores the intersection of technology, art, and human experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>{researchData.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">{researchData.description}</p>

              <h3 className="text-xl font-bold mb-4">Research Projects</h3>
              <div className="grid gap-4">
                {researchData.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-4 border rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{project.title}</h4>
                      {project.status && (
                        <span className="text-xs bg-[#FFCC00] text-black px-2 py-1 rounded-full">{project.status}</span>
                      )}
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Publications</h3>
                <div className="grid gap-4">
                  {researchData.publications.map((publication, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 border rounded-lg bg-gray-50"
                    >
                      <h4 className="font-semibold mb-2">{publication.title}</h4>
                      <p className="text-gray-600 mb-1">{publication.authors}</p>
                      <p className="text-gray-600 mb-1">
                        {publication.venue} ({publication.year})
                      </p>
                      {publication.link && (
                        <a
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2 text-sm"
                        >
                          View Publication <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

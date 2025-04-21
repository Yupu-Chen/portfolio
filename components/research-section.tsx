"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample research data - replace with your actual research
const researchAreas = [
  {
    id: "hci",
    title: "Human-Computer Interaction",
    description: "Exploring new ways humans can interact with technology through intuitive interfaces and experiences.",
    projects: [
      {
        title: "Gesture-Based Interaction Systems",
        description:
          "Research on natural gesture recognition for controlling digital environments without physical controllers.",
      },
      {
        title: "Affective Computing Interfaces",
        description:
          "Developing systems that can recognize and respond to human emotions through facial expressions and biometric data.",
      },
    ],
  },
  {
    id: "xr",
    title: "Extended Reality",
    description:
      "Investigating the potential of virtual, augmented, and mixed reality technologies for creative and practical applications.",
    projects: [
      {
        title: "Spatial Computing in Education",
        description:
          "Using AR/VR to create immersive learning environments that enhance knowledge retention and engagement.",
      },
      {
        title: "XR for Cultural Preservation",
        description:
          "Documenting and recreating cultural heritage sites and practices through extended reality experiences.",
      },
    ],
  },
  {
    id: "robotics",
    title: "Robotics & Art",
    description: "Combining robotics with artistic expression to create interactive installations and performances.",
    projects: [
      {
        title: "Autonomous Robotic Performers",
        description: "Creating robots that can participate in artistic performances with human collaborators.",
      },
      {
        title: "Kinetic Sculptures",
        description: "Developing motion-responsive sculptural works that interact with viewers and environments.",
      },
    ],
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
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

        <Tabs defaultValue="hci" className="w-full">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
            {researchAreas.map((area) => (
              <TabsTrigger
                key={area.id}
                value={area.id}
                className="data-[state=active]:bg-[#FFCC00] data-[state=active]:text-black"
              >
                {area.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {researchAreas.map((area) => (
            <TabsContent key={area.id} value={area.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{area.description}</p>

                    <div className="grid gap-4">
                      {area.projects.map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="p-4 border rounded-lg"
                        >
                          <h4 className="font-semibold mb-2">{project.title}</h4>
                          <p className="text-gray-600">{project.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

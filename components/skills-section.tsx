"use client"

import { motion } from "framer-motion"
import { Code, Figma, Database, Globe, Server, Smartphone } from "lucide-react"

// Skill categories based on Yupu's interests
const skillCategories = [
  {
    id: 1,
    title: "Interactive Media",
    icon: <Code className="h-8 w-8" />,
    skills: [
      "Web Development",
      "Interactive Installations",
      "User Experience Design",
      "Digital Art",
      "Creative Coding",
      "Processing",
      "p5.js",
    ],
  },
  {
    id: 2,
    title: "Human-Computer Interaction",
    icon: <Smartphone className="h-8 w-8" />,
    skills: [
      "User Research",
      "Interaction Design",
      "Usability Testing",
      "Interface Design",
      "Gesture Recognition",
      "Tangible Interfaces",
    ],
  },
  {
    id: 3,
    title: "Extended Reality",
    icon: <Globe className="h-8 w-8" />,
    skills: [
      "Virtual Reality",
      "Augmented Reality",
      "Mixed Reality",
      "Unity3D",
      "Spatial Computing",
      "3D Modeling",
      "Immersive Experiences",
    ],
  },
  {
    id: 4,
    title: "Robotics",
    icon: <Server className="h-8 w-8" />,
    skills: [
      "Arduino",
      "Raspberry Pi",
      "Sensors",
      "Actuators",
      "Robotic Art",
      "Kinetic Sculptures",
      "Physical Computing",
    ],
  },
  {
    id: 5,
    title: "Design",
    icon: <Figma className="h-8 w-8" />,
    skills: ["UI/UX Design", "Graphic Design", "Motion Graphics", "3D Design", "Prototyping", "Adobe Creative Suite"],
  },
  {
    id: 6,
    title: "Business",
    icon: <Database className="h-8 w-8" />,
    skills: [
      "Project Management",
      "Market Research",
      "Business Strategy",
      "Entrepreneurship",
      "Product Development",
      "Innovation",
    ],
  },
]

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My expertise in various fields of technology, art, and human-computer interaction.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#FFCC00] rounded-lg mr-4">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-[#FFCC00]/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

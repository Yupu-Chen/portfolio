"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutMeSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ABOUT</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Yupu Chen"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#FFCC00] rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-200 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-black">
              <p className="text-lg">
                My name is Yupu Chen. I am pursuing a Bachelor of Arts degree in Interactive Media at NYU Abu Dhabi at
                New York University.
              </p>
              <p className="text-lg">
                I am interested in technologies, arts, human-computer interaction, and business. My work has been
                concentrated on interactive location-based installations, robots, and Extended Reality.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

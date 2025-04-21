"use client"

import { motion } from "framer-motion"

export function ArtistStatementSection() {
  return (
    <section id="artist-statement" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ARTIST STATEMENT</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-black">
              <p className="text-lg">
                As an artist and technologist, my work is driven by an exploration of the intersection between art,
                technology, and human experience.
              </p>
              <p className="text-lg">
                I believe in the power of creativity to bridge the gap between these realms, using innovative
                technologies to deepen our understanding of self, society, and the world around us.
              </p>
              <p className="text-lg">
                My practice seeks to highlight the potential for technology to enhance human connection, emotional
                expression, and introspection, while ensuring that humanity remains at the center of technological
                advancement.
              </p>
              <p className="text-lg">
                My work spans a wide range of mediums, including interactive installations, robotics, augmented reality,
                and virtual reality. Through these tools, I aim to create immersive experiences that provoke thought,
                challenge perceptions, and invite audiences to reflect on their emotional responses and relationships
                with the digital and physical world. These experiences are designed not just for passive observation,
                but for active participation, encouraging individuals to engage with technology in ways that are both
                meaningful and transformative.
              </p>
              <p className="text-lg">
                One of the central themes in my work is the idea of coexistence—digital coexistence is a trend that
                cannot be stopped. My work investigates how humans and technology can interact in ways that are
                harmonious, enriching, and empathetic.
              </p>
              <p className="text-lg">
                I seek to create moments where technology becomes a tool for self-awareness and emotional connection,
                rather than something distant or mechanical. By integrating emotional depth into my work, I hope to
                inspire new forms of communication and understanding, reminding us of the importance of emotional
                intelligence in our interactions with the world and each other.
              </p>
              <p className="text-lg">
                At the heart of my artistic practice is a belief that technology should serve to enhance, rather than
                replace, human connection. I strive to create experiences that not only invite reflection, but also
                foster a deeper sense of presence and connection to both ourselves and the digital landscape.
              </p>
              <p className="text-lg">
                My work is driven by a curiosity about how technology can be used to enrich our lives, offering new ways
                to experience, communicate, and reflect.
              </p>
              <p className="text-lg">
                In the face of rapid technological advancement, I am committed to exploring how we can shape our future
                interactions with technology to be more empathetic, inclusive, and human-centered. I believe that
                through art and technology, we can create more meaningful, emotionally resonant experiences that empower
                individuals to connect with themselves and others in new ways.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

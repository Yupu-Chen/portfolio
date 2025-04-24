"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, FileText } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { CVPreviewSection } from "@/components/cv-preview-section"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">CURRICULUM VITAE</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">My academic background and contact information.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-[#FFCC00] rounded-full mr-4">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <a href="mailto:yp.chen@nyu.edu" className="text-gray-600 hover:text-black transition-colors">
                    yp.chen@nyu.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-[#FFCC00] rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Location</h4>
                  <p className="text-gray-600">New York, Abu Dhabi, Hong Kong</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-[#FFCC00] rounded-full mr-4">
                  <FileText className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Curriculum Vitae</h4>
                  <a
                    href="/yupu-chen-cv.pdf"
                    download
                    className="text-gray-600 hover:text-black transition-colors flex items-center"
                  >
                    Download Full CV
                    <span className="ml-2 text-xs bg-[#FFCC00] text-black px-2 py-1 rounded-full">PDF</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-lg mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-[#FFCC00] rounded-full hover:bg-[#E6B800] transition-colors">
                  <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="p-3 bg-[#FFCC00] rounded-full hover:bg-[#E6B800] transition-colors">
                  <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-0.178 0-0.355-0.012-0.53 0.802-0.578 1.497-1.3 2.047-2.124-0.756 0.335-1.55 0.553-2.361 0.647 0.862-0.516 1.5-1.329 1.809-2.287-0.811 0.48-1.697 0.815-2.606 0.997-0.756-0.806-1.831-1.302-3.011-1.302-2.278 0-4.118 1.84-4.118 4.118 0 0.324 0.036 0.638 0.106 0.938-3.42-0.172-6.452-1.809-8.487-4.299-0.355 0.609-0.558 1.313-0.558 2.062 0 1.425 0.725 2.683 1.825 3.42-0.673-0.021-1.305-0.206-1.859-0.513v0.052c0 1.995 1.418 3.66 3.304 4.035-0.345 0.094-0.708 0.145-1.083 0.145-0.264 0-0.522-0.026-0.773-0.074 0.524 1.637 2.044 2.827 3.845 2.861-1.409 1.104-3.183 1.763-5.113 1.763-0.332 0-0.659-0.019-0.981-0.057 1.822 1.167 3.989 1.849 6.316 1.849" />
                  </svg>
                </a>
                <a href="#" className="p-3 bg-[#FFCC00] rounded-full hover:bg-[#E6B800] transition-colors">
                  <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="p-3 bg-[#FFCC00] rounded-full hover:bg-[#E6B800] transition-colors">
                  <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <CVPreviewSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

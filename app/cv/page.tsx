"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"

export default function CVPage() {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white w-full">
      <CustomCursor />
      <Navigation />

      {/* Header */}
      <div className="bg-[#FFCC00] py-20 w-full mt-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <Link href="/" className="inline-flex items-center text-black font-medium hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-black">Curriculum Vitae</h1>
          <p className="text-black mt-4 text-lg max-w-2xl">
            My academic and professional background, skills, and achievements.
          </p>
        </div>
      </div>

      {/* CV Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex justify-end mb-8">
            <Button asChild className="bg-[#FFCC00] text-black hover:bg-[#E6B800]">
              <a href="/yupu-chen-cv.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download CV (PDF)
              </a>
            </Button>
          </div>

          <div className="space-y-10">
            {/* Personal Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">YUPU CHEN</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">New York University</p>
                  <p className="text-gray-600">+971 0565486809 | +86 17623842600 | +1 3478834474</p>
                  <p className="text-gray-600">Email: yp.chen@nyu.edu</p>
                  <p className="text-gray-600">
                    Portfolio:{" "}
                    <a href="https://wp.nyu.edu/abudhabi-yupuchen/" className="text-blue-600 hover:underline">
                      https://wp.nyu.edu/abudhabi-yupuchen/
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">EDUCATION</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start flex-wrap">
                    <h3 className="text-xl font-semibold">New York University in Abu Dhabi</h3>
                    <p className="text-gray-600">Abu Dhabi, UAE</p>
                  </div>
                  <div className="flex justify-between items-start flex-wrap">
                    <p className="text-gray-700">B.A. in Interactive Media</p>
                    <p className="text-gray-600">Sep. 2021 – Expected Jun. 2025</p>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>GPA: 3.9/4.0</li>
                    <li>
                      Coursework: Communication and Technology, Markets, Interview Methods, Augmented Gallery, Intro to
                      CS, Performing Robots, Communication Lab, VR Research & Application
                    </li>
                  </ul>
                  <p className="font-semibold mt-4">Study Abroad:</p>
                  <div className="flex justify-between items-start flex-wrap">
                    <p className="text-gray-700">New York University in Berlin, Germany</p>
                    <p className="text-gray-600">Jan. 2023 – May 2023</p>
                  </div>
                  <div className="flex justify-between items-start flex-wrap">
                    <p className="text-gray-700">New York University in New York, USA</p>
                    <p className="text-gray-600">Jan. 2024 – May 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Publications */}
            <div>
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">PUBLICATIONS</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>
                  Chen, Y., Zhao, Y., Singh, R., Sabbani, Y. (2024). Enhancing Meditation Through Virtual Reality: The
                  Effect Of VR On Mindfulness And Well-Being. 15th Annual Undergraduate Research Conference On Applied
                  Computing 2024. Zayed University.
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">SKILLS AND QUALIFICATIONS</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>
                  <span className="font-semibold">Certificate:</span>
                  <ul className="list-disc list-inside ml-6">
                    <li>Associate Unity Game Developer – Unity Technologies, 2023</li>
                    <li>Social-Behavioral-Educational Researchers – CITI Program, ID: 66638890, 2024</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Language:</span> Chinese (Native), English (Bilingual or Advanced),
                  German (Intermediate)
                </li>
                <li>
                  <span className="font-semibold">Other skills:</span> Proficiency in Python, C++, C#, Swift and
                  SwiftUI, Microsoft Word, Excel, PowerPoint, Adobe CC, Web Development
                </li>
              </ul>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">PROFESSIONAL EXPERIENCES</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start flex-wrap">
                    <h3 className="text-xl font-semibold">New York University Abu Dhabi</h3>
                    <p className="text-gray-600">Abu Dhabi, UAE</p>
                  </div>
                  <div className="flex justify-between items-start flex-wrap">
                    <p className="text-gray-700">Undergraduate Research Assistant</p>
                    <p className="text-gray-600">Oct. 2024 – Present</p>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>
                      Assisted in the implementation of a decision-making-related psychological VR research project.
                    </li>
                    <li>Individually implemented the VR scenes in Unity3D.</li>
                    <li>Assisted in designing questionnaires and relevant measurements.</li>
                    <li>Assisted in data collection and cleaning.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start flex-wrap">
                    <h3 className="text-xl font-semibold">DELUXETARGETS, China</h3>
                    <p className="text-gray-600">Remote</p>
                  </div>
                  <div className="flex justify-between items-start flex-wrap">
                    <p className="text-gray-700">Marketing & Communications Intern</p>
                    <p className="text-gray-600">Jul. 2022 – Jun. 2024</p>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>
                      Conducted research about information and exclusive offers of partnered luxury hotels in designated
                      destinations.
                    </li>
                    <li>
                      Drafted social media contents including advertising posts, price lists, and recommendation
                      articles for partnered luxury hotels.
                    </li>
                    <li>Produced ideas of better marketing strategies and client experiences in weekly meetings.</li>
                    <li>Facilitated a total revenue of over 700,000 CNY for the company.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start flex-wrap">
                    <h3 className="text-xl font-semibold">WeScaleVenture</h3>
                    <p className="text-gray-600">Dubai, UAE</p>
                  </div>
                  <div className="flex justify-between items-start flex-wrap">
                    <p className="text-gray-700">Community Building Summer Intern</p>
                    <p className="text-gray-600">May 2023 – Aug. 2023</p>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Proposed prelanding ideas for the WeScaleCommuinity, a sales community in MEA region.</li>
                    <li>Conducted market and company research for potential members of the community.</li>
                    <li>Drafted marketing and communication materials for the landing of the community.</li>
                    <li>Designed posters, websites, and other market and communication materials.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start flex-wrap">
                    <h3 className="text-xl font-semibold">
                      China Petroleum Engineering & Construction Corporation (CPECC)
                    </h3>
                    <p className="text-gray-600">Abu Dhabi, UAE</p>
                  </div>
                  <div className="flex justify-between items-start flex-wrap">
                    <p className="text-gray-700">Contract Management Summer Intern</p>
                    <p className="text-gray-600">May 2022 – Jun. 2022</p>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>
                      Assisted in managing the fulfillment of the tasks with the Contractor of Iraq Majnoon Sour Gas
                      Treatment project.
                    </li>
                    <li>Assisted in making and editing biding documents and contracts.</li>
                    <li>Assisted in data collection and compilation.</li>
                    <li>
                      Communicated with the Contractor, engineers, and project manager to report and solve the progress
                      and issues of the project.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">PROJECTS</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start flex-wrap">
                    <h3 className="text-xl font-semibold">Catier: Through The Lens Business Challenge</h3>
                    <p className="text-gray-600">Abu Dhabi, UAE</p>
                  </div>
                  <p className="text-gray-700 italic">Top 5 on campus, Team Leader</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Researched on the overall luxury market in the UAE and characteristics of Gen-Z consumers.</li>
                    <li>Conducted quantitative and qualitative analysis of the competitors in the local market.</li>
                    <li>
                      Designed potential ways the brand can increase its influence among Gen-Z consumers by entering the
                      realm of arts.
                    </li>
                    <li>
                      Analyzed potential revenues and costs of the proposal through quantitative cost-benefit analysis.
                    </li>
                    <li>
                      Presented the work to the local team of the brand at the final presentation and received
                      recognition from the brand.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start flex-wrap">
                    <h3 className="text-xl font-semibold">AR: GalleryEverywhere</h3>
                    <p className="text-gray-600">Berlin, Germany</p>
                  </div>
                  <p className="text-gray-700 italic">Project Leader and App Developer</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>
                      Designed and developed a fully functional user-centric AR gallery curation experience with Unity
                      and iOS ARKit, allowing individuals to curate personalized art exhibitions in their physical
                      spaces.
                    </li>
                    <li>
                      Designed and partially implemented a built-in community, facilitating sharing of user-curated
                      exhibitions and fostering collaborative art experiences within the network.
                    </li>
                    <li>
                      Adopted human-centric minimalistic design and basic interaction theories to ensure accessibility
                      and to empower users to freely interpret and arrange artworks.
                    </li>
                    <li>
                      Presented the work to curators from Humboldt Forum and other museums, galleries, and exhibitions
                      in the city.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start flex-wrap">
                    <h3 className="text-xl font-semibold">China Gulf Forum 2022</h3>
                    <p className="text-gray-600">Abu Dhabi, UAE</p>
                  </div>
                  <div className="flex justify-between items-start flex-wrap">
                    <p className="text-gray-700 italic">Member of Operation Team</p>
                    <p className="text-gray-600">Jan. 2022 – Apr. 2022</p>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>
                      Communicated with the university offices on the progress of Forum preparation and collected
                      feedback to better organize the cooperation of other teams.
                    </li>
                    <li>
                      Reached out to Student Interest Groups for collaborations on fringe events before the Forum and
                      potential marketing opportunities.
                    </li>
                    <li>
                      Reached out to 10+ external organizations and institutes to market the Forum and received feedback
                      after the Forum, drawing more than 400 attendants to the Forum.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

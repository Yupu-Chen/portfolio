"use client"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CVPreviewSection() {
  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">CV Highlights</h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-800">Education</h4>
          <p className="text-gray-600">B.A. in Interactive Media, New York University Abu Dhabi (GPA: 3.9/4.0)</p>
          <p className="text-gray-600 text-sm">Study Abroad: NYU Berlin (2023), NYU New York (2024)</p>
        </div>

        <div>
          <h4 className="font-medium text-gray-800">Professional Experience</h4>
          <p className="text-gray-600">Undergraduate Research Assistant, NYU Abu Dhabi (2024-Present)</p>
          <p className="text-gray-600">Marketing & Communications Intern, DELUXETARGETS (2022-2024)</p>
          <p className="text-gray-600">Community Building Summer Intern, WeScaleVenture (2023)</p>
        </div>

        <div>
          <h4 className="font-medium text-gray-800">Skills</h4>
          <p className="text-gray-600">Unity, Python, C++, C#, Swift, Web Development, Adobe CC</p>
        </div>

        <div>
          <h4 className="font-medium text-gray-800">Languages</h4>
          <p className="text-gray-600">Chinese (Native), English (Bilingual), German (Intermediate)</p>
        </div>
      </div>

      <div className="mt-6">
        <Button asChild className="w-full bg-[#FFCC00] text-black hover:bg-[#E6B800] flex items-center justify-center">
          <a href="/yupu-chen-cv.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download Complete CV
          </a>
        </Button>
      </div>
    </div>
  )
}

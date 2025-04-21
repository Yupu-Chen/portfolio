import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Yupu Chen | Creative Portfolio",
  description: "Interactive portfolio website showcasing the work of Yupu Chen - technologist, artist, and researcher",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} flex flex-col items-center justify-center w-full`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="w-full max-w-[1920px] mx-auto">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

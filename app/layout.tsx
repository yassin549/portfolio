import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Modern Portfolio - Designer & Developer",
  description: "A cutting-edge portfolio showcasing innovative design and development work",
  keywords: ["portfolio", "designer", "developer", "web development", "UI/UX"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Modern Portfolio - Designer & Developer",
    description: "A cutting-edge portfolio showcasing innovative design and development work",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Portfolio - Designer & Developer",
    description: "A cutting-edge portfolio showcasing innovative design and development work",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

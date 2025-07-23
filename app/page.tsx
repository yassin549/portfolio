"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/hero-section"
import PortfolioGrid from "@/components/portfolio-grid"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import InteractiveBackground from "@/components/interactive-background"
import { ThemeProvider } from "@/components/theme-provider"

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <ThemeProvider>
      <div ref={containerRef} className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <InteractiveBackground />

        {/* Animated background */}
        <motion.div className="fixed inset-0 opacity-10 pointer-events-none" style={{ y: backgroundY }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        </motion.div>

        <main>
          <HeroSection />
          <PortfolioGrid />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  )
}

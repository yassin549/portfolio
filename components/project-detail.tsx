"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProjectDetailProps {
  project: {
    title: string
    subtitle: string
    description: string
    heroImage: string
    challenge: string
    approach: string
    outcome: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
    metrics: Array<{ label: string; value: string; description: string }>
    features: Array<{
      title: string
      description: string
      image: string
      technologies: string[]
    }>
    testimonial: {
      quote: string
      author: string
      role: string
      avatar: string
    }
    gallery: string[]
  }
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const nextGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % project.gallery.length)
  }

  const prevGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Back Button */}
      <motion.div
        className="fixed top-20 left-4 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="outline" asChild className="backdrop-blur-sm bg-background/80">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </Button>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="absolute inset-0">
          <Image
            src={project.heroImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-white/20 text-white border-white/30">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {project.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Overview */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Project Overview</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">{project.description}</p>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Technologies Used</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="secondary"
                  className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenge, Approach, Outcome */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Challenge",
              content: project.challenge,
              color: "from-red-500/20 to-orange-500/20",
              icon: "🎯",
            },
            {
              title: "Approach",
              content: project.approach,
              color: "from-blue-500/20 to-purple-500/20",
              icon: "🚀",
            },
            {
              title: "Outcome",
              content: project.outcome,
              color: "from-green-500/20 to-emerald-500/20",
              icon: "✨",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card
                className={`h-full bg-gradient-to-br ${item.color} border-0 hover:shadow-xl transition-all duration-300`}
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Key Results & Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Key Features & Innovations</h3>
          <div className="space-y-20">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <h4 className="text-2xl font-bold mb-4 text-primary">{feature.title}</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-xl shadow-2xl"
                  >
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Project Gallery</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={project.gallery[currentGalleryIndex] || "/placeholder.svg"}
                alt={`${project.title} gallery ${currentGalleryIndex + 1}`}
                fill
                className="object-cover transition-opacity duration-500"
              />

              {/* Gallery Navigation */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevGalleryImage}
                  className="bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-black/40"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextGalleryImage}
                  className="bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-black/40"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Gallery Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {project.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentGalleryIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-12">Client Testimonial</h3>
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 overflow-hidden">
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src={project.testimonial.avatar || "/placeholder.svg"}
                    alt={project.testimonial.author}
                    width={100}
                    height={100}
                    className="rounded-full object-cover border-4 border-primary/20"
                  />
                </div>
                <div className="text-left">
                  <blockquote className="text-xl md:text-2xl font-medium mb-6 italic leading-relaxed">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-lg text-primary">{project.testimonial.author}</div>
                    <div className="text-muted-foreground">{project.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-6">Interested in Similar Work?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how I can help bring your project ideas to life with the same level of innovation and quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/#contact">Get In Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#portfolio">View More Projects</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

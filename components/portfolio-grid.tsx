"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: "shopdive",
    title: "ShopDive",
    description: "Next-generation e-commerce platform with AI-powered recommendations and seamless user experience",
    category: "E-commerce",
    tags: ["Next.js", "AI/ML", "Stripe", "TypeScript"],
    image: "/modern-ecommerce-dashboard.png",
    liveUrl: "https://shopdive-demo.vercel.app",
    githubUrl: "https://github.com/yassin549/shopdive",
    featured: true,
  },
  {
    id: "launchpad",
    title: "LaunchPad",
    description: "Startup accelerator platform connecting entrepreneurs with investors and mentors",
    category: "SaaS",
    tags: ["React", "Node.js", "GraphQL", "PostgreSQL"],
    image: "/startup-platform-dashboard.png",
    liveUrl: "https://launchpad-platform.vercel.app",
    githubUrl: "https://github.com/yassin549/launchpad",
    featured: true,
  },
  {
    id: "persona-pro",
    title: "Persona Pro",
    description: "Personal branding toolkit with AI content generation and brand monitoring",
    category: "Design",
    tags: ["Vue.js", "Design System", "AI", "Figma API"],
    image: "/personal-branding-tool.png",
    liveUrl: "https://persona-pro.vercel.app",
    githubUrl: "https://github.com/yassin549/persona-pro",
    featured: false,
  },
  {
    id: "bistrobelle",
    title: "BistroBelle",
    description: "Complete restaurant management system with POS integration and analytics",
    category: "Mobile",
    tags: ["React Native", "Firebase", "Stripe", "Real-time"],
    image: "/restaurant-management-app.png",
    liveUrl: "https://bistrobelle-demo.vercel.app",
    githubUrl: "https://github.com/yassin549/bistrobelle",
    featured: false,
  },
  {
    id: "gleamjewels",
    title: "GleamJewels",
    description: "Luxury jewelry e-commerce with AR try-on technology and 3D visualization",
    category: "E-commerce",
    tags: ["Three.js", "WebXR", "AR", "Shopify"],
    image: "/luxury-jewelry-website.png",
    liveUrl: "https://gleamjewels-demo.vercel.app",
    githubUrl: "https://github.com/yassin549/gleamjewels",
    featured: true,
  },
  {
    id: "taskmaster",
    title: "TaskMaster",
    description: "Advanced project management with AI insights and real-time collaboration",
    category: "SaaS",
    tags: ["TypeScript", "GraphQL", "AI", "Real-time"],
    image: "/project-management-dashboard.png",
    liveUrl: "https://taskmaster-demo.vercel.app",
    githubUrl: "https://github.com/yassin549/taskmaster",
    featured: false,
  },
]

const categories = ["All", "E-commerce", "SaaS", "Design", "Mobile"]

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore my latest work spanning across different domains and technologies. Each project represents a unique
          challenge solved with innovative solutions.
        </p>
      </motion.div>

      {/* Filter Controls */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12 sticky top-20 z-10 bg-background/80 backdrop-blur-sm py-4 rounded-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="relative overflow-hidden transition-all duration-300 hover:scale-105"
          >
            {selectedCategory === category && (
              <motion.div
                className="absolute inset-0 bg-primary"
                layoutId="activeCategory"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </Button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm h-full">
                <div className="relative overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    </div>
                  )}

                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Actions */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-black"
                      asChild
                    >
                      <Link href={`/projects/${project.id}`}>
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-black"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-black"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </motion.div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto"
                  >
                    <Link href={`/projects/${project.id}`}>
                      <Eye className="w-4 h-4 mr-2" />
                      View Case Study
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View All Projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-muted-foreground mb-6">Want to see more of my work or discuss a custom project?</p>
        <Button
          size="lg"
          variant="outline"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Let's Work Together
        </Button>
      </motion.div>
    </section>
  )
}

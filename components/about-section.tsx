"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Code, Palette, Zap, Database, Globe, Smartphone } from "lucide-react"
import Image from "next/image"

const skills = [
  { name: "Frontend Development", level: 95, icon: Code, color: "from-blue-500 to-cyan-500" },
  { name: "Backend Development", level: 90, icon: Database, color: "from-green-500 to-emerald-500" },
  { name: "UI/UX Design", level: 85, icon: Palette, color: "from-purple-500 to-pink-500" },
  { name: "Mobile Development", level: 80, icon: Smartphone, color: "from-orange-500 to-red-500" },
  { name: "Web Technologies", level: 95, icon: Globe, color: "from-indigo-500 to-purple-500" },
  { name: "Performance Optimization", level: 88, icon: Zap, color: "from-yellow-500 to-orange-500" },
]

const experiences = [
  {
    year: "2024",
    title: "Full-Stack Developer",
    company: "Freelance",
    description: "Building modern web applications with React, Next.js, and Node.js for international clients",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    year: "2023",
    title: "Frontend Developer",
    company: "Tech Startup",
    description: "Developed responsive web applications and improved user experience by 40%",
    technologies: ["Vue.js", "Tailwind CSS", "JavaScript"],
  },
  {
    year: "2022",
    title: "Web Developer",
    company: "Digital Agency",
    description: "Created custom websites and e-commerce solutions for various clients",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
]

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="about" ref={containerRef} className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          I'm a passionate developer from Tunisia who loves creating digital experiences that make a difference. With
          expertise in modern web technologies, I bring ideas to life through clean code and innovative design.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Personal Info & Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Personal Info Card */}
          <Card className="mb-8 overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="relative">
                  <Image
                    src="/yassin-profile.png"
                    alt="Yassin Khoualdi"
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-2 border-primary/20"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Yassin Khoualdi</h3>
                  <p className="text-muted-foreground">Full-Stack Developer</p>
                  <p className="text-sm text-muted-foreground">Tabarka, Tunisia</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                I specialize in creating modern, responsive web applications using cutting-edge technologies. My passion
                lies in solving complex problems and delivering exceptional user experiences.
              </p>

              <Button className="w-full group">
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </CardContent>
          </Card>

          {/* Skills Grid */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-1 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredSkill(index)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="group"
                >
                  <Card className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                          <skill.icon className="w-5 h-5" />
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-secondary/20 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Experience Timeline */}
        <motion.div style={{ y }} className="space-y-8">
          <h3 className="text-2xl font-semibold mb-8">Experience Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />

                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="outline" className="mb-2 bg-primary/10 text-primary border-primary/20">
                          {exp.year}
                        </Badge>
                        <h4 className="font-bold text-xl group-hover:text-primary transition-colors">{exp.title}</h4>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

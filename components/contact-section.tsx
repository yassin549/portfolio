"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Twitter, Instagram } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/yassin549",
    label: "GitHub",
    color: "hover:bg-gray-900 hover:text-white",
    username: "@yassin549",
  },
  {
    icon: Twitter,
    href: "https://x.com/yassin_khoualdi",
    label: "Twitter",
    color: "hover:bg-blue-500 hover:text-white",
    username: "@yassin_khoualdi",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/yassin.dev.officiel/",
    label: "Instagram",
    color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white",
    username: "@yassin.dev.officiel",
  },
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yassin.dev.officiel@gmail.com",
    href: "mailto:yassin.dev.officiel@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+216 260 942 14",
    href: "tel:+21626094214",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tabarka, Jendouba 8110, Tunisia",
    href: "https://maps.google.com/?q=Tabarka,Tunisia",
    color: "from-red-500 to-orange-500",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Information Cards */}
        {contactInfo.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="block"
          >
            <Card className="h-full hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden">
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {contact.label}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">{contact.value}</p>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>

      {/* Social Media Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold mb-8">Follow My Journey</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-4 rounded-xl border-2 border-border ${social.color} transition-all duration-300 min-w-[200px]`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-left">
                <div className="font-semibold">{social.label}</div>
                <div className="text-sm opacity-70">{social.username}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Availability Status */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 overflow-hidden">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                className="w-4 h-4 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span className="font-semibold text-lg">Available for New Projects</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently accepting new freelance projects and collaborations. Whether you need a modern website, web
              application, or mobile app, let's work together to bring your vision to life!
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

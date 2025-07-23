import { notFound } from "next/navigation"
import ProjectDetail from "@/components/project-detail"

const projects = {
  shopdive: {
    title: "ShopDive",
    subtitle: "Next-Generation E-commerce Platform",
    description:
      "A revolutionary e-commerce platform that combines artificial intelligence with modern web technologies to create personalized shopping experiences. Built with React, Next.js, and advanced AI algorithms.",
    heroImage: "/modern-ecommerce-hero.png",
    challenge:
      "Traditional e-commerce platforms suffer from poor personalization, leading to high bounce rates and low conversion. Customers struggle to find relevant products, while businesses lose potential sales due to generic shopping experiences.",
    approach:
      "I developed an AI-powered recommendation engine using machine learning algorithms to analyze user behavior, purchase history, and browsing patterns. The platform features a modern, responsive design with seamless checkout processes and real-time inventory management.",
    outcome:
      "The platform achieved remarkable results with 40% increase in conversion rates, 60% improvement in user engagement, and 25% reduction in cart abandonment. Customer satisfaction scores improved to 4.8/5 stars.",
    technologies: ["Next.js", "TypeScript", "AI/ML", "Stripe", "PostgreSQL", "Redis", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://shopdive-demo.vercel.app",
    githubUrl: "https://github.com/yassin549/shopdive",
    metrics: [
      { label: "Conversion Rate", value: "+40%", description: "Increased sales conversion" },
      { label: "User Engagement", value: "+60%", description: "Higher user interaction" },
      { label: "Page Load Speed", value: "1.2s", description: "Lightning-fast performance" },
      { label: "Customer Satisfaction", value: "4.8/5", description: "Excellent user feedback" },
    ],
    features: [
      {
        title: "AI-Powered Product Recommendations",
        description:
          "Advanced machine learning algorithms analyze user behavior, purchase history, and browsing patterns to suggest highly relevant products, increasing the likelihood of purchase and improving user experience.",
        image: "/ai-recommendation-system.png",
        technologies: ["TensorFlow.js", "Python", "Machine Learning"],
      },
      {
        title: "Seamless Checkout Experience",
        description:
          "One-click checkout process with multiple payment options including Stripe, PayPal, and cryptocurrency. Features guest checkout, saved payment methods, and real-time order tracking.",
        image: "/checkout-process.png",
        technologies: ["Stripe API", "PayPal SDK", "React Hook Form"],
      },
      {
        title: "Real-time Analytics Dashboard",
        description:
          "Comprehensive admin dashboard providing real-time insights into sales performance, inventory levels, customer behavior, and revenue analytics with interactive charts and reports.",
        image: "/analytics-dashboard.png",
        technologies: ["Chart.js", "WebSocket", "PostgreSQL"],
      },
    ],
    testimonial: {
      quote:
        "ShopDive completely transformed our online business. The AI recommendations alone increased our average order value by 35%, and the seamless user experience has our customers coming back for more.",
      author: "Sarah Johnson",
      role: "CEO, Fashion Forward Boutique",
      avatar: "/testimonial-sarah.png",
    },
    gallery: ["/shopdive-gallery-1.png", "/shopdive-gallery-2.png", "/shopdive-gallery-3.png"],
  },
  launchpad: {
    title: "LaunchPad",
    subtitle: "Startup Accelerator & Investment Platform",
    description:
      "A comprehensive platform connecting startups with investors, mentors, and resources. Features advanced matching algorithms, due diligence tools, and collaboration spaces for the startup ecosystem.",
    heroImage: "/startup-accelerator-platform.png",
    challenge:
      "Startups struggle to find the right investors and mentors while investors need better deal flow and due diligence tools. The traditional networking approach is inefficient and often leads to mismatched partnerships.",
    approach:
      "I built an intelligent matching system using graph algorithms and machine learning to connect startups with compatible investors based on industry, stage, investment criteria, and success patterns. The platform includes comprehensive due diligence tools and mentorship networks.",
    outcome:
      "Successfully facilitated over $50M in funding rounds, connected 500+ startups with mentors, and achieved a 35% success rate in funding matches. The platform now serves as a leading startup ecosystem hub.",
    technologies: ["React", "Node.js", "PostgreSQL", "GraphQL", "AWS", "Docker", "Redis", "Socket.io"],
    liveUrl: "https://launchpad-platform.vercel.app",
    githubUrl: "https://github.com/yassin549/launchpad",
    metrics: [
      { label: "Funding Facilitated", value: "$50M+", description: "Total funding raised" },
      { label: "Startups Connected", value: "500+", description: "Successful matches made" },
      { label: "Success Rate", value: "35%", description: "Funding success rate" },
      { label: "Platform Uptime", value: "99.9%", description: "Reliable performance" },
    ],
    features: [
      {
        title: "Smart Matching Algorithm",
        description:
          "AI-driven algorithm that analyzes startup profiles, investor preferences, industry focus, and historical success patterns to create optimal matches between entrepreneurs and investors.",
        image: "/matching-algorithm-interface.png",
        technologies: ["Machine Learning", "Graph Algorithms", "Python"],
      },
      {
        title: "Due Diligence Suite",
        description:
          "Comprehensive tools for investors to evaluate startup potential including financial analysis, market research, team assessment, and risk evaluation with automated reporting.",
        image: "/due-diligence-dashboard.png",
        technologies: ["React", "D3.js", "Financial APIs"],
      },
      {
        title: "Mentorship Network",
        description:
          "Connect with experienced entrepreneurs, industry experts, and successful founders through structured mentorship programs, group sessions, and one-on-one guidance.",
        image: "/mentorship-network.png",
        technologies: ["Socket.io", "Video SDK", "Calendar API"],
      },
    ],
    testimonial: {
      quote:
        "LaunchPad was instrumental in our Series A success. The platform connected us with the perfect investors who understood our vision, and the mentorship network provided invaluable guidance throughout our journey.",
      author: "Michael Chen",
      role: "Founder & CEO, TechStart Solutions",
      avatar: "/testimonial-michael.png",
    },
    gallery: ["/launchpad-gallery-1.png", "/launchpad-gallery-2.png", "/launchpad-gallery-3.png"],
  },
  "persona-pro": {
    title: "Persona Pro",
    subtitle: "Personal Branding Toolkit for Professionals",
    description:
      "An all-in-one personal branding platform that helps professionals create, manage, and optimize their online presence across multiple channels with AI-powered content suggestions and analytics.",
    heroImage: "/personal-branding-hero.png",
    challenge:
      "Professionals struggle to maintain consistent personal branding across multiple platforms. Creating engaging content, managing social media presence, and tracking brand performance requires significant time and expertise.",
    approach:
      "I developed a comprehensive toolkit that integrates with major social platforms, provides AI-powered content suggestions, and offers brand consistency tools. The platform includes analytics, scheduling, and automated brand monitoring.",
    outcome:
      "Users reported 70% increase in professional opportunities, 45% growth in social media engagement, and 60% time savings in content creation. The platform now serves over 10,000 professionals worldwide.",
    technologies: ["Vue.js", "Nuxt.js", "Design System", "Figma API", "OpenAI API", "Social Media APIs"],
    liveUrl: "https://persona-pro.vercel.app",
    githubUrl: "https://github.com/yassin549/persona-pro",
    metrics: [
      { label: "User Growth", value: "10K+", description: "Active professionals" },
      { label: "Engagement Boost", value: "+45%", description: "Social media growth" },
      { label: "Time Saved", value: "60%", description: "Content creation efficiency" },
      { label: "Opportunities", value: "+70%", description: "Professional opportunities" },
    ],
    features: [
      {
        title: "AI Content Generator",
        description:
          "Generate engaging posts, articles, and social media content tailored to your industry and personal brand voice using advanced AI algorithms and natural language processing.",
        image: "/ai-content-generator.png",
        technologies: ["OpenAI API", "Natural Language Processing", "Vue.js"],
      },
      {
        title: "Brand Consistency Monitor",
        description:
          "Automatically monitor your online presence across platforms, ensuring consistent messaging, visual identity, and professional image with real-time alerts and suggestions.",
        image: "/brand-monitor.png",
        technologies: ["Web Scraping", "Image Recognition", "Brand Analysis"],
      },
      {
        title: "Analytics & Insights",
        description:
          "Comprehensive analytics dashboard showing brand performance, audience growth, engagement metrics, and professional network expansion with actionable insights.",
        image: "/brand-analytics.png",
        technologies: ["Chart.js", "Social Media APIs", "Data Analytics"],
      },
    ],
    testimonial: {
      quote:
        "Persona Pro transformed my professional presence. The AI content suggestions are spot-on, and the brand monitoring helped me land three major consulting contracts this year.",
      author: "Dr. Emily Rodriguez",
      role: "Marketing Consultant & Speaker",
      avatar: "/testimonial-emily.png",
    },
    gallery: ["/persona-pro-gallery-1.png", "/persona-pro-gallery-2.png", "/persona-pro-gallery-3.png"],
  },
  bistrobelle: {
    title: "BistroBelle",
    subtitle: "Complete Restaurant Management System",
    description:
      "A comprehensive restaurant management solution featuring POS integration, inventory management, staff scheduling, and customer relationship tools designed for modern dining establishments.",
    heroImage: "/restaurant-management-hero.png",
    challenge:
      "Restaurants struggle with fragmented systems for orders, inventory, staff management, and customer service. This leads to inefficiencies, increased costs, and poor customer experiences.",
    approach:
      "I created an integrated ecosystem that combines POS functionality, real-time inventory tracking, staff management, and customer analytics in one seamless platform. The system works across mobile and desktop devices.",
    outcome:
      "Restaurants using BistroBelle reported 30% reduction in food waste, 25% improvement in order accuracy, and 40% increase in customer retention. The system now powers over 200 restaurants.",
    technologies: ["React Native", "Node.js", "Firebase", "Stripe", "Real-time Database", "Push Notifications"],
    liveUrl: "https://bistrobelle-demo.vercel.app",
    githubUrl: "https://github.com/yassin549/bistrobelle",
    metrics: [
      { label: "Restaurants Served", value: "200+", description: "Active establishments" },
      { label: "Food Waste Reduction", value: "-30%", description: "Inventory optimization" },
      { label: "Order Accuracy", value: "+25%", description: "Improved precision" },
      { label: "Customer Retention", value: "+40%", description: "Loyalty improvement" },
    ],
    features: [
      {
        title: "Integrated POS System",
        description:
          "Complete point-of-sale solution with order management, payment processing, receipt printing, and real-time synchronization across all devices and locations.",
        image: "/pos-system.png",
        technologies: ["React Native", "Stripe API", "Thermal Printing"],
      },
      {
        title: "Smart Inventory Management",
        description:
          "Automated inventory tracking with low-stock alerts, supplier management, cost analysis, and waste reduction recommendations based on historical data and trends.",
        image: "/inventory-management.png",
        technologies: ["Firebase", "Machine Learning", "Barcode Scanning"],
      },
      {
        title: "Customer Analytics & Loyalty",
        description:
          "Comprehensive customer relationship management with purchase history, preferences tracking, loyalty programs, and personalized marketing campaigns.",
        image: "/customer-analytics.png",
        technologies: ["Analytics SDK", "Push Notifications", "Email Marketing"],
      },
    ],
    testimonial: {
      quote:
        "BistroBelle revolutionized our restaurant operations. The integrated system eliminated our paper-based processes and the analytics helped us increase profits by 20% in just six months.",
      author: "Marco Antonelli",
      role: "Owner, Bella Vista Restaurant",
      avatar: "/testimonial-marco.png",
    },
    gallery: ["/bistrobelle-gallery-1.png", "/bistrobelle-gallery-2.png", "/bistrobelle-gallery-3.png"],
  },
  gleamjewels: {
    title: "GleamJewels",
    subtitle: "Luxury Jewelry E-commerce with AR Try-On",
    description:
      "A premium jewelry e-commerce platform featuring augmented reality try-on technology, 3D product visualization, and luxury shopping experience designed for high-end jewelry brands.",
    heroImage: "/luxury-jewelry-hero.png",
    challenge:
      "Luxury jewelry purchases require confidence and trust, but online shopping lacks the tactile experience. Customers hesitate to buy expensive items without seeing how they look when worn.",
    approach:
      "I implemented cutting-edge AR technology allowing customers to virtually try on jewelry using their device camera. Combined with 3D product visualization, detailed craftsmanship videos, and luxury UX design.",
    outcome:
      "The platform achieved 55% increase in conversion rates, 80% reduction in returns, and 90% customer satisfaction. Average order value increased by 35% compared to traditional jewelry e-commerce.",
    technologies: ["Three.js", "WebXR", "AR.js", "Shopify Plus", "3D Modeling", "WebGL"],
    liveUrl: "https://gleamjewels-demo.vercel.app",
    githubUrl: "https://github.com/yassin549/gleamjewels",
    metrics: [
      { label: "Conversion Rate", value: "+55%", description: "Purchase conversion" },
      { label: "Return Reduction", value: "-80%", description: "Fewer returns" },
      { label: "Customer Satisfaction", value: "90%", description: "Happy customers" },
      { label: "Average Order Value", value: "+35%", description: "Higher purchases" },
    ],
    features: [
      {
        title: "AR Virtual Try-On",
        description:
          "Revolutionary augmented reality technology that allows customers to see how jewelry looks on them in real-time using their smartphone or computer camera with accurate sizing and lighting.",
        image: "/ar-try-on.png",
        technologies: ["WebXR", "AR.js", "Computer Vision", "3D Rendering"],
      },
      {
        title: "3D Product Visualization",
        description:
          "Interactive 3D models of jewelry pieces with 360-degree rotation, zoom capabilities, and detailed material visualization showing diamonds, gold, and precious stones in photorealistic quality.",
        image: "/3d-visualization.png",
        technologies: ["Three.js", "WebGL", "3D Modeling", "PBR Materials"],
      },
      {
        title: "Luxury Shopping Experience",
        description:
          "Premium user interface with elegant animations, personalized recommendations, virtual showroom tours, and white-glove customer service integration for high-end shopping experience.",
        image: "/luxury-experience.png",
        technologies: ["Framer Motion", "Luxury UI/UX", "Personalization"],
      },
    ],
    testimonial: {
      quote:
        "GleamJewels' AR try-on feature is a game-changer. Our customers can now confidently purchase expensive pieces online, and our return rate dropped dramatically. It's like having a virtual jewelry store.",
      author: "Isabella Rossi",
      role: "Creative Director, Rossi Fine Jewelry",
      avatar: "/testimonial-isabella.png",
    },
    gallery: ["/gleamjewels-gallery-1.png", "/gleamjewels-gallery-2.png", "/gleamjewels-gallery-3.png"],
  },
  taskmaster: {
    title: "TaskMaster",
    subtitle: "Advanced Project Management & Team Collaboration",
    description:
      "A comprehensive project management platform with real-time collaboration, advanced analytics, resource management, and AI-powered project insights for modern teams and organizations.",
    heroImage: "/project-management-hero.png",
    challenge:
      "Teams struggle with fragmented project management tools, poor communication, and lack of real-time visibility into project progress. Traditional tools often lack the flexibility needed for modern workflows.",
    approach:
      "I built a unified platform combining project planning, real-time collaboration, resource management, and AI-powered insights. The system adapts to different methodologies (Agile, Kanban, Waterfall) and scales from small teams to enterprise.",
    outcome:
      "Organizations using TaskMaster reported 45% improvement in project delivery times, 60% better team collaboration, and 35% increase in project success rates. The platform now manages over $100M in project value.",
    technologies: ["TypeScript", "React", "GraphQL", "Node.js", "PostgreSQL", "Redis", "WebSocket", "AI/ML"],
    liveUrl: "https://taskmaster-demo.vercel.app",
    githubUrl: "https://github.com/yassin549/taskmaster",
    metrics: [
      { label: "Delivery Improvement", value: "+45%", description: "Faster project completion" },
      { label: "Team Collaboration", value: "+60%", description: "Better teamwork" },
      { label: "Success Rate", value: "+35%", description: "Project success" },
      { label: "Project Value", value: "$100M+", description: "Managed project value" },
    ],
    features: [
      {
        title: "Real-time Collaboration Hub",
        description:
          "Live collaboration workspace with instant messaging, video calls, screen sharing, document collaboration, and real-time project updates keeping all team members synchronized.",
        image: "/collaboration-hub.png",
        technologies: ["WebSocket", "WebRTC", "Real-time Sync", "Video SDK"],
      },
      {
        title: "AI-Powered Project Insights",
        description:
          "Machine learning algorithms analyze project data to predict risks, suggest optimizations, identify bottlenecks, and provide intelligent recommendations for better project outcomes.",
        image: "/ai-insights.png",
        technologies: ["Machine Learning", "Predictive Analytics", "Data Science"],
      },
      {
        title: "Advanced Resource Management",
        description:
          "Comprehensive resource allocation with capacity planning, skill matching, workload balancing, and automated scheduling to optimize team productivity and project efficiency.",
        image: "/resource-management.png",
        technologies: ["Optimization Algorithms", "Resource Planning", "Analytics"],
      },
    ],
    testimonial: {
      quote:
        "TaskMaster transformed how our development team works. The AI insights helped us identify bottlenecks we didn't even know existed, and our project delivery improved by 50%. It's indispensable now.",
      author: "David Kim",
      role: "Engineering Manager, TechCorp Solutions",
      avatar: "/testimonial-david.png",
    },
    gallery: ["/taskmaster-gallery-1.png", "/taskmaster-gallery-2.png", "/taskmaster-gallery-3.png"],
  },
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}

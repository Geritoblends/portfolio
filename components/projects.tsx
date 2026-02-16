"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import { ProjectDetail } from "./project-detail"

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  status: "completed" | "demo" | "in-progress"
  url?: string
  github?: string
  details: {
    overview: string
    challenges: string[]
    solutions: string[]
    features: string[]
    techStack: string[]
  }
}

const projects: Project[] = [
  {
    id: "acapulconexion",
    title: "Acapulconexion Website",
    description: "Professional website for a lodging agency in Acapulco with booking system and property management.",
    longDescription:
      "A comprehensive web solution for Acapulconexion, a lodging agency in Acapulco. The website features a modern design, property listings, booking system, and admin dashboard for managing reservations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Firestore"],
    status: "completed",
    url: "https://www.acapulconexion.com",
    details: {
      overview:
        "Acapulconexion needed a modern, professional website to showcase their properties and manage bookings efficiently. The project required a user-friendly interface for customers and a robust admin system for property management.",
      challenges: [
        "Real-time booking system with availability checking",
        "Image optimization for property galleries",
        "Mobile-responsive design for tourist accessibility",
        "Integration with payment processing",
      ],
      solutions: [
        "Implemented Firebase Firestore for real-time data synchronization",
        "Used Next.js Image component for optimized loading",
        "Created responsive design with Tailwind CSS",
        "Integrated secure payment gateway",
      ],
      features: [
        "Property search and filtering",
        "Real-time availability calendar",
        "Secure booking system",
        "Admin dashboard for property management",
        "Mobile-optimized interface",
        "Multi-language support",
      ],
      techStack: ["Next.js 13", "TypeScript", "Tailwind CSS", "Firebase Auth", "Firestore", "Vercel"],
    },
  },
  {
    id: "acapulcokingdom",
    title: "Acapulcokingdom Website",
    description: "Similar lodging agency website with enhanced features and improved user experience.",
    longDescription:
      "Building on the success of Acapulconexion, this project enhanced the lodging agency concept with improved UX, better performance, and additional features for property management.",
    technologies: ["Next.js", "TypeScript", "shadcn/ui", "Firebase", "Redux Toolkit"],
    status: "completed",
    url: "https://www.acapulcokingdom.com",
    details: {
      overview:
        "Acapulcokingdom required a more sophisticated platform with enhanced user experience and advanced property management features. This project built upon lessons learned from the previous lodging website.",
      challenges: [
        "Complex state management for booking flows",
        "Advanced search and filtering capabilities",
        "Performance optimization for large property datasets",
        "Enhanced admin analytics dashboard",
      ],
      solutions: [
        "Implemented Redux Toolkit for complex state management",
        "Created advanced search with multiple filters",
        "Optimized database queries and implemented caching",
        "Built comprehensive analytics with charts and insights",
      ],
      features: [
        "Advanced property search with map integration",
        "Enhanced booking flow with multiple payment options",
        "Comprehensive admin analytics",
        "Customer review and rating system",
        "Automated email notifications",
        "SEO optimization for better visibility",
      ],
      techStack: ["Next.js 14", "TypeScript", "shadcn/ui", "Firebase", "Redux Toolkit", "Hostinger"],
    },
  },
  {
    id: "cottage-app",
    title: "Cottage App Landing Page",
    description: "Frontend for a cottage food delivery app with modern design and responsive layout.",
    longDescription:
      "A landing page for a cottage food delivery application that sparked my interest in backend development. Though the full app was not completed, the frontend showcases modern web development practices.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "demo",
    url: "https://cottageapp.vercel.app",
    details: {
      overview:
        "Cottage App was conceived as a food delivery platform for cottage food operators. While the full application was not completed, the landing page demonstrates modern frontend development techniques and sparked my interest in backend systems.",
      challenges: [
        "Creating an engaging landing page design",
        "Implementing smooth animations and transitions",
        "Responsive design across all devices",
        "Performance optimization for fast loading",
      ],
      solutions: [
        "Used Framer Motion for smooth animations",
        "Implemented responsive design with Tailwind CSS",
        "Optimized images and assets for performance",
        "Created modular component architecture",
      ],
      features: [
        "Modern, engaging landing page design",
        "Smooth scroll animations",
        "Responsive mobile-first design",
        "Fast loading performance",
        "SEO-optimized structure",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    },
  },
  {
    id: "spine-mmo",
    title: "Spine - Modular MMO Client",
    description: "Revolutionary modular MMO client using WASM plugins for connecting to any multiplayer game server.",
    longDescription:
      "An ambitious project to create a universal MMO client that can connect to any multiplayer game through a plugin architecture. This addresses the centralization issues in current metaverse platforms.",
    technologies: ["Rust", "WASM", "Tokio", "wasmtime", "wasmi"],
    status: "in-progress",
    github: "https://github.com/Geritoblends/mmo_spine",
    details: {
      overview:
        "Spine aims to solve the centralization problem in current metaverse platforms by creating a modular client that can connect to any multiplayer game server through plugins. This allows developers to maintain control over their games while providing users with seamless transitions between different gaming experiences.",
      challenges: [
        "Implementing secure WASM sandboxing for plugins",
        "Creating a universal plugin interface",
        "Handling real-time networking for different game protocols",
        "Ensuring performance with hot-swappable code",
        "Building cross-platform compatibility",
      ],
      solutions: [
        "Using wasmtime for JIT compilation and wasmi for mobile fallback",
        "Designing a core-consumer architecture for plugin systems",
        "Implementing Tokio for high-performance async networking",
        "Creating Rust macros to simplify plugin development",
        "Building modular architecture with clear separation of concerns",
      ],
      features: [
        "Hot-swappable WASM plugins",
        "Universal game server connectivity",
        "High-performance networking with Tokio",
        "Secure sandboxed plugin execution",
        "Cross-platform compatibility",
        "Developer-friendly plugin API",
      ],
      techStack: ["Rust", "WASM", "Tokio", "wasmtime", "wasmi", "Custom Plugin System"],
    },
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  if (selectedProject) {
    return (
      <section id="projects" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" onClick={() => setSelectedProject(null)} className="mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Button>
          <ProjectDetail project={selectedProject} />
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            A showcase of my work ranging from commercial websites to cutting-edge systems programming
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="group-hover:text-accent transition-colors">{project.title}</CardTitle>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                  </div>
                  <Badge
                    variant={
                      project.status === "completed" ? "default" : project.status === "demo" ? "secondary" : "outline"
                    }
                    className="ml-2"
                  >
                    {project.status === "completed" ? "Live" : project.status === "demo" ? "Demo" : "In Progress"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={() => setSelectedProject(project)} variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    {project.url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-balance">
              Hi, I'm <span className="text-accent">Gerónimo Sotelo López</span>
            </h1>
            <p className="text-xl sm:text-2xl text-secondary max-w-3xl mx-auto text-pretty">
              Computer Science Student at Tecnológico de Monterrey, specializing in{" "}
              <span className="text-accent font-semibold">TypeScript</span> and{" "}
              <span className="text-accent font-semibold">Rust</span> development
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToProjects} size="lg" className="bg-accent hover:bg-accent/90">
              View My Projects
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.github.com/Geritoblends" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/geronimo-sotelo/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:geronimosotelolopez@gmail.com">
                  <Mail size={20} />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">3rd</div>
              <div className="text-secondary">Semester</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">3+</div>
              <div className="text-secondary">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">2</div>
              <div className="text-secondary">Main Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

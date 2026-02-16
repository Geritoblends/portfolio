import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "./projects"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
          <Badge
            variant={project.status === "completed" ? "default" : project.status === "demo" ? "secondary" : "outline"}
          >
            {project.status === "completed" ? "Live" : project.status === "demo" ? "Demo" : "In Progress"}
          </Badge>
        </div>
        <p className="text-lg text-secondary max-w-3xl mx-auto">{project.longDescription}</p>

        <div className="flex gap-4 justify-center">
          {project.url && (
            <Button asChild>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                View Live Site
              </a>
            </Button>
          )}
          {project.github && (
            <Button variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-secondary leading-relaxed">{project.details.overview}</p>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid md:grid-cols-2 gap-3">
            {project.details.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-secondary">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Challenges & Solutions */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Challenges</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.details.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-secondary text-sm">{challenge}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Solutions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.details.solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-secondary text-sm">{solution}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Tech Stack */}
      <Card>
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.details.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

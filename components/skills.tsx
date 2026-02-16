import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skills = {
    "Programming Languages": ["TypeScript", "Rust", "JavaScript"],
    Frontend: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    Mobile: ["Expo", "React Native"],
    "Backend & Database": ["Firebase", "Firestore", "RTDB", "PostgreSQL", "MongoDB"],
    "State Management": ["Redux", "Redux Toolkit", "Zustand"],
    "Hosting & Deployment": ["Vercel", "Hostinger"],
    "Systems & Tools": ["Linux", "Neovim", "Bash", "Git"],
    "Currently Learning": ["WASM", "Tokio", "Systems Programming", "MMO Architecture"],
  }

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-accent">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

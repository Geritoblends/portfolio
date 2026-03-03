import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skills = {
    "Programming Languages": ["TypeScript", "Rust", "JavaScript"],
    Frontend: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    Mobile: ["Expo", "React Native"],
    "Backend Frameworks": ["Express.js", "Axum"],
    "Backend & Database": ["Firebase", "Firestore", "RTDB", "PostgreSQL", "MongoDB", "PocketBase", "MariaDB"],
    "Cloud Infrastructure": ["AWS RDS", "AWS EC2"],
    "Hosting & Deployment": ["Vercel", "Hostinger", "Cloudflare Tunnels", "Tailscale Funnels", "ZeroTier P2P Mesh VPN", "Nginx", "Dokku", "Docker", "Cloudflare DNS"],
    "Systems & Tools": ["Linux", "Neovim", "Bash", "Git", "SSH", "Rclone", "Rsync", "Systemd"],
    "AI & Machine Learning": ["LanceDB (vector database)", "BAAI-bge-small (embeddings transformer)"],
    "Currently Learning": ["WASM", "Tokio", "Systems Programming", "MMO Architecture"],
  }

  return (
    <>
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

      <section id="projects" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="bg-muted p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4 text-accent">Semantic Grocery Product Search</h3>
            <p className="text-gray-700 mb-4">
              Developed a system for semantically searching grocery products using text embeddings and a vector database.
            </p>
            <a href="https://github.com/Geritoblends/product_search" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

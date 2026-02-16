export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-secondary leading-relaxed">
              I'm a third-semester Computer Science student at Tecnológico de Monterrey campus Cuernavaca, passionate
              about building innovative solutions with modern technologies.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              My journey in programming has led me to specialize in{" "}
              <span className="text-accent font-semibold">TypeScript</span> for web development and{" "}
              <span className="text-accent font-semibold">Rust</span> for systems programming. I've successfully
              delivered real-world projects for lodging agencies in Acapulco and am currently working on cutting-edge
              MMO client technology.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Beyond coding, I'm experienced with Linux systems, productivity tools, and network administration. I
              believe in continuous learning and pushing the boundaries of what's possible with technology.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>📍 Cuernavaca, Mexico</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>🎓 Tecnológico de Monterrey</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>💻 Full-Stack Developer</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>🦀 Rust Enthusiast</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>🐧 Linux User</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

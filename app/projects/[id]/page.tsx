import { notFound } from "next/navigation"
import { getProjectById, projects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle2, AlertTriangle, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const project = getProjectById(resolvedParams.id)
  
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Rackan Abughazal`,
    description: project.shortDescription,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const project = getProjectById(resolvedParams.id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card/50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 bg-secondary overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 -mt-24 relative z-10">
        <div className="space-y-8">
          {/* Title Section */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Calendar className="w-4 h-4" />
                {project.year}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">
                  Project Visuals
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.gallery.map((item, index) => (
                    <figure key={index} className="space-y-2">
                      <div className="inline-block rounded-lg border bg-secondary p-2">
                        <Image
                          src={item.src}
                          alt={item.caption ?? `${project.title} visual ${index + 1}`}
                          width={900}
                          height={600}
                          className="h-auto w-auto max-w-full"
                        />
                      </div>
                      {item.caption && (
                        <figcaption className="text-sm text-muted-foreground leading-snug">
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}

                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 mt-6">
              {project.github && (
                <Button variant="outline" className="gap-2 bg-transparent" asChild>
                  <Link href={project.github} target="_blank">
                    <Github className="w-4 h-4" />
                    View Code
                  </Link>
                </Button>
              )}
              {project.demo && (
                <Button className="gap-2" asChild>
                  <Link href={project.demo} target="_blank">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm py-1.5 px-3">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features, Challenges, Outcomes Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Features */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-semibold">Key Features</h2>
              </div>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-semibold">Challenges</h2>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Trophy className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-semibold">Outcomes</h2>
              </div>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center pb-12">
            <Button variant="outline" className="gap-2 bg-transparent" asChild>
              <Link href="/#projects">
                <ArrowLeft className="w-4 h-4" />
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

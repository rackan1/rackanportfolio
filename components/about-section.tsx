import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Zap, Users } from "lucide-react"

const experiences = [
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "B.Eng. Mechatronics Engineering",
    description: "McMaster University, Hamilton",
    period: "2021 - 2026"
  },
  {
    icon: Briefcase,
    title: "Current Role",
    subtitle: "Mechatronics Engineering Intern",
    description: "Veoneer Canada Safety Systems",
    period: "2024 - 2025"
  },
  {
    icon: Zap,
    title: "Previous Role",
    subtitle: "Power Systems Engineer Intern",
    description: "Eastenghouse Inc.",
    period: "2023"
  },
  {
    icon: Users,
    title: "Leadership",
    subtitle: "Software Engineer Team Lead",
    description: "Power in Community Project",
    period: "2022"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bridging the Gap Between
              <span className="text-primary"> Hardware & Software</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a Mechatronics Engineering student at McMaster University with hands-on experience 
                in automotive safety systems, power distribution, and industrial automation. My passion 
                lies in creating intelligent systems where mechanical precision meets embedded intelligence.
              </p>
              <p>
                At Veoneer Canada Safety Systems, I led the design of advanced safety sensor fixtures for 
                Tesla&apos;s CyberCab program and developed automation tools that achieved a 30x efficiency 
                gain in report generation. I also drove a 42% reduction in production downtime through 
                PLC reprogramming and comprehensive statistical analyses.
              </p>
              <p>
                My experience spans from designing power distribution architectures for critical healthcare 
                infrastructure to developing ergonomic assistive devices. I thrive at the intersection of 
                real-time control systems, robotics, and embedded systems.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="p-5 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-3">
                  <exp.icon className="w-5 h-5" />
                </div>
                <p className="text-xs text-primary font-medium mb-1">{exp.period}</p>
                <h3 className="font-semibold mb-1">{exp.subtitle}</h3>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

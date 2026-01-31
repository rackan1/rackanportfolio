import { Badge } from "@/components/ui/badge"
import { Code, Cpu, Wrench, Zap, FileText, CircuitBoard } from "lucide-react"

const skillCategories = [
  {
    title: "Programming & Software",
    icon: Code,
    skills: ["Python", "C#", "C/C++", "MATLAB", "Simulink"]
  },
  {
    title: "Hardware & Systems",
    icon: CircuitBoard,
    skills: ["Microcontrollers", "PLC Programming", "PLC Troubleshooting", "Validation Testing"]
  },
  {
    title: "Engineering Tools",
    icon: Wrench,
    skills: ["SolidWorks", "Autodesk Inventor", "SKM Power Tools", "Microsoft Office"]
  },
  {
    title: "Control Systems",
    icon: Cpu,
    skills: ["Predictive Control", "Real-Time Control", "Embedded Systems", "Robotics"]
  },
  {
    title: "Automation",
    icon: Zap,
    skills: ["Industrial Automation", "Data Parsing", "Process Optimization", "CPK Analysis", "Gage R&R"]
  },
  {
    title: "Professional",
    icon: FileText,
    skills: ["Technical Reports", "Design Proposals", "Client Communication", "Team Leadership"]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning embedded systems, industrial automation, and control systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
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

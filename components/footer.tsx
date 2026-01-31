import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">RA</span>
          </div>
          <span className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Rackan Abughazal. All rights reserved.
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            href="https://linkedin.com/in/rackan-abughazal" 
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link 
            href="mailto:rackan.abughazal10@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

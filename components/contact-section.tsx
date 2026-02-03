"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, FileText, Linkedin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      })

      if (!res.ok) throw new Error()

      toast({
        title: "Message sent",
        description: "I’ll get back to you within 24–48 hours.",
      })

      e.currentTarget.reset()
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email me directly.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <Link
                  href="mailto:rackan.abughazal10@gmail.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  rackan.abughazal10@gmail.com
                </Link>
              </div>
            </div>

            {/* Resume */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Resume</h3>
                <Link
                  href="/2026_reume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  View / Download Resume
                </Link>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">LinkedIn</h3>
                <Link
                  href="https://linkedin.com/in/rackan-abughazal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  View LinkedIn Profile
                </Link>
              </div>
            </div>

            
          </div>

          {/* Contact Form */}
          <form
            className="md:col-span-3 space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium mb-2 block"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium mb-2 block"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="text-sm font-medium mb-2 block"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium mb-2 block"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full gap-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

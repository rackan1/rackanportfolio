"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
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
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <Link 
                  href="tel:+14163156089" 
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  +1 (416) 315-6089
                </Link>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">Toronto / Hamilton, ON</p>
              </div>
            </div>
            
            <div className="p-4 rounded-lg border border-border bg-card">
              <p className="text-sm text-muted-foreground">
                I typically respond within 24-48 hours. For urgent inquiries, feel free to call or connect on LinkedIn.
              </p>
            </div>
          </div>
          
          <form className="md:col-span-3 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-2 block">Name</label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  className="bg-card border-border"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-card border-border"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="text-sm font-medium mb-2 block">Subject</label>
              <Input 
                id="subject" 
                placeholder="Project inquiry" 
                className="bg-card border-border"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="text-sm font-medium mb-2 block">Message</label>
              <Textarea 
                id="message" 
                placeholder="Tell me about your project..." 
                rows={5}
                className="bg-card border-border resize-none"
              />
            </div>
            
            <Button type="submit" className="w-full gap-2">
              Send Message
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

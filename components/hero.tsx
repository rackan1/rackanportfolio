"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">

      {/* BACKGROUND GIF */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.gif"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-black/40" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-14 items-start">

          {/* PROFILE IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-56 h-56 rounded-full overflow-hidden ring-2 ring-white/20 shadow-[0_0_40px_rgba(0,255,200,0.15)]">
              <Image
                src="/profile.png"
                alt="Rackan Abughazal"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* TEXT + SKILLS */}
          <div className="drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">

            {/* NAME */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-6">
              Rackan
              <span className="block text-primary mt-1">
                Abughazal
              </span>
            </h1>

            {/* TITLE */}
            <p className="text-lg md:text-xl text-muted-foreground mb-2">
              Mechatronics Engineer
            </p>

            {/* ABOUT */}
            <p className="text-foreground mb-10">
              McMaster University · Graduating April 2026
              <br />
              Automation · Embedded Systems · Robotics
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-14">
              <Button asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>

            {/* SKILLS */}
            <div>
              <h3 className="text-lg font-semibold mb-6">
                Skills
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-5">
                <Skill icon="devicon-python-plain" label="Python" />
                <Skill icon="devicon-cplusplus-plain" label="C++" />
                <Skill icon="devicon-csharp-plain" label="C#" />
                <Skill icon="devicon-javascript-plain" label="JavaScript" />
                <Skill icon="devicon-typescript-plain" label="TypeScript" />
                <Skill icon="devicon-nodejs-plain" label="Node.js" />
                <Skill icon="devicon-react-original" label="React" />
                <Skill icon="devicon-mongodb-plain" label="MongoDB" />
                <Skill icon="devicon-mysql-plain" label="SQL" />
                <Skill icon="devicon-amazonwebservices-plain" label="AWS" />
                <Skill icon="devicon-arduino-plain" label="Embedded Systems" />
                <Skill icon="devicon-matlab-plain" label="MATLAB" />

                {/* Custom icons */}
                <CustomSkill src="/verilog.png" label="Verilog" />
                <CustomSkill src="/linux.png" label="Linux" />
                <CustomSkill src="/simu.png" label="Simulink" />
                <CustomSkill src="/solid.png" label="SolidWorks" />
                <CustomSkill src="/micro.png" label="Microcontrollers" />
                <CustomSkill src="/plc.png" label="PLC Programming" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Helpers ---------- */

function Skill({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-foreground hover:text-foreground transition">
      <i className={`${icon} colored text-2xl`} />
      <span className="text-sm">{label}</span>
    </div>
  )
}

function CustomSkill({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-foreground hover:text-foreground transition">
      <img src={src} alt={label} className="w-6 h-6" />
      <span className="text-sm">{label}</span>
    </div>
  )
}

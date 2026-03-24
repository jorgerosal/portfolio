import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { heroHighlights, profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      id="home"
      className="section-shell relative overflow-hidden border-b border-line"
      aria-label="Intro"
    >
      <div className="technical-pattern absolute inset-0 opacity-40" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-accent-soft/75 to-transparent" />
      <div className="absolute left-[-5rem] top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-10 right-[-4rem] h-48 w-48 rounded-full bg-[#cfe0da] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1.18fr)_420px] lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">
            {profile.name}
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
            {profile.title}
          </h1>
          <p className="mt-4 text-lg font-medium text-accent sm:text-xl">
            {profile.subtitle}
          </p>
          <p className="mt-8 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
            {profile.heroHeadline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {profile.heroText}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Contact Jorge
              <ArrowUpRight size={16} className="cta-arrow" />
            </Link>
            <Link
              href={profile.cvHref}
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/85 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/30 hover:bg-accent-soft"
            >
              Download CV
              <Download size={16} className="icon-shift" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 rounded-[1.9rem] border border-line technical-panel p-5 shadow-card sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item.label}
                className="group rounded-[1.35rem] border border-line bg-background/80 p-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    {item.label}
                  </p>
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/70 transition-transform duration-300 group-hover:scale-125" />
                </div>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto max-w-[26rem] rounded-[2.2rem] border border-white/75 technical-panel p-5 shadow-soft backdrop-blur-xl">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-line bg-[#edf2fb]">
              <div className="absolute inset-0 technical-pattern opacity-35" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-accent/15" />
              <Image
                src={profile.imageSrc}
                alt="Portrait of Jorge Rosal Jr."
                width={800}
                height={1000}
                priority
                className="h-full min-h-[32rem] w-full object-cover"
              />
            </div>

            <div className="mt-5 rounded-[1.7rem] border border-line bg-background/82 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted">
                    Senior Profile
                  </p>
                  <p className="text-xl font-semibold text-foreground">
                    {profile.name}
                  </p>
                </div>
                <div className="rounded-full border border-line bg-white/75 px-3 py-1 text-xs font-medium text-foreground">
                  Available to connect
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted">
                Full-stack engineering, automation architecture, analytics
                systems, and technical delivery leadership.
              </p>

              <div className="mt-4 grid gap-3 text-sm text-muted">
                <div className="rounded-2xl border border-line bg-white/70 px-4 py-3">
                  Builds software with a strong business-impact lens.
                </div>
                <div className="rounded-2xl border border-line bg-white/70 px-4 py-3">
                  Comfortable across architecture, implementation, and team
                  execution.
                </div>
                <div className="rounded-2xl border border-line bg-white/70 px-4 py-3">
                  Focused on systems that improve visibility, throughput, and
                  reliability.
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3 py-2 text-xs font-medium text-foreground hover:border-accent/25"
                >
                  <Mail size={14} className="icon-shift" />
                  Email
                </Link>
                <Link
                  href={profile.linkedin}
                  target="_blank"
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3 py-2 text-xs font-medium text-foreground hover:border-accent/25"
                >
                  <Linkedin size={14} className="icon-shift" />
                  LinkedIn
                </Link>
                <Link
                  href={profile.github}
                  target="_blank"
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3 py-2 text-xs font-medium text-foreground hover:border-accent/25"
                >
                  <Github size={14} className="icon-shift" />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

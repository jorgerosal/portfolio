import { ArrowUpRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { heroStats, profile } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-line"
      aria-label="Intro"
    >
      <div className="absolute inset-0 bg-fine-grid bg-[size:36px_36px] opacity-30" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent-soft/70 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1.25fr)_380px] lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-white/75 px-4 py-2 text-sm text-muted shadow-card backdrop-blur">
            <MapPin size={16} className="text-accent" />
            Based in {profile.location}
          </p>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-muted">
            {profile.name}
          </p>
          <h1 className="mt-8 font-display text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
            {profile.title}
          </h1>
          <p className="mt-4 text-lg font-medium text-accent sm:text-xl">
            {profile.subtitle}
          </p>
          <p className="mt-8 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
            {profile.heroHeadline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {profile.heroText}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Contact Jorge
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href={profile.cvHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/80 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/30 hover:bg-accent-soft"
              target="_blank"
            >
              Download CV
              <Download size={16} />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {heroStats.map((stat) => (
              <div
                key={stat}
                className="rounded-full border border-line bg-white/72 px-4 py-2 text-sm text-foreground shadow-card backdrop-blur"
              >
                {stat}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto max-w-sm rounded-[2rem] border border-white/75 bg-white/78 p-5 shadow-soft backdrop-blur-xl">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-[#dfe5f2]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-accent/15" />
              <Image
                src={profile.imageSrc}
                alt="Portrait of Jorge Rosal Jr."
                width={800}
                height={1000}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 rounded-[1.5rem] border border-line bg-background/80 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-muted">
                Senior Profile
              </p>
              <div className="mt-3 space-y-3">
                <div>
                  <p className="text-xl font-semibold text-foreground">
                    {profile.name}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Full-stack engineering, automation architecture, analytics
                    systems, and project delivery leadership.
                  </p>
                </div>
                <div className="grid gap-3 text-sm text-muted">
                  <div className="rounded-2xl border border-line bg-white/70 px-4 py-3">
                    Builds software with a strong business-impact lens.
                  </div>
                  <div className="rounded-2xl border border-line bg-white/70 px-4 py-3">
                    Comfortable across architecture, implementation, and team
                    execution.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A senior engineer focused on dependable systems and practical outcomes."
            description={profile.about}
          />
          <div className="mt-8 max-w-3xl rounded-[1.75rem] border border-line bg-white/72 p-7 shadow-card">
            <p className="text-sm uppercase tracking-[0.24em] text-muted">
              Working Style
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              My approach combines architecture thinking, hands-on delivery,
              and project ownership. I work comfortably across product and
              operational contexts, whether the challenge is integrating
              external APIs, designing reporting systems, or removing manual
              work through automation.
            </p>
            <p className="mt-5 text-base leading-8 text-muted">
              {profile.careerBreak}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="rounded-[1.75rem] border border-line bg-white/80 p-7 shadow-soft">
            <p className="text-sm uppercase tracking-[0.24em] text-muted">
              Profile Details
            </p>
            <div className="mt-6 space-y-4 text-sm text-muted">
              <div className="rounded-2xl border border-line bg-background/80 p-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="mt-1">{profile.location}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-line bg-background/80 p-4">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <Link
                      href={`mailto:${profile.email}`}
                      className="mt-1 inline-block hover:text-foreground"
                    >
                      {profile.email}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-line bg-background/80 p-4">
                <div className="flex items-start gap-3">
                  <Linkedin size={18} className="mt-0.5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <Link
                      href={profile.linkedin}
                      className="mt-1 inline-block hover:text-foreground"
                      target="_blank"
                    >
                      linkedin.com/in/jorge-rosal
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-line bg-background/80 p-4">
                <div className="flex items-start gap-3">
                  <GraduationCap size={18} className="mt-0.5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Education</p>
                    <p className="mt-1">{profile.education}</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

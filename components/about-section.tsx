import { GraduationCap, Heart, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="section-shell border-b border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A systems-minded engineer focused on dependable delivery and operational clarity."
            description={profile.about}
          />
          <div className="mt-8 max-w-3xl rounded-[1.9rem] border border-line technical-panel p-7 shadow-card">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-muted">
                  Working Style
                </p>
                <p className="mt-4 text-base leading-8 text-muted">
                  My approach combines architecture thinking, hands-on delivery, and project ownership. I work comfortably across product and operational contexts, whether the challenge is integrating external APIs, designing reporting systems, or removing manual work through automation.
                </p>
                <p className="mt-5 text-base leading-8 text-muted">
                  {profile.currentFocus}
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-line bg-background/80 p-5">
                <p className="text-sm uppercase tracking-[0.22em] text-muted">
                  Current Direction
                </p>
                <p className="mt-4 text-sm leading-7 text-foreground/85">
                  {profile.careerBreak}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 max-w-3xl rounded-[1.9rem] border border-line technical-panel p-6 shadow-card">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Heart size={18} className="icon-shift" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-muted">
                  Beyond Work
                </p>
                <p className="mt-1 text-base font-medium text-foreground">
                  A small personal note
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-[15px]">
              Outside of engineering, I&apos;m a furparent, and my dogs have
              been beside me through long coding sessions since well before
              &quot;vibe coding&quot; became a buzzword.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-[1.18fr_0.82fr]">
              <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white/78 shadow-card">
                <Image
                  src="/assets/personal/dogs/IMG_0569.JPG"
                  alt="Jorge's dogs beside a laptop during a coding day"
                  width={1200}
                  height={1400}
                  className="h-64 w-full object-cover sm:h-72"
                />
              </div>
              <div className="grid gap-3">
                <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white/78 shadow-card">
                  <Image
                    src="/assets/personal/dogs/IMG_0537.JPG"
                    alt="A dog photo from Jorge's personal collection"
                    width={1200}
                    height={900}
                    className="h-[8.7rem] w-full object-cover sm:h-[10.4rem]"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white/78 shadow-card">
                  <Image
                    src="/assets/personal/dogs/IMG_0624.jpg"
                    alt="A third dog photo showing Jorge's dogs as coding companions"
                    width={1200}
                    height={900}
                    className="h-[8.7rem] w-full object-cover sm:h-[10.4rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="rounded-[1.9rem] border border-line technical-panel p-7 shadow-soft">
            <p className="text-sm uppercase tracking-[0.24em] text-muted">
              Profile Details
            </p>
            <div className="mt-6 space-y-4 text-sm text-muted">
              <div className="rounded-2xl border border-line bg-background/80 p-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="icon-shift mt-0.5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="mt-1">{profile.location}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-line bg-background/80 p-4">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="icon-shift mt-0.5 text-accent" />
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
                  <Linkedin size={18} className="icon-shift mt-0.5 text-accent" />
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
                  <GraduationCap size={18} className="icon-shift mt-0.5 text-accent" />
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

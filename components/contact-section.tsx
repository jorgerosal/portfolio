import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/portfolio";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    icon: Phone,
  },
  {
    label: "Location",
    value: profile.location,
    href: "https://maps.google.com/?q=Cebu%2C%20Philippines",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jorge-rosal",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/jorgerosal",
    href: profile.github,
    icon: Github,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
          <Reveal>
            <div className="rounded-[2rem] border border-line bg-white/78 p-8 shadow-soft sm:p-10">
              <SectionHeading
                eyebrow="Contact"
                title="Open to conversations with recruiters, founders, and teams building meaningful software."
                description="If you need a senior engineer who can move comfortably between product thinking, backend systems, automation, analytics, and technical execution, reach out directly."
              />
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Email Jorge
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  href={profile.linkedin}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-background/80 px-6 py-3.5 text-sm font-medium text-foreground hover:border-accent/30 hover:bg-accent-soft"
                  target="_blank"
                >
                  View LinkedIn
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="rounded-[2rem] border border-line bg-white/72 p-7 shadow-card">
              <p className="text-sm uppercase tracking-[0.24em] text-muted">
                Direct Contact
              </p>
              <div className="mt-6 space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.label === "Location" ? "_blank" : undefined}
                      className="flex items-start gap-4 rounded-[1.5rem] border border-line bg-background/80 p-4 transition-colors hover:border-accent/25 hover:bg-accent-soft/60"
                    >
                      <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-accent shadow-card">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
                          {item.label}
                        </p>
                        <p className="mt-1 text-base text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

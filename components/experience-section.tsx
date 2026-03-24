import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Experience shaped by software delivery, systems design, and operational execution."
            description="The emphasis throughout these roles is consistent: production systems, measurable efficiency gains, and ownership across architecture, implementation, and delivery."
          />
        </Reveal>

        <div className="relative mt-14 space-y-8 before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-gradient-to-b before:from-accent/35 before:via-accent/15 before:to-transparent sm:before:left-8">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.08}>
              <article className={`relative overflow-hidden rounded-[2rem] border p-7 shadow-card sm:ml-16 sm:p-8 ${
                item.emphasis === "transition"
                  ? "border-accent/12 bg-accent-soft/35"
                  : "border-line technical-panel"
              }`}>
                <div className="technical-pattern absolute inset-y-0 right-0 w-40 opacity-25" />
                <span className="absolute left-[-2.6rem] top-10 hidden h-4 w-4 rounded-full border-4 border-background bg-accent sm:block" />
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                        {item.company}
                      </p>
                      {item.emphasis === "transition" ? (
                        <span className="rounded-full border border-accent/15 bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground">
                          Purposeful transition
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
                      {item.summary}
                    </p>
                  </div>
                  <div className="rounded-full border border-line bg-background/80 px-4 py-2 text-sm font-medium text-foreground">
                    {item.period}
                  </div>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="group flex gap-3 rounded-2xl border border-line bg-background/70 px-4 py-4"
                    >
                      <ArrowRight
                        size={16}
                        className="icon-shift mt-1 shrink-0 text-accent"
                      />
                      <p className="text-sm leading-7 text-muted">{highlight}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

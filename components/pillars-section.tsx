import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { NetworkPattern } from "@/components/system-graphics";
import { pillars } from "@/data/portfolio";

export function PillarsSection() {
  return (
    <section className="section-shell border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What I Build"
            title="Engineering systems that improve operations, visibility, and scale."
            description="A concise view of the work areas that have defined my recent experience across SaaS delivery, automation, and data-rich software."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-[1.9rem] border border-line technical-panel p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="absolute right-4 top-4 h-20 w-24 opacity-70">
                    <NetworkPattern />
                  </div>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                    <Icon size={22} className="icon-shift" />
                  </div>
                  <div className="technical-divider mt-6 h-px w-24" />
                  <h3 className="mt-6 max-w-[14rem] font-display text-2xl font-semibold tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted">
                    {pillar.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

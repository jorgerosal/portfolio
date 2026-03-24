import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { pillars } from "@/data/portfolio";

export function PillarsSection() {
  return (
    <section className="border-b border-line">
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
                <article className="group h-full rounded-[1.75rem] border border-line bg-white/72 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground">
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

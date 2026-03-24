import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A practical stack for delivering full product systems."
            description="Grouped by capability for faster review by recruiters, hiring managers, and teams evaluating architecture depth and delivery range."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.title} delay={index * 0.06}>
                <article className="h-full rounded-[1.75rem] border border-line bg-white/72 p-7 shadow-card">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                      {group.title}
                    </h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line bg-background/80 px-4 py-2 text-sm text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

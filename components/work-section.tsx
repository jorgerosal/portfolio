import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/data/portfolio";

const gradients = [
  "from-[#dde6fb] via-[#f6f7fb] to-white",
  "from-[#e4efe9] via-[#f6f7f5] to-white",
  "from-[#e6ebf1] via-[#f6f7fb] to-white",
  "from-[#e7ecef] via-[#f7f8fa] to-white",
];

function AmazonPaapiVisual() {
  return (
    <div className="overflow-hidden rounded-[1.2rem] border border-line bg-[#f5f7fb] p-4">
      <div className="rounded-[1rem] border border-[#d8e0f2] bg-white/90 shadow-card">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              Module
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              amazon-paapi
            </p>
          </div>
          <div className="rounded-full border border-[#d8e0f2] bg-accent-soft px-3 py-1 text-[11px] font-medium text-accent">
            npm package
          </div>
        </div>
        <div className="grid gap-4 p-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1rem] border border-line bg-[#fafbfe] p-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#d56d6d]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#e0b55b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#7ab87a]" />
            </div>
            <div className="mt-4 space-y-3 font-mono text-[11px] leading-6 text-[#334155]">
              <div className="rounded-lg bg-white px-3 py-2">
                <span className="text-accent">import</span> paapi{" "}
                <span className="text-accent">from</span>{" "}
                <span className="text-[#0f172a]">&quot;amazon-paapi&quot;</span>
              </div>
              <div className="rounded-lg bg-white px-3 py-2">
                <span className="text-accent">const</span> client = paapi.
                <span className="text-[#0f172a]">createClient</span>()
              </div>
              <div className="rounded-lg bg-white px-3 py-2">
                client.<span className="text-[#0f172a]">searchItems</span>()
              </div>
              <div className="rounded-lg bg-white px-3 py-2 text-[#64748b]">
                REST patterns • auth handling • response mapping
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-[1rem] border border-line bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Integration Flow
              </p>
              <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-center text-[11px] font-medium text-foreground">
                <div className="rounded-xl border border-line bg-background/80 px-2 py-3">
                  Node.js App
                </div>
                <div className="text-accent">→</div>
                <div className="rounded-xl border border-line bg-background/80 px-2 py-3">
                  PAAPI Wrapper
                </div>
                <div className="text-accent">→</div>
                <div className="rounded-xl border border-line bg-background/80 px-2 py-3">
                  AWS Services
                </div>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1rem] border border-line bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                  Runtime
                </p>
                <div className="mt-3 h-2 rounded-full bg-[#e8edf8]" />
                <div className="mt-2 h-2 w-4/5 rounded-full bg-accent/70" />
                <p className="mt-3 text-xs text-muted">EC2 / Beanstalk</p>
              </div>
              <div className="rounded-[1rem] border border-line bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                  Output
                </p>
                <div className="mt-3 grid gap-2">
                  <div className="h-8 rounded-lg bg-accent/10" />
                  <div className="h-8 rounded-lg bg-foreground/8" />
                </div>
                <p className="mt-3 text-xs text-muted">Catalog workflows</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsPlatformVisual() {
  return (
    <div className="overflow-hidden rounded-[1.2rem] border border-line bg-[#f4f7f5] p-4">
      <div className="rounded-[1rem] border border-[#d8e6db] bg-white/90 shadow-card">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              Internal Platform
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              Multi-source analytics
            </p>
          </div>
          <div className="rounded-full border border-[#d8e6db] bg-[#eef6f1] px-3 py-1 text-[11px] font-medium text-[#2e6d52]">
            1M+ records processed
          </div>
        </div>
        <div className="grid gap-4 p-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="rounded-[1rem] border border-line bg-[#fafcfb] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Data Sources
              </p>
              <div className="mt-4 grid gap-2 text-[11px] font-medium text-foreground">
                <div className="rounded-lg border border-line bg-white px-3 py-2">
                  Sales
                </div>
                <div className="rounded-lg border border-line bg-white px-3 py-2">
                  Inventory
                </div>
                <div className="rounded-lg border border-line bg-white px-3 py-2">
                  Advertising
                </div>
              </div>
            </div>
            <div className="rounded-[1rem] border border-line bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Processing Layer
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 rounded-xl border border-line bg-background/80 px-3 py-3 text-center text-[11px] font-medium text-foreground">
                  Rules Engine
                </div>
                <div className="text-accent">+</div>
                <div className="flex-1 rounded-xl border border-line bg-background/80 px-3 py-3 text-center text-[11px] font-medium text-foreground">
                  Micro-workers
                </div>
              </div>
              <div className="mt-3 rounded-xl border border-dashed border-line bg-[#f7faf8] px-3 py-3 text-center text-[11px] text-muted">
                criteria-based automation • ML-assisted classification • background jobs
              </div>
            </div>
          </div>
          <div className="rounded-[1rem] border border-line bg-[#fbfcfd] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Decision Support View
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-xl border border-line bg-white p-4">
                <div className="flex items-end gap-2">
                  <div className="h-12 w-5 rounded-t-lg bg-accent/25" />
                  <div className="h-20 w-5 rounded-t-lg bg-accent/40" />
                  <div className="h-16 w-5 rounded-t-lg bg-accent/55" />
                  <div className="h-24 w-5 rounded-t-lg bg-accent/75" />
                  <div className="h-14 w-5 rounded-t-lg bg-[#8cb59f]" />
                </div>
                <div className="mt-4 h-2 w-3/4 rounded-full bg-foreground/10" />
              </div>
              <div className="space-y-3">
                <div className="rounded-xl border border-line bg-white p-4">
                  <div className="h-2 w-12 rounded-full bg-[#8cb59f]" />
                  <div className="mt-3 h-10 rounded-xl bg-[#edf5f0]" />
                </div>
                <div className="rounded-xl border border-line bg-white p-4">
                  <div className="h-2 w-10 rounded-full bg-accent/60" />
                  <div className="mt-3 h-10 rounded-xl bg-accent/10" />
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-line bg-white px-3 py-3 text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                  Visibility
                </p>
                <p className="mt-1 text-xs font-medium text-foreground">
                  unified reporting
                </p>
              </div>
              <div className="rounded-xl border border-line bg-white px-3 py-3 text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                  Scale
                </p>
                <p className="mt-1 text-xs font-medium text-foreground">
                  AWS-backed jobs
                </p>
              </div>
              <div className="rounded-xl border border-line bg-white px-3 py-3 text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                  Outcome
                </p>
                <p className="mt-1 text-xs font-medium text-foreground">
                  faster decisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Representative case studies based on production experience."
            description="A focused view of API integrations, internal SaaS systems, analytics platforms, and automation-heavy operational tooling. Each case study is framed to show the system, the problem it addressed, and the business value it created."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.07}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-white/76 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div
                  className={`relative border-b border-line bg-gradient-to-br ${gradients[index]} p-7`}
                >
                  <div className="absolute inset-0 bg-fine-grid bg-[size:24px_24px] opacity-20" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                        {study.label}
                      </p>
                      <h3 className="mt-4 max-w-lg font-display text-2xl font-semibold tracking-tight text-foreground">
                        {study.title}
                      </h3>
                      {"subtitle" in study && study.subtitle ? (
                        <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-muted">
                          {study.subtitle}
                        </p>
                      ) : null}
                    </div>
                    <div className="rounded-full border border-white/70 bg-white/70 p-2 text-accent shadow-card">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  <div className="relative mt-8 rounded-[1.5rem] border border-white/80 bg-white/70 p-5 backdrop-blur">
                    {study.imageSrc ? (
                      <div className="overflow-hidden rounded-[1.2rem] border border-line bg-[#f5f6f8]">
                        <Image
                          src={study.imageSrc}
                          alt={study.imageAlt || study.title}
                          width={1222}
                          height={908}
                          className="h-56 w-full object-contain object-center p-4"
                        />
                      </div>
                    ) : study.title === "Amazon Product Advertising API Integration" ? (
                      <AmazonPaapiVisual />
                    ) : study.title === "Multi-Source Analytics Dashboard Platform" ? (
                      <AnalyticsPlatformVisual />
                    ) : (
                      <div className="grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl border border-line bg-background/70 p-4">
                          <div className="h-2 w-14 rounded-full bg-accent/60" />
                          <div className="mt-4 h-12 rounded-2xl bg-accent/10" />
                        </div>
                        <div className="rounded-2xl border border-line bg-background/70 p-4">
                          <div className="h-2 w-10 rounded-full bg-foreground/30" />
                          <div className="mt-4 h-12 rounded-2xl bg-foreground/10" />
                        </div>
                        <div className="rounded-2xl border border-line bg-background/70 p-4">
                          <div className="h-2 w-16 rounded-full bg-accent/40" />
                          <div className="mt-4 h-12 rounded-2xl bg-accent/15" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                      Summary
                    </p>
                    <p className="mt-3 text-base leading-7 text-muted">
                      {study.summary}
                    </p>
                  </div>
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-line bg-background/80 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                        Scope
                      </p>
                      <p className="mt-3 text-sm leading-7 text-foreground/85">
                        {study.context}
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-line bg-background/80 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                        Outcome
                      </p>
                      <p className="mt-3 text-sm leading-7 text-foreground">
                        {study.impact}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                      Core Stack
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {study.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line bg-background/80 px-3 py-1.5 text-sm text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  {"link" in study && study.link ? (
                    <div className="mt-6">
                      <Link
                        href={study.link}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
                      >
                        {study.linkLabel || "View external reference"}
                        <ExternalLink size={15} />
                      </Link>
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

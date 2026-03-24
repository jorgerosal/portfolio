import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WorkflowMiniGraphic } from "@/components/system-graphics";
import { caseStudies } from "@/data/portfolio";

const gradients = [
  "from-[#dde6fb] via-[#f6f7fb] to-white",
  "from-[#e4efe9] via-[#f6f7f5] to-white",
  "from-[#e6ebf1] via-[#f6f7fb] to-white",
  "from-[#e7ecef] via-[#f7f8fa] to-white",
];

function DashboardShell({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "green" | "slate";
}) {
  const tones = {
    blue: {
      shell: "bg-[#f4f7fc] border-[#d9e1f1]",
      accent: "bg-accent-soft text-accent",
    },
    green: {
      shell: "bg-[#f2f8f4] border-[#d7e6dc]",
      accent: "bg-[#edf6f0] text-[#2e6d52]",
    },
    slate: {
      shell: "bg-[#f4f6f8] border-[#dde3e8]",
      accent: "bg-[#eef2f5] text-[#425063]",
    },
  } as const;

  return (
    <div className={`overflow-hidden rounded-[1.35rem] border p-4 ${tones[tone].shell}`}>
      <div className="overflow-hidden rounded-[1.1rem] border border-line bg-white/95 shadow-card">
        <div className="flex items-center justify-between border-b border-line bg-[#fcfcfd] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e28b8b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e4bf73]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#8abc97]" />
          </div>
          <div className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${tones[tone].accent}`}>
            dashboard view
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

function AmazonPaapiVisual() {
  return (
    <DashboardShell tone="blue">
      <div className="p-4">
        <div className="flex items-center justify-between gap-3 rounded-[1rem] border border-line bg-[#fbfcff] px-4 py-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              amazon-paapi
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              API integration console
            </p>
          </div>
          <div className="rounded-full border border-[#d8e0f2] bg-accent-soft px-3 py-1 text-[11px] font-medium text-accent">
            npm package
          </div>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1rem] border border-line bg-white p-4">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-line bg-background/80 px-3 py-3 text-center text-[11px] font-medium text-foreground">
                Client app
              </div>
              <div className="rounded-xl border border-line bg-background/80 px-3 py-3 text-center text-[11px] font-medium text-foreground">
                Wrapper
              </div>
              <div className="rounded-xl border border-line bg-background/80 px-3 py-3 text-center text-[11px] font-medium text-foreground">
                PA API
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-[#f7f9fd] p-4 font-mono text-[11px] leading-6 text-[#334155]">
              <div className="text-accent">searchItems()</div>
              <div className="mt-2 h-px bg-line" />
              <div className="mt-3">request signing</div>
              <div>response mapping</div>
              <div>catalog workflows</div>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="rounded-[1rem] border border-line bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Delivery View
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-accent/10 p-3">
                  <div className="h-2 w-12 rounded-full bg-accent/50" />
                  <div className="mt-4 h-12 rounded-xl bg-white/70" />
                </div>
                <div className="rounded-xl bg-[#edf5f0] p-3">
                  <div className="h-2 w-12 rounded-full bg-[#8cb59f]" />
                  <div className="mt-4 h-12 rounded-xl bg-white/70" />
                </div>
              </div>
            </div>
            <div className="rounded-[1rem] border border-line bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Runtime
              </p>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="h-2 rounded-full bg-[#e8edf8]" />
                  <div className="mt-[-8px] h-2 w-4/5 rounded-full bg-accent/70" />
                </div>
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>EC2 / Beanstalk</span>
                  <span>API-ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

function AnalyticsPlatformVisual() {
  return (
    <DashboardShell tone="green">
      <div className="p-4">
        <div className="flex items-center justify-between gap-3 rounded-[1rem] border border-line bg-[#fbfdfb] px-4 py-3">
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
        <div className="mt-4 grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-4">
            <div className="rounded-[1rem] border border-line bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Data Sources
              </p>
              <div className="mt-4 space-y-2">
                {["Sales", "Inventory", "Advertising"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-line bg-background/80 px-4 py-3 text-sm font-medium text-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1rem] border border-line bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Processing Layer
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 rounded-xl border border-line bg-background/80 px-3 py-4 text-center text-sm font-medium text-foreground">
                  Rules Engine
                </div>
                <span className="text-accent">+</span>
                <div className="flex-1 rounded-xl border border-line bg-background/80 px-3 py-4 text-center text-sm font-medium text-foreground">
                  Micro-workers
                </div>
              </div>
              <div className="mt-4 rounded-xl border border-dashed border-line bg-[#f7faf8] px-4 py-4 text-center text-xs leading-6 text-muted">
                criteria-based automation
                <br />
                ML-assisted classification
                <br />
                background jobs
              </div>
            </div>
          </div>
          <div className="rounded-[1rem] border border-line bg-[#fbfcfd] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Decision Support View
            </p>
            <div className="mt-4 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-xl border border-line bg-white p-4">
                <div className="flex items-end gap-3">
                  <div className="h-20 w-8 rounded-t-2xl bg-[#c7d1e7]" />
                  <div className="h-32 w-8 rounded-t-2xl bg-[#9dadd8]" />
                  <div className="h-[6.5rem] w-8 rounded-t-2xl bg-[#8397cf]" />
                  <div className="h-[9.5rem] w-8 rounded-t-2xl bg-[#6d83c2]" />
                  <div className="h-24 w-8 rounded-t-2xl bg-[#8bb39a]" />
                </div>
                <div className="mt-6 h-3 rounded-full bg-foreground/10" />
              </div>
              <div className="space-y-3">
                <div className="rounded-xl border border-line bg-white p-4">
                  <div className="h-3 w-16 rounded-full bg-[#8bb39a]" />
                  <div className="mt-4 h-16 rounded-2xl bg-[#edf5f0]" />
                </div>
                <div className="rounded-xl border border-line bg-white p-4">
                  <div className="h-3 w-14 rounded-full bg-accent/60" />
                  <div className="mt-4 h-16 rounded-2xl bg-accent/10" />
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                ["Visibility", "unified reporting"],
                ["Scale", "AWS-backed jobs"],
                ["Outcome", "faster decisions"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-line bg-white px-3 py-4 text-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

function AutomationPipelineVisual() {
  return (
    <div className="overflow-hidden rounded-[1.2rem] border border-line bg-[#f4f7fa] p-4">
      <div className="rounded-[1rem] border border-[#dde4ef] bg-white/90 shadow-card">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              Monitoring Pipeline
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              Distributed checks
            </p>
          </div>
          <div className="rounded-full border border-[#dde4ef] bg-[#eff4fb] px-3 py-1 text-[11px] font-medium text-accent">
            10,000+ daily checks
          </div>
        </div>
        <div className="grid gap-4 p-4 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-[1rem] border border-line bg-[#fafbfd] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Pipeline Path
            </p>
            <div className="mt-4 space-y-3">
              {["Input targets", "Proxy rotation", "Worker queue", "Alert output"].map((step) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-xl border border-line bg-white px-3 py-3 text-[11px] font-medium text-foreground"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
                  {step}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-[1rem] border border-line bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Worker Throughput
              </p>
              <div className="mt-4 flex items-end gap-2">
                {[40, 60, 78, 88, 66].map((height, index) => (
                  <div
                    key={height}
                    className={`w-8 rounded-t-xl ${index === 3 ? "bg-accent/80" : "bg-accent/50"}`}
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-[1rem] border border-line bg-[#fbfcfd] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Orchestration
              </p>
              <WorkflowMiniGraphic className="mt-3 h-16" />
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-white px-3 py-3 text-center text-[11px] font-medium text-foreground">
                  Headless automation
                </div>
                <div className="rounded-xl border border-line bg-white px-3 py-3 text-center text-[11px] font-medium text-foreground">
                  Alert workflows
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RpaVisual() {
  return (
    <div className="overflow-hidden rounded-[1.2rem] border border-line bg-[#f6f7f9] p-4">
      <div className="rounded-[1rem] border border-[#e1e5ea] bg-white/90 shadow-card">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              Back-office Automation
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              RPA order workflows
            </p>
          </div>
          <div className="rounded-full border border-[#e1e5ea] bg-[#f4f6f8] px-3 py-1 text-[11px] font-medium text-[#3d4958]">
            Concurrent workers
          </div>
        </div>
        <div className="grid gap-4 p-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="rounded-[1rem] border border-line bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Workflow Steps
              </p>
              <div className="mt-4 flex items-center justify-between gap-2 text-[11px] font-medium text-foreground">
                {["Capture", "Validate", "Submit", "Confirm"].map((step, index) => (
                  <div key={step} className="flex flex-1 items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-background/80">
                      {index + 1}
                    </div>
                    {index < 3 ? <div className="h-px flex-1 bg-accent/25" /> : null}
                  </div>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-4 text-center text-[10px] uppercase tracking-[0.18em] text-muted">
                <span>Capture</span>
                <span>Rules</span>
                <span>Entry</span>
                <span>Sync</span>
              </div>
            </div>
            <div className="rounded-[1rem] border border-line bg-[#fafbfc] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Worker Lanes
              </p>
              <div className="mt-4 space-y-3">
                {[72, 58, 84].map((width, index) => (
                  <div key={width} className="rounded-xl border border-line bg-white p-3">
                    <div className="h-2 rounded-full bg-foreground/8" />
                    <div
                      className={`mt-2 h-2 rounded-full ${index === 2 ? "bg-accent/70" : "bg-accent/40"}`}
                      style={{ width: `${width}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-[1rem] border border-line bg-[#fbfcfd] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Process Control
            </p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-xl border border-line bg-white p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-foreground">Supplier portals</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
                </div>
                <div className="mt-3 h-10 rounded-xl bg-accent/10" />
              </div>
              <div className="rounded-xl border border-line bg-white p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-foreground">Order queues</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#7f9bd6]" />
                </div>
                <div className="mt-3 h-10 rounded-xl bg-foreground/8" />
              </div>
              <div className="rounded-xl border border-dashed border-line bg-[#f7f8fa] px-3 py-4 text-center text-[11px] text-muted">
                Rule-driven workflows replacing repetitive entry work
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderStudyVisual(title: string, imageSrc: string | null, imageAlt: string | null) {
  if (imageSrc) {
    return (
      <DashboardShell tone={title === "Amazon Product Advertising API Integration" ? "blue" : "slate"}>
        <div className="bg-[#fbfcfd] p-4">
          <div className="mb-4 flex items-center justify-between rounded-[1rem] border border-line bg-white px-4 py-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Product view
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                Dashboard mockup
              </p>
            </div>
            <div className="rounded-full border border-line bg-background/80 px-3 py-1 text-[11px] font-medium text-muted">
              screenshot
            </div>
          </div>
          <div className="overflow-hidden rounded-[1rem] border border-line bg-[#f5f6f8]">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              width={1222}
              height={908}
              className="h-56 w-full object-contain object-center bg-white p-4"
            />
          </div>
        </div>
      </DashboardShell>
    );
  }

  if (title === "Amazon Product Advertising API Integration") {
    return <AmazonPaapiVisual />;
  }

  if (title === "Multi-Source Analytics Dashboard Platform") {
    return <AnalyticsPlatformVisual />;
  }

  if (title === "High-Volume Workflow Automation Pipeline") {
    return <AutomationPipelineVisual />;
  }

  return <RpaVisual />;
}

export function WorkSection() {
  return (
    <section id="work" className="section-shell border-b border-line">
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
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-line technical-panel shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div
                  className={`relative border-b border-line bg-gradient-to-br ${gradients[index]} p-7`}
                >
                  <div className="technical-pattern absolute inset-0 opacity-20" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                        {study.label}
                      </p>
                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                        {study.category}
                      </p>
                      <h3 className="mt-4 max-w-lg font-display text-2xl font-semibold tracking-tight text-foreground">
                        {study.title}
                      </h3>
                      {study.subtitle ? (
                        <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-muted">
                          {study.subtitle}
                        </p>
                      ) : null}
                    </div>
                    <div className="rounded-full border border-white/70 bg-white/70 p-2 text-accent shadow-card">
                      <ArrowUpRight size={18} className="cta-arrow" />
                    </div>
                  </div>
                  <div className="relative mt-8 rounded-[1.5rem] border border-white/80 bg-white/70 p-5 backdrop-blur">
                    {renderStudyVisual(study.title, study.imageSrc, study.imageAlt)}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {study.metadata.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.2rem] border border-line bg-background/80 px-4 py-4"
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
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
                        className="rounded-full border border-line bg-background/80 px-3 py-1.5 text-sm text-foreground transition-colors duration-300 group-hover:border-accent/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {study.link ? (
                    <div className="mt-6">
                      <Link
                        href={study.link}
                        target="_blank"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
                      >
                        {study.linkLabel || "View external reference"}
                        <ExternalLink size={15} className="icon-shift" />
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

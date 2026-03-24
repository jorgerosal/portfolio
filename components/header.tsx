"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navigation, profile } from "@/data/portfolio";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navigation.map((item) => item.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-line bg-background/88 shadow-card backdrop-blur-xl"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#home" className="group">
          <span className="block font-display text-base font-semibold tracking-tight text-foreground">
            {profile.name}
          </span>
          <span className="text-sm text-muted transition-colors group-hover:text-foreground">
            {profile.title}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm transition-colors ${
                activeSection === item.href
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <span
                className={`absolute -bottom-2 left-0 h-px bg-foreground transition-all duration-300 ${
                  activeSection === item.href ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Let&apos;s Connect
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-full border border-line bg-white/70 p-2 text-foreground lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-line bg-background/95 px-6 py-5 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-4 py-3 text-base transition-colors ${
                  activeSection === item.href
                    ? "bg-accent-soft text-foreground"
                    : "text-foreground hover:bg-accent-soft"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 rounded-2xl bg-foreground px-4 py-3 text-center text-base font-medium text-white"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Connect
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

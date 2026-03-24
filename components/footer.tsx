"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { profile } from "@/data/portfolio";

export function Footer() {
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadCount() {
      try {
        const response = await fetch("/api/visits", { cache: "no-store" });
        const data = (await response.json()) as { count?: number };

        if (isMounted && typeof data.count === "number") {
          setVisitCount(data.count);
        }
      } catch {
        if (isMounted) {
          setVisitCount(3245);
        }
      }
    }

    loadCount();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-muted lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div>
        <p className="font-medium text-foreground">{profile.name}</p>
        <p>{profile.title}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <Link href={`mailto:${profile.email}`} className="hover:text-foreground">
          {profile.email}
        </Link>
        <Link href={profile.linkedin} target="_blank" className="hover:text-foreground">
          LinkedIn
        </Link>
        <Link href={profile.github} target="_blank" className="hover:text-foreground">
          GitHub
        </Link>
        <div className="inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent-soft px-4 py-2.5 text-sm shadow-card">
          <span className="font-medium text-foreground">Page visitor Count:</span>
          <span className="rounded-full bg-white px-3 py-1 font-semibold text-accent shadow-sm">
            {visitCount?.toLocaleString() ?? "3,245"}
          </span>
        </div>
        <p>© {new Date().getFullYear()} Jorge Rosal Jr.</p>
      </div>
    </footer>
  );
}

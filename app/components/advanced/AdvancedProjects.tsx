"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  siReact, siTypescript, siTailwindcss, siTanstack,
  siRedux, siNextdotjs, siNodedotjs, siMongodb,
} from "simple-icons";

gsap.registerPlugin(ScrollTrigger);

type SIObj = { path: string; hex: string };

function iconColor(hex: string) {
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.12 ? "#fff" : `#${hex}`;
}

const PROJECTS = [
  {
    number: "01",
    title: "Challan Management Platform",
    type: "@ Invincible Ocean",
    year: "2025–Present",
    description:
      "Production platform owned across frontend and backend, used by 8–10 client companies and processing approximately 2,000 challans per month. Replaced one-by-one assignment with CSV-driven batch processing for 100–500 challans per operation; largest processed batch: 650. The flow validates CSV columns, uploads and retrieves files through AWS S3, parses mappings, and updates assignments in MongoDB.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS S3"],
    icons: [
      { icon: siReact, hex: siReact.hex },
      { icon: siNodedotjs, hex: siNodedotjs.hex },
      { icon: siMongodb, hex: siMongodb.hex },
    ] as { icon: SIObj; hex: string }[],
  },
  {
    number: "02",
    title: "Loan Management Tool",
    type: "Personal Project",
    year: "2024",
    description:
      "Scalable financial dashboard for loan, payment, and amortization reports — complex computations on large datasets with a three-step file processing workflow.",
    tech: ["React.js", "TypeScript", "TailwindCSS", "TanStack Query", "Zustand"],
    icons: [
      { icon: siReact,       hex: siReact.hex },
      { icon: siTypescript,  hex: siTypescript.hex },
      { icon: siTailwindcss, hex: siTailwindcss.hex },
      { icon: siTanstack,    hex: siTanstack.hex },
    ] as { icon: SIObj; hex: string }[],
  },
  // {
  //   number: "03",
  //   title: "AI Infrastructure Chatbot",
  //   type: "@ Invincible Ocean",
  //   year: "2025",
  //   description:
  //     "AI-driven chatbot interface for querying cloud infrastructure in natural language, with optimized API response parsing and UI rendering.",
  //   tech: ["React", "TypeScript", "Redux", "MUI"],
  //   icons: [
  //     { icon: siReact,      hex: siReact.hex },
  //     { icon: siTypescript, hex: siTypescript.hex },
  //     { icon: siRedux,      hex: siRedux.hex },
  //   ] as { icon: SIObj; hex: string }[],
  // },
];

type Project = typeof PROJECTS[0];

function ProjectRow({ p }: { p: Project }) {
  return (
    <div className="project-row group border-t border-white/8 cursor-default select-none">
      {/* Main row */}
      <div className="flex items-center gap-5 md:gap-8 py-7 px-8 md:px-16">
        <span className="font-mono text-[10px] text-white/18 w-5 shrink-0 tabular-nums">
          {p.number}
        </span>

        <div className="flex-1 min-w-0">
          <h3
            className="text-xl md:text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {p.title}
          </h3>
          <p className="text-[9px] text-white/20 font-mono tracking-[0.15em] mt-1">
            {p.type} &nbsp;·&nbsp; {p.year}
          </p>
        </div>

        {/* Tech tags — desktop only */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          {p.tech.slice(0, 3).map((t) => (
            <span key={t} className="text-[9px] text-white/20 font-mono">
              {t}
            </span>
          ))}
          {p.tech.length > 3 && (
            <span className="text-[9px] text-white/12 font-mono">+{p.tech.length - 3}</span>
          )}
        </div>

        <span className="text-white/18 group-hover:text-white/55 group-hover:translate-x-1.5 transition-all duration-300 shrink-0 text-base">
          →
        </span>
      </div>

      {/* Reveal on hover — CSS grid-rows trick for smooth height animation */}
      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-[380ms] ease-in-out">
        <div className="overflow-hidden">
          <div className="pb-7 px-8 md:px-16 pl-[calc(2rem+1.25rem+1.25rem)] md:pl-[calc(4rem+1.25rem+2rem)]">
            <p className="text-sm text-white/30 max-w-2xl leading-relaxed mb-5">
              {p.description}
            </p>
            {/* Tech icons */}
            <div className="flex flex-wrap gap-2">
              {p.icons.map(({ icon, hex }, i) => {
                const col = iconColor(hex);
                return (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/8"
                    style={{ backgroundColor: `#${hex}12` }}
                  >
                    <svg viewBox="0 0 24 24" width={12} height={12} aria-hidden>
                      <path d={icon.path} fill={col} />
                    </svg>
                    <span className="text-[10px] text-white/32 font-medium">{p.tech[i]}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AdvancedProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".pj-heading", { y: "100%", opacity: 0 });
      ScrollTrigger.create({
        trigger: ".pj-heading-clip",
        start: "top 87%",
        once: true,
        onEnter: () =>
          gsap.to(".pj-heading", { y: 0, opacity: 1, duration: 1.1, ease: "power4.out" }),
      });

      gsap.set(".project-row", { opacity: 0 });
      ScrollTrigger.create({
        trigger: ".pj-list",
        start: "top 82%",
        once: true,
        onEnter: () =>
          gsap.to(".project-row", {
            opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
          }),
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative z-10 pt-28 pb-0 border-t border-white/5"
    >
      <div className="px-8 md:px-16 mb-14">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[10px] text-white/20 font-mono tracking-widest">03</span>
          <span className="text-[10px] text-white/22 uppercase tracking-[0.25em]">Projects</span>
        </div>

        <div className="pj-heading-clip overflow-hidden">
          <h2
            className="pj-heading text-[clamp(2.2rem,4.5vw,5.5rem)] font-bold italic text-white leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Things I&apos;ve Built.
          </h2>
        </div>
      </div>

      {/* Editorial full-width list */}
      <div className="pj-list">
        {PROJECTS.map((p) => <ProjectRow key={p.number} p={p} />)}
        {/* Closing border */}
        <div className="border-t border-white/8" />
      </div>
    </section>
  );
};

export default AdvancedProjects;

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  siHtml5, siCss, siJavascript, siTypescript,
  siReact, siNextdotjs, siTailwindcss, siNodedotjs,
  siExpress, siRedux, siTanstack,
  siGit, siDocker, siMongodb, siGithub, siPostman,
} from "simple-icons";

gsap.registerPlugin(ScrollTrigger);

type SIObj = { path: string; hex: string };

function iconColor(hex: string): string {
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.12 ? "#fff" : `#${hex}`;
}

const ROW1: { name: string; icon: SIObj }[] = [
  { name: "HTML",       icon: siHtml5 },
  { name: "CSS",        icon: siCss },
  { name: "JavaScript", icon: siJavascript },
  { name: "TypeScript", icon: siTypescript },
  { name: "React",      icon: siReact },
  { name: "Next.js",    icon: siNextdotjs },
  { name: "Tailwind",   icon: siTailwindcss },
  { name: "Node.js",    icon: siNodedotjs },
];

const ROW2: { name: string; icon: SIObj }[] = [
  { name: "Express",    icon: siExpress },
  { name: "Redux",      icon: siRedux },
  { name: "TanStack",   icon: siTanstack },
  { name: "Git",        icon: siGit },
  { name: "Docker",     icon: siDocker },
  { name: "MongoDB",    icon: siMongodb },
  { name: "GitHub",     icon: siGithub },
  { name: "Postman",    icon: siPostman },
];

const MarqueeItem = ({ name, icon }: { name: string; icon: SIObj }) => {
  const color = iconColor(icon.hex);
  return (
    <div
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/8 shrink-0 mx-2"
      style={{ backgroundColor: `#${icon.hex}12` }}
    >
      <svg viewBox="0 0 24 24" width={15} height={15} aria-hidden>
        <path d={icon.path} fill={color} />
      </svg>
      <span className="text-[11px] text-white/42 font-medium tracking-wide whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

const AdvancedSkills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".sk-heading", { y: "100%", opacity: 0 });
      ScrollTrigger.create({
        trigger: ".sk-heading-clip",
        start: "top 87%",
        once: true,
        onEnter: () =>
          gsap.to(".sk-heading", { y: 0, opacity: 1, duration: 1.1, ease: "power4.out" }),
      });

      gsap.set(".sk-marquee-wrap", { opacity: 0, y: 20 });
      ScrollTrigger.create({
        trigger: ".sk-marquee-wrap",
        start: "top 88%",
        once: true,
        onEnter: () =>
          gsap.to(".sk-marquee-wrap", {
            opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
          }),
      });

      gsap.set(".sk-extra", { opacity: 0 });
      ScrollTrigger.create({
        trigger: ".sk-extra",
        start: "top 90%",
        once: true,
        onEnter: () => gsap.to(".sk-extra", { opacity: 1, duration: 0.7, ease: "power3.out" }),
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative z-10 py-28 border-t border-white/5"
    >
      {/* Label + heading — padded normally */}
      <div className="px-8 md:px-16 mb-16">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[10px] text-white/20 font-mono tracking-widest">02</span>
          <span className="text-[10px] text-white/22 uppercase tracking-[0.25em]">Skills</span>
        </div>

        <div className="sk-heading-clip overflow-hidden">
          <h2
            className="sk-heading text-[clamp(2.2rem,4.5vw,5.5rem)] font-bold italic text-white leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What I Work With.
          </h2>
        </div>
      </div>

      {/* ── Row 1: left → right (ticker) ── */}
      <div className="sk-marquee-wrap overflow-hidden border-y border-white/5 py-5">
        <div className="flex animate-ticker">
          {[0, 1].map((c) => (
            <div key={c} className="flex shrink-0">
              {ROW1.map((item) => <MarqueeItem key={item.name} {...item} />)}
            </div>
          ))}
        </div>
      </div>

      {/* ── Row 2: right → left (ticker-reverse) ── */}
      <div className="sk-marquee-wrap overflow-hidden border-b border-white/5 py-5">
        <div className="flex animate-ticker-reverse">
          {[0, 1].map((c) => (
            <div key={c} className="flex shrink-0">
              {ROW2.map((item) => <MarqueeItem key={item.name} {...item} />)}
            </div>
          ))}
        </div>
      </div>

      {/* Extra text-only */}
      <div className="sk-extra px-8 md:px-16 mt-8 flex flex-wrap gap-2">
        {["SQL", "Zustand", "Material UI", "PostgreSQL", "AWS Cognito", "AWS S3", "VS Code", "Docker", "GitLab"].map((s) => (
          <span
            key={s}
            className="px-3 py-1.5 text-[10px] text-white/20 border border-white/6 rounded-lg tracking-wide"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
};

export default AdvancedSkills;

"use client";
import Image from "next/image";
import Profile from "@/public/assets/profile.jpeg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TICKER_ITEMS = [
  "React.js", "Next.js", "TypeScript", "TailwindCSS",
  "Redux", "Node.js", "Docker", "MongoDB", "AWS Cognito", "TanStack Query",
];

const AdvancedHero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Set all animated elements invisible first */
      gsap.set([".hero-badge", ".hero-line", ".hero-bottom", ".hero-portrait", ".hero-ticker"], {
        opacity: 0,
      });

      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(".hero-badge", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
        .to(".hero-line", {
          opacity: 1, y: 0,
          duration: 1.3, ease: "power4.out", stagger: 0.1,
        }, "-=0.4")
        .to(".hero-bottom", { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.65")
        .to(".hero-portrait", { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "<")
        .to(".hero-ticker", { opacity: 1, duration: 0.7 }, "-=0.3");

      /* Set transform origins for clip animation */
      gsap.set(".hero-line", { y: 60 });
      gsap.set(".hero-badge", { y: 16 });
      gsap.set(".hero-bottom", { y: 28 });
      gsap.set(".hero-portrait", { x: 20 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative z-10 min-h-screen flex flex-col pt-24 overflow-hidden"
    >
      {/* Scan line — killianherzer.com signature */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px w-full animate-scan bg-linear-to-r from-transparent via-white/8 to-transparent" />

      {/* Subtle radial depth gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(120,119,198,0.04)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,100,100,0.025)_0%,transparent_70%)]" />
      </div>

      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-10 relative">

        {/* Status badge */}
        <div className="hero-badge inline-flex items-center gap-2.5 mb-10 self-start px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-[10px] text-white/40 tracking-[0.2em] font-medium uppercase">
            Open to opportunities
          </span>
        </div>

        {/* Giant name and Portrait */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <h1 className="leading-[0.87] tracking-tight overflow-hidden">
            <span className="hero-line block text-[clamp(5rem,16vw,18rem)] font-black text-white">
              Ayush
            </span>
            <span className="hero-line block text-[clamp(5rem,16vw,18rem)] font-black text-white/12">
              Raj.
            </span>
          </h1>

          {/* Accent portrait — moved next to name */}
          <div className="hero-portrait self-start md:self-end shrink-0 hidden md:block pb-4">
            <div className="relative w-24 h-32 md:w-28 md:h-36 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={Profile}
                alt="Ayush Raj"
                fill
                priority
                sizes="112px"
                quality={95}
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#070707]/60 to-transparent" />
            </div>
            <p className="mt-2 text-[8px] text-white/15 font-mono tracking-[0.2em] text-right">
              Gurugram, India
            </p>
          </div>
        </div>

        {/* Bottom row: sub + CTAs */}
        <div className="hero-bottom flex flex-col md:flex-row md:items-end gap-8">
          <div className="flex-1">
            <p className="text-sm md:text-base text-white/35 max-w-xs leading-relaxed mb-8">
              Building production web applications across the stack, from
              responsive React interfaces to Node.js APIs and MongoDB workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-7 py-3.5 bg-white text-black text-[11px] font-black rounded-full tracking-[0.15em] uppercase hover:bg-white/88 transition-colors"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 border border-white/15 text-white/50 text-[11px] font-medium rounded-full tracking-[0.12em] uppercase hover:border-white/40 hover:text-white/85 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Portrait on mobile */}
          <div className="hero-portrait self-end shrink-0 md:hidden">
            <div className="relative w-24 h-32 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={Profile}
                alt="Ayush Raj"
                fill
                priority
                sizes="96px"
                quality={95}
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#070707]/60 to-transparent" />
            </div>
            <p className="mt-2 text-[8px] text-white/15 font-mono tracking-[0.2em] text-right">
              Gurugram, India
            </p>
          </div>
        </div>

        <p className="mt-6 text-[9px] text-white/15 uppercase tracking-[0.3em] font-mono">
          Full Stack Engineer &nbsp;·&nbsp; React · Node.js · Express · MongoDB
        </p>
      </div>

      {/* Scrolling ticker */}
      <div className="hero-ticker border-t border-white/6 py-4 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-10 pr-10">
              {TICKER_ITEMS.map((item) => (
                <span key={item} className="text-[10px] text-white/15 uppercase tracking-[0.22em] font-medium">
                  {item}
                  <span className="ml-10 text-white/8">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedHero;

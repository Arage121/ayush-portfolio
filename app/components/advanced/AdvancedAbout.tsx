"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    role: "Full Stack Engineer",
    company: "Invincible Ocean",
    period: "May 2025 – Present",
    points: [
      "Own frontend and backend development of a production Challan Management platform used by 8–10 client companies, processing about 2,000 challans per month.",
      "Replaced manual one-by-one assignment with CSV bulk processing for 100–500 challans per operation; largest processed batch: 650.",
      "Implemented CSV validation, uploads, AWS S3 retrieval, parsing, and assignment updates across React, Node.js, and MongoDB.",
      "Develop and modify Express APIs and MongoDB logic for assignment, settlement, status, batch processing, filtering, pagination, and exports.",
      "Contributed to cloud cost optimization, AI chatbot, admin portal, PDF reporting, and onboarding/KYC products.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "AIML Data Analytics Solutions Pvt Ltd",
    period: "June 2024 – April 2025",
    points: [
      "Built dashboards and file-processing workflows for loan, payment, and amortization applications.",
      "Type-safe React.js + TypeScript component architecture, reducing dev time by 30%.",
      "AWS Cognito authentication with role-based access control.",
    ],
  },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "2,000", label: "Challans / Month" },
  { value: "650", label: "Largest Batch" },
];

const AdvancedAbout = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Always use gsap.set + ScrollTrigger.create + onEnter pattern
         so elements never get stuck at opacity:0 */

      gsap.set(".about-label", { opacity: 0, y: 12 });
      ScrollTrigger.create({
        trigger: ".about-label",
        start: "top 90%",
        once: true,
        onEnter: () => gsap.to(".about-label", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }),
      });

      gsap.set(".about-heading", { y: "100%", opacity: 0 });
      ScrollTrigger.create({
        trigger: ".about-heading-clip",
        start: "top 87%",
        once: true,
        onEnter: () => gsap.to(".about-heading", { y: 0, opacity: 1, duration: 1.1, ease: "power4.out" }),
      });

      gsap.set(".about-bio", { opacity: 0, y: 20 });
      ScrollTrigger.create({
        trigger: ".about-bio",
        start: "top 88%",
        once: true,
        onEnter: () => gsap.to(".about-bio", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }),
      });

      gsap.set(".stat-val", { opacity: 0, y: 36 });
      ScrollTrigger.create({
        trigger: ".stats-row",
        start: "top 84%",
        once: true,
        onEnter: () =>
          gsap.to(".stat-val", {
            opacity: 1, y: 0,
            duration: 0.8, stagger: 0.15, ease: "power3.out",
          }),
      });

      gsap.set(".exp-row", { opacity: 0, y: 30 });
      ScrollTrigger.create({
        trigger: ".exp-list",
        start: "top 82%",
        once: true,
        onEnter: () =>
          gsap.to(".exp-row", {
            opacity: 1, y: 0,
            duration: 0.8, stagger: 0.16, ease: "power3.out",
          }),
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 py-32 px-8 md:px-16 border-t border-white/5"
    >
      {/* Label */}
      <div className="about-label flex items-center gap-4 mb-14">
        <span className="text-[10px] text-white/20 font-mono tracking-widest">01</span>
        <span className="text-[10px] text-white/25 uppercase tracking-[0.25em]">About</span>
      </div>

      {/* Heading — Playfair Display italic */}
      <div className="about-heading-clip overflow-hidden mb-10">
        <h2
          className="about-heading text-[clamp(2.2rem,4.5vw,5.5rem)] font-bold italic text-white leading-tight tracking-tight max-w-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          I build production web products across the full stack.
        </h2>
      </div>

      {/* Bio */}
      <p className="about-bio text-base md:text-lg text-white/32 max-w-2xl leading-relaxed mb-0">
        Full Stack Engineer with 2+ years of experience building production web applications
        with React, Next.js, Node.js, Express, and MongoDB. At{" "}
        <span className="text-white/58">Invincible Ocean</span>, I own frontend and backend
        delivery for a Challan Management platform, translating business needs into UI,
        APIs, and database changes.
      </p>

      {/* Large stats — killianherzer-style */}
      <div className="stats-row grid grid-cols-3 border-t border-white/8 mt-16 mb-24">
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            className={`stat-val py-10 ${i > 0 ? "border-l border-white/8 pl-8 md:pl-12" : "pr-8 md:pr-12"}`}
          >
            <p
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {value}
            </p>
            <p className="text-[10px] text-white/22 mt-3 uppercase tracking-[0.25em]">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Work history */}
      <p className="text-[10px] text-white/18 uppercase tracking-[0.3em] font-mono mb-10">
        Work History
      </p>

      <div className="exp-list max-w-3xl">
        {experience.map((job, idx) => (
          <div key={job.company} className="exp-row border-t border-white/8 py-10">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-5">
              <div>
                <p className="text-[10px] text-white/18 font-mono tracking-widest mb-1">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="text-white font-semibold text-base">{job.role}</h3>
                <p className="text-white/32 text-sm mt-0.5">{job.company}</p>
              </div>
              <p className="text-white/18 text-[10px] font-mono shrink-0 tracking-wider">{job.period}</p>
            </div>
            <ul className="space-y-2.5">
              {job.points.map((point, i) => (
                <li key={i} className="text-sm text-white/32 leading-relaxed flex gap-3">
                  <span className="text-white/15 shrink-0 mt-0.5">→</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="exp-row border-t border-white/8 py-10">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
            <div>
              <p className="text-[10px] text-white/18 font-mono tracking-widest mb-1">EDU</p>
              <h3 className="text-white font-semibold text-base">B.Tech — Computer Science &amp; Engineering</h3>
              <p className="text-white/32 text-sm mt-0.5">Lovely Professional University, Phagwara</p>
            </div>
            <p className="text-white/18 text-[10px] font-mono shrink-0 tracking-wider">
              2019 – 2023 · 7.43 CGPA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAbout;

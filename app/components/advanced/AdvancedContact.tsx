"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { label: "GitHub",   href: "https://github.com/Arage121" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ayush-raj" },
  { label: "Email",    href: "mailto:rajayush746@gmail.com" },
];

const AdvancedContact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".ct-heading", { y: "100%", opacity: 0 });
      ScrollTrigger.create({
        trigger: ".ct-heading-clip",
        start: "top 87%",
        once: true,
        onEnter: () =>
          gsap.to(".ct-heading", { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }),
      });

      gsap.set(".ct-email", { opacity: 0, y: 24 });
      ScrollTrigger.create({
        trigger: ".ct-email",
        start: "top 88%",
        once: true,
        onEnter: () => gsap.to(".ct-email", { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }),
      });

      gsap.set(".ct-social", { opacity: 0, y: 16 });
      ScrollTrigger.create({
        trigger: ".ct-socials",
        start: "top 88%",
        once: true,
        onEnter: () =>
          gsap.to(".ct-social", {
            opacity: 1, y: 0,
            duration: 0.6, stagger: 0.1, ease: "power3.out",
          }),
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative z-10 py-32 px-8 md:px-16 border-t border-white/5"
    >
      <div className="flex items-center gap-4 mb-14">
        <span className="text-[10px] text-white/20 font-mono tracking-widest">04</span>
        <span className="text-[10px] text-white/25 uppercase tracking-[0.25em]">Contact</span>
      </div>

      {/* Heading — Playfair Display italic, very large */}
      <div className="ct-heading-clip overflow-hidden mb-10">
        <h2
          className="ct-heading text-[clamp(3.5rem,10vw,11rem)] font-bold italic text-white leading-none tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Let&apos;s talk.
        </h2>
      </div>

      <a
        href="mailto:rajayush746@gmail.com"
        className="ct-email group inline-flex items-center gap-4 mb-16"
      >
        <span className="text-lg md:text-xl text-white/38 group-hover:text-white/80 transition-colors font-medium">
          rajayush746@gmail.com
        </span>
        <span className="text-white/18 group-hover:text-white/50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-lg">
          ↗
        </span>
      </a>

      <div className="ct-socials flex items-center gap-10">
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="ct-social text-xs text-white/28 hover:text-white/68 transition-colors uppercase tracking-widest"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default AdvancedContact;

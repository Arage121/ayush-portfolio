"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const AdvancedNav = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -16,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2,
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-6 flex justify-between items-center"
    >
      <span className="nav-item font-black text-white text-sm tracking-[0.15em] uppercase">
        AR
      </span>
      <ul className="flex items-center gap-8">
        {links.map(({ label, href }) => (
          <li key={label} className="nav-item">
            <Link
              href={href}
              className="text-xs font-medium text-white/40 hover:text-white/90 transition-colors tracking-widest uppercase"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AdvancedNav;

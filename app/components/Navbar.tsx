"use client";

import Link from "next/link";
import { useState } from "react";
import ToggleTheme from "./ToggleTheme";

const items = [
  { id: 1, label: "Home", link: "home" },
  { id: 2, label: "About", link: "about" },
  { id: 3, label: "Skills", link: "skills" },
  { id: 4, label: "Projects", link: "projects" },
  { id: 5, label: "Contact", link: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#fafafa]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="uppercase font-bold text-sm tracking-widest">
          Ayush Raj
        </span>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {items.map(({ id, label, link }) => (
            <li key={id}>
              <Link
                href={`#${link}`}
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <ToggleTheme />
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-4">
          <ToggleTheme />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-1 cursor-pointer"
          >
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
          {items.map(({ id, label, link }) => (
            <Link
              key={id}
              href={`#${link}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium border-b border-gray-100 dark:border-gray-900 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

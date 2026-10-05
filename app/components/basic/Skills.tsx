"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  siHtml5, siCss, siJavascript, siTypescript,
  siReact, siNextdotjs, siTailwindcss, siNodedotjs, siExpress,
  siRedux, siTanstack, siGit, siDocker, siMongodb, siGithub, siPostman,
} from "simple-icons";

type SIObj = { path: string; hex: string };

type Skill = {
  name: string;
  icon: SIObj | null;
  weight: "primary" | "secondary";
};

const skillGroups: { category: string; skills: Skill[] }[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", icon: siTypescript, weight: "primary" },
      { name: "JavaScript", icon: siJavascript, weight: "primary" },
      { name: "HTML",       icon: siHtml5,      weight: "primary" },
      { name: "CSS",        icon: siCss,        weight: "primary" },
      { name: "SQL",        icon: null,         weight: "secondary" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React.js",      icon: siReact,       weight: "primary" },
      { name: "Next.js",       icon: siNextdotjs,   weight: "primary" },
      { name: "TailwindCSS",   icon: siTailwindcss, weight: "primary" },
      { name: "Redux",         icon: siRedux,       weight: "primary" },
      { name: "TanStack Query",icon: siTanstack,    weight: "primary" },
      { name: "Node.js",       icon: siNodedotjs,   weight: "secondary" },
      { name: "Express",       icon: siExpress,     weight: "secondary" },
      { name: "Zustand",       icon: null,          weight: "secondary" },
      { name: "Material UI",   icon: null,          weight: "secondary" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git",         icon: siGit,        weight: "primary" },
      { name: "Docker",      icon: siDocker,     weight: "primary" },
      { name: "GitHub",      icon: siGithub,     weight: "primary" },
      { name: "MongoDB",     icon: siMongodb,    weight: "secondary" },
      { name: "Postman",     icon: siPostman,    weight: "secondary" },
      { name: "AWS Cognito", icon: null,         weight: "secondary" },
      { name: "AWS S3",      icon: null,         weight: "secondary" },
      { name: "PostgreSQL",  icon: null,         weight: "secondary" },
      { name: "VS Code",     icon: null,         weight: "secondary" },
    ],
  },
];

function getIconColor(hex: string, isDark: boolean) {
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  if (isDark && 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.12) return "#6b7280";
  return `#${hex}`;
}

const Skills = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-4">
        Skills
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight mb-16">
        What I work with.
      </h2>

      <div className="space-y-12">
        {skillGroups.map(({ category, skills }) => (
          <div
            key={category}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 items-start"
          >
            {/* Category label */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-[0.15em]">
                {category}
              </span>
              {/* Line — desktop only */}
              <div className="hidden md:block flex-1 h-px bg-gray-200 dark:bg-gray-800" />
            </div>

            {/* Chips — primary skills slightly larger */}
            <div className="flex flex-wrap gap-2">
              {skills.map(({ name, icon, weight }) => {
                const isPrimary = weight === "primary";
                const iconColor = icon ? getIconColor(icon.hex, isDark) : null;

                return (
                  <span
                    key={name}
                    className={[
                      "inline-flex items-center gap-1.5 rounded-lg border font-medium transition-colors",
                      "bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-gray-700",
                      "text-gray-700 dark:text-gray-300",
                      "hover:border-gray-400 dark:hover:border-gray-500",
                      isPrimary
                        ? "px-3.5 py-2 text-sm"
                        : "px-2.5 py-1.5 text-xs",
                    ].join(" ")}
                  >
                    {icon && iconColor && (
                      <svg
                        viewBox="0 0 24 24"
                        width={isPrimary ? 14 : 12}
                        height={isPrimary ? 14 : 12}
                        aria-hidden
                        className="shrink-0"
                      >
                        <path d={icon.path} fill={iconColor} />
                      </svg>
                    )}
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

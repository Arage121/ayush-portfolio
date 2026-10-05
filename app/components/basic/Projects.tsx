const projects = [
  {
    title: "Challan Management Platform",
    gradient: "from-cyan-900 via-slate-800 to-slate-950",
    filename: "challan-assignment.ts",
    codeLines: [
      { purple: "const ", blue: "rows", white: " = ", yellow: "await ", green: "parseCsv", gray: "(file)" },
      { purple: "const ", blue: "result", white: " = ", green: "assignChallans", gray: "(rows)" },
      { purple: "return ", blue: "<", red: "BatchResult", orange: " count", white: "={result.count} ", blue2: "/>" },
    ],
    description:
      "Production platform owned across frontend and backend, supporting challan assignment, settlement, status, batch processing, filtering, and exports.",
    highlights: [
      "Serves 8–10 client companies and processes approximately 2,000 challans per month.",
      "CSV bulk assignment handles 100–500 challans per operation; largest processed batch: 650. Workflow includes validation, AWS S3 upload and retrieval, parsing, and MongoDB updates.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS S3"],
  },
  {
    title: "Loan Management Tool",
    gradient: "from-slate-700 via-slate-800 to-slate-900",
    filename: "loan-dashboard.tsx",
    codeLines: [
      { purple: "const ", blue: "loans", white: " = ", yellow: "await ", green: "getLoanData", gray: "()" },
      { purple: "const ", blue: "report", white: " = ", green: "generateReport", gray: "(loans)" },
      { purple: "return ", blue: "<", red: "Dashboard", orange: " data", white: "={loan} ", blue2: "/>" },
    ],
    description:
      "Financial dashboards for loan, payment, and amortization workflows, with data-heavy reporting and file processing.",
    highlights: [
      "File workflows cover upload, verification, validation, and status tracking for financial datasets.",
      "Reusable React and TypeScript components support the application’s data-heavy interfaces.",
    ],
    tech: ["React.js", "TypeScript", "TailwindCSS", "TanStack Query", "Zustand"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-4">
        Projects
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight mb-16">
        Things I&apos;ve built.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/2 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl dark:hover:shadow-none transition-all duration-300 overflow-hidden"
          >
            {/* ── Code-editor visual header ── */}
            <div
              className={`relative h-44 bg-linear-to-br ${project.gradient} overflow-hidden`}
            >
              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />

              {/* Window chrome */}
              <div className="absolute top-3 left-4 right-4 flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <div className="ml-3 px-3 h-5 bg-black/30 rounded text-[9px] text-white/40 flex items-center font-mono">
                  {project.filename}
                </div>
              </div>

              {/* Fake code lines */}
              <div className="absolute bottom-4 left-4 right-4 font-mono text-[11px] space-y-1.5">
                <p>
                  <span className="text-purple-300">{project.codeLines[0].purple}</span>
                  <span className="text-blue-300">{project.codeLines[0].blue}</span>
                  <span className="text-white/40">{project.codeLines[0].white}</span>
                  <span className="text-yellow-300">{project.codeLines[0].yellow}</span>
                  <span className="text-green-300">{project.codeLines[0].green}</span>
                  <span className="text-white/40">{project.codeLines[0].gray}</span>
                </p>
                <p>
                  <span className="text-purple-300">{project.codeLines[1].purple}</span>
                  <span className="text-blue-300">{project.codeLines[1].blue}</span>
                  <span className="text-white/40">{project.codeLines[1].white}</span>
                  <span className="text-green-300">{project.codeLines[1].green}</span>
                  <span className="text-white/40">{project.codeLines[1].gray}</span>
                </p>
                <p>
                  <span className="text-purple-300">{project.codeLines[2].purple}</span>
                  <span className="text-blue-300">{project.codeLines[2].blue}</span>
                  <span className="text-red-300">{project.codeLines[2].red}</span>
                  <span className="text-orange-300">{project.codeLines[2].orange}</span>
                  <span className="text-white/40">{project.codeLines[2].white}</span>
                  <span className="text-blue-300">{project.codeLines[2].blue2}</span>
                </p>
              </div>
            </div>

            {/* ── Card content ── */}
            <div className="p-7">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                {project.description}
              </p>
              <ul className="space-y-2 mb-6">
                {project.highlights.map((hl, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex gap-2"
                  >
                    <span className="text-gray-300 dark:text-gray-700 shrink-0 mt-0.5">
                      ›
                    </span>
                    {hl}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Placeholder */}
        <div className="rounded-2xl border border-dashed border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center text-center min-h-64 gap-2">
          <div className="w-10 h-10 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center mb-1">
            <span className="text-gray-300 dark:text-gray-700 text-xl font-light">+</span>
          </div>
          <p className="text-sm font-medium text-gray-400 dark:text-gray-600">
            More projects coming soon
          </p>
          <p className="text-xs text-gray-300 dark:text-gray-700">
            Currently building in production
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

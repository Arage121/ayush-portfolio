const experience = [
  {
    role: "Full Stack Engineer",
    company: "Invincible Ocean",
    period: "May 2025 – Present",
    location: "Gurugram, India",
    points: [
      "Own frontend and backend development of a production Challan Management platform used by 8–10 client companies and processing about 2,000 challans per month.",
      "Replaced one-by-one assignment with CSV bulk processing for 100–500 challans per operation; the largest processed batch was 650.",
      "Built assignment workflows across React, Node.js, MongoDB, and AWS S3, including CSV validation, upload, retrieval, parsing, and assignment updates.",
      "Develop and update Express APIs and MongoDB business logic for assignment, settlement, status, batch processing, filtering, pagination, and exports.",
      "Also contributed to cloud cost optimization, AI chatbot, admin portal, PDF reporting, and onboarding/KYC products.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "AIML Data Analytics Solutions Pvt Ltd",
    period: "June 2024 – April 2025",
    location: "Coimbatore, India",
    points: [
      "Built interactive dashboards for loan, payment, and amortization workflows, plus file upload, verification, validation, and status tracking.",
      "Developed reusable, type-safe component architecture with React.js and TypeScript, reducing feature development time by 30%.",
      "Integrated secure authentication flows using AWS Cognito with role-based access control.",
    ],
  },
];

const tags = [
  "Full-Stack Product Development",
  "REST API Development",
  "RBAC Systems",
  "Data Dashboards",
  "AI Interfaces",
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "2,000", label: "Challans / Month" },
  { value: "650", label: "Largest Batch" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-4">
        About
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight mb-12">
        I build production web products across the full stack.
      </h2>

      {/* ── Split layout: terminal card + bio ── */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-16">

        {/* Terminal card */}
        <div className="md:col-span-2">
          <div className="h-full min-h-64 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-950 shadow-xl font-mono">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-900 border-b border-gray-800">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="ml-2 text-gray-500 text-[10px]">~/ayush-raj</span>
            </div>

            {/* Terminal lines */}
            <div className="p-5 space-y-2.5 text-[11px] leading-relaxed">
              <div className="flex gap-2">
                <span className="text-green-400 shrink-0">❯</span>
                <span className="text-gray-300">whoami</span>
              </div>
              <p className="pl-5 text-gray-400">Ayush Raj · Full Stack Engineer</p>

              <div className="flex gap-2 pt-1">
                <span className="text-green-400 shrink-0">❯</span>
                <span className="text-gray-300">cat role.txt</span>
              </div>
              <div className="pl-5">
                <p className="text-white">Full Stack Engineer</p>
                <p className="text-blue-400">@ Invincible Ocean</p>
              </div>

              <div className="flex gap-2 pt-1">
                <span className="text-green-400 shrink-0">❯</span>
                <span className="text-gray-300">echo $STACK</span>
              </div>
              <div className="pl-5 flex flex-wrap gap-x-2 gap-y-0.5">
                <span className="text-cyan-400">React</span>
                <span className="text-blue-400">Node.js</span>
                <span className="text-white">Express</span>
                <span className="text-teal-400">MongoDB</span>
              </div>

              <div className="flex gap-2 pt-1">
                <span className="text-green-400 shrink-0">❯</span>
                <span className="text-gray-300">ls ./domains</span>
              </div>
              <div className="pl-5 flex flex-wrap gap-x-2 gap-y-0.5">
                <span className="text-yellow-300">AI-Interfaces/</span>
                <span className="text-yellow-300">Dashboards/</span>
                <span className="text-yellow-300">AdminPortals/</span>
              </div>

              {/* Blinking cursor */}
              <div className="flex items-center gap-1 pt-1">
                <span className="text-green-400">❯</span>
                <span className="w-1.5 h-3.5 bg-green-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Bio + tags + stats */}
        <div className="md:col-span-3 flex flex-col justify-center gap-7">
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            Full Stack Engineer with 2+ years of experience building production
            web applications using React, Next.js, Node.js, Express, and MongoDB.
            Currently owning frontend and backend delivery for a production
            Challan Management platform, from workflows and APIs to data updates.
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/10 dark:hover:bg-white/10 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="text-center py-4 px-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/5"
              >
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {value}
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Experience ── */}
      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-8">
        Experience
      </p>

      <div className="space-y-10">
        {experience.map((job) => (
          <div
            key={job.company}
            className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800"
          >
            <div className="absolute -left-1.25 top-1 w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600" />
            <div className="mb-3">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {job.role}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {job.company} &mdash; {job.location}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-600 mt-0.5 font-mono">
                {job.period}
              </p>
            </div>
            <ul className="space-y-2">
              {job.points.map((point, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex gap-2"
                >
                  <span className="text-gray-300 dark:text-gray-700 shrink-0 mt-0.5">›</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Education ── */}
      <div className="mt-16">
        <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-6">
          Education
        </p>
        <div className="pl-6 border-l-2 border-gray-200 dark:border-gray-800 relative">
          <div className="absolute -left-1.25 top-1 w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600" />
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            B.Tech in Computer Science &amp; Engineering
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Lovely Professional University &mdash; Phagwara, Punjab
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-600 mt-0.5 font-mono">
            July 2019 – May 2023 &nbsp;·&nbsp; CGPA: 7.43
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

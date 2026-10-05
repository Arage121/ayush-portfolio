const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-4">
        Contact
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight mb-4">
        Let&apos;s work together.
      </h2>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg mb-14 text-sm">
        Open to new roles, freelance, or conversations about full stack
        engineering. Reach me by email or LinkedIn.
      </p>

      {/* Primary CTA — large email link */}
      <a
        href="mailto:rajayush746@gmail.com"
        className="group flex items-center justify-between gap-4 w-full max-w-2xl border-y border-gray-200 dark:border-gray-800 py-6 hover:border-gray-400 dark:hover:border-gray-600 transition-colors mb-10"
      >
        <span className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors truncate">
          rajayush746@gmail.com
        </span>
        <span className="text-gray-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-xl shrink-0">
          ↗
        </span>
      </a>

      {/* Secondary links — horizontal bar */}
      <div className="flex flex-wrap items-center gap-6 md:gap-8">
        <a
          href="https://github.com/Arage121"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          GitHub
        </a>

        <span className="w-px h-4 bg-gray-200 dark:bg-gray-800" />

        <a
          href="https://linkedin.com/in/ayush-raj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          LinkedIn
        </a>

        <span className="w-px h-4 bg-gray-200 dark:bg-gray-800" />

        <a
          href="tel:+919304357267"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-mono"
        >
          +91 93043 57267
        </a>
      </div>
    </section>
  );
};

export default Contact;

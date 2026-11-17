const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-10">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left: name + role */}
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">Ayush Raj</p>
          <p className="text-xs text-gray-400 dark:text-gray-600 mt-0.5">
            Full Stack Engineer · Gurugram, India
          </p>
        </div>

        {/* Center: quick links */}
        <nav className="flex items-center gap-6">
          {(["#about", "#skills", "#projects", "#contact"] as const).map((href) => (
            <a
              key={href}
              href={href}
              className="text-xs text-gray-400 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition-colors capitalize"
            >
              {href.replace("#", "")}
            </a>
          ))}
        </nav>

        {/* Right: copyright */}
        <p className="text-xs text-gray-300 dark:text-gray-700">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

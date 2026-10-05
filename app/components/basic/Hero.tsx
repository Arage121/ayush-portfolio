import Image from "next/image";
import Profile from "@/public/assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-65px)] flex items-center px-6 max-w-6xl mx-auto"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-14 md:gap-20 w-full py-16">

        {/* ── Text ── */}
        <div className="flex-1 text-center md:text-left">
          {/* Current position — more specific than "Software Developer" */}
          <div className="flex items-center gap-2 justify-center md:justify-start mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              Full Stack Engineer &nbsp;&mdash;&nbsp; Invincible Ocean
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.05] tracking-tight">
            Ayush Raj.
          </h1>

          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mt-6 max-w-md leading-relaxed">
            Full stack engineer building production platforms with React,
            Node.js, Express, and MongoDB.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl text-sm font-semibold hover:opacity-80 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Location — subtle, not a label */}
          <p className="mt-8 text-xs text-gray-300 dark:text-gray-700 font-mono tracking-wider">
            Gurugram, India
          </p>
        </div>

        {/* ── Image ── */}
        <div className="relative shrink-0">
          <div className="absolute -inset-6 bg-linear-to-br from-blue-100 via-violet-50 to-pink-100 dark:from-blue-950/40 dark:via-violet-950/20 dark:to-pink-950/30 rounded-3xl blur-2xl" />

          <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-gray-300 dark:border-gray-700 rounded-tr-2xl" />
          <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-gray-300 dark:border-gray-700 rounded-bl-2xl" />

          <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 shadow-2xl">
            <Image
              src={Profile}
              alt="Ayush Raj"
              fill
              priority
              sizes="(max-width: 768px) 256px, 288px"
              quality={95}
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

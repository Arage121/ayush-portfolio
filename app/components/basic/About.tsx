
const About = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto py-20 px-6">
      {/* Hook */}
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        I build fast, scalable frontend systems for real-world products.
      </h1>

      {/* Intro */}
      <p
        className="leading-relaxed mb-10 
    text-gray-600 dark:text-gray-400"
      >
        Frontend-focused developer with experience in React, Next.js, and
        TypeScript, building dashboards, admin panels, and AI-driven interfaces
        with a focus on performance and scalability.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mb-10">
        {[
          "Performance Optimization",
          "Scalable State Management",
          "RBAC Systems",
          "Data Dashboards",
          "AI Interfaces",
        ].map((tag) => (
          <span
            key={tag}
            className="
          px-4 py-2 rounded-full text-sm transition-all
          
          bg-gray-100 text-gray-700 border border-gray-200
          hover:bg-gray-200

          dark:bg-white/5 dark:text-gray-300 dark:border-white/10
          dark:hover:bg-white/10
        "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
        {[
          "1.5+ Years Experience",
          "100+ Resources Handled",
          "30% Performance Boost",
        ].map((stat) => (
          <div
            key={stat}
            className="
          p-2 rounded-md text-center font-medium transition-all

          bg-white border border-gray-200 shadow-sm
          hover:shadow-md

          dark:bg-white/5 dark:border-white/10 dark:shadow-none
          dark:hover:bg-white/10
        "
          >
            {stat}
          </div>
        ))}
      </div>

      {/* Focus */}
      <p
        className="text-sm 
    text-gray-500 dark:text-gray-500"
      >
        Currently focused on frontend system design and building scalable
        production-grade applications.
      </p>
    </section>
  );
};

export default About;

import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Dashboard",
    desc:
      "A real-time inventory management system designed for small businesses to track stock levels, visualize sales velocity, and generate automated reports.",
    tags: ["React", "Tailwind", "Firebase"],
    linkText: "View case study →",
  },
  {
    title: "TaskMaster API",
    desc:
      "A robust RESTful API for task delegation and collaboration with JWT authentication, rate limiting, and Swagger docs.",
    tags: ["Node.js", "Express", "MongoDB"],
    linkText: "View documentation →",
  },
  {
    title: "FinTrack Mobile",
    desc:
      "A cross-platform finance app using biometrics and on-device chart rendering for privacy.",
    tags: ["React Native", "TypeScript", "SQLite"],
    linkText: "View app →",
  },
  // {
  //   title: "WeatherSync",
  //   desc:
  //     "A progressive web app delivering hyper-local weather forecasts with offline-first capabilities.",
  //   tags: ["Vue.js", "Service Workers", "OpenWeather"],
  //   linkText: "View demo →",
  // },
  // {
  //   title: "Relay Chat",
  //   desc:
  //     "An experimental real-time chat app exploring WebSocket concurrency and encryption.",
  //   tags: ["Socket.io", "Redis", "Docker"],
  //   linkText: "View source →",
  // },
  // {
  //   title: "CMS Core",
  //   desc:
  //     "A headless CMS built from scratch with content modeling and GraphQL APIs.",
  //   tags: ["Python", "Django", "GraphQL"],
  //   linkText: "View project →",
  // },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative px-6 md:px-10 py-32 overflow-visible"
    >
      {/* ambient background */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] 
        rounded-full bg-[rgb(var(--primary))/15] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] 
        rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Projects
        </h2>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative rounded-[2rem] p-[1.5px]
              bg-gradient-to-br from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]"
            >
              {/* inner card */}
              <div className="relative h-full rounded-[2.3rem] 
                bg-[#0b0f14] p-9 overflow-hidden">

                {/* color wash */}
                <div className="absolute inset-0 
                  bg-gradient-to-br from-[#ff7a18]/10 via-transparent to-[#ff2e88]/10 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500 pointer-events-none" />

                {/* floating glow */}
                <div className="absolute -top-24 -right-24 h-48 w-48 
                  bg-[#ff4d4d]/30 blur-3xl opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500" />

                {/* content */}
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-smlate-400 text-smm leading-relaxed">
                    {project.desc}
                  </p>

                  {/* tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full px-4 py-2 text-smm 
                        bg-white/5 border border-white/10 
                        text-smlate-300
                        group-hover:border-[#ff4d4d]/40
                        transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-10">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 
                      text-smm font-semibold
                      bg-gradient-to-r from-[#ff7a18] to-[#ff2e88]
                      bg-clip-text text-transparent
                      opacity-80 group-hover:opacity-100 transition-opacity"
                    >
                      {project.linkText}
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-28 text-center">
          <a
            href="https://github.com/vishsakshi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 
            rounded-full px-9 py-3
            bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
            text-lg font-semibold text-white
            hover:opacity-90 transition"
          >
            View more on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
